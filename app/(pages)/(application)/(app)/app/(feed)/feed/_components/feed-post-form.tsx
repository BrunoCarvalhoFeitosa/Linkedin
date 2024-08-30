"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Bounce, toast } from "react-toastify"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { UserAvatar } from "@/app/components/application/user-avatar"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/components/ui/dialog"
import { Textarea } from "@/app/components/ui/textarea"
import { FeedEmojiPicker } from "./feed-emoji-picker"
import { MidiaFileUpload } from "@/app/components/ui/midia-file-upload"
import { Loader } from "@/public/svg/loader"
import { AiFillPicture } from "react-icons/ai"
import { IoCalendarNumberSharp } from "react-icons/io5"
import { MdArticle } from "react-icons/md"

interface FeedPostFormProps {
    currentUser: User
}

const formSchema = z.object({
    body: z
        .string()
        .min(5, {
            message: "Por favor, preencha o campo da postagem."
        })
        .max(1000, {
            message: "O máximo para postagem é 1000 caracteres."
        }),
    // image: z
    //     .any()
    //     .optional()
    //     .refine(file => file === undefined || file instanceof File, {
    //         message: "Se um arquivo for enviado, deve ser uma instância de File."
    //     })
})

export const FeedPostForm = ({ currentUser }: FeedPostFormProps) => {
    const [files, setFiles] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFinished, setIsFinished] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0)
    // const { mutate: mutatePost } = usePost(postId as string)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            body: "",
        }
    })

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharCount(event.target.value.length)
    }

    const handleFileUpload = (files: File[]) => {
        if (files.length > 0) {
            const file = files[0]

            if (!(file instanceof File)) {
                form.setError("image", {
                    type: "manual",
                    message: "O arquivo deve ser uma instância de File."
                })

                return
            }

            if (file.size > 5 * 1024 * 1024) {
                form.setError("image", {
                    type: "manual",
                    message: "O arquivo deve ser menor que 5MB."
                })
                return
            }

            setFiles([file])
            form.setValue("image", file)
            form.clearErrors("image")
        } else {
            setFiles([])
            form.setValue("image", undefined)
        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
    
        const formData = new FormData()
        formData.append("body", values.body)
        
        // if (files.length > 0) {
        //     formData.append("image", files[0])
        // }
    
        try {
            await axios.post("/api/posts", formData)
    
            toast.success("Postagem criada com sucesso.", {
                position: "bottom-right",
                type: "success",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })

            form.reset()
        } catch (error: any) {
            console.error("Error while fetching post message.", error)
            toast.error("Erro ao criar postagem.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            })

            form.reset()
        } finally {
            setIsLoading(false)
        }
    }    

    return (
        <div className="py-2 px-4 border">
            <div className="flex items-center gap-2">
                <div className="flex-1">
                    <UserAvatar
                        currentUser={currentUser}
                        hasLink={true}
                        width={56}
                        height={56}
                        className="w-14 h-14"
                    />
                </div>
                <Dialog>
                    <DialogTrigger className="w-full py-2 px-4 rounded-full border font-semibold text-left text-zinc-500">
                        Comece uma publicação
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle className="hidden">
                            Faça uma postagem
                        </DialogTitle>
                        <div className="flex items-center gap-2">
                            <div>
                                <UserAvatar
                                    currentUser={currentUser}
                                    hasLink={true}
                                    width={70}
                                    height={70}
                                    className="w-16 h-16"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold leading-none">
                                    {currentUser?.name}
                                </h4>
                                <p className="mt-1 leading-none">
                                    Publicar para todos
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="pr-2 flex flex-col gap-3 h-[216px] overflow-y-auto scrollbar-min">
                                        <FormField
                                            control={form.control}
                                            name="body"
                                            render={({ field }) => (
                                                <FormItem className="relative">
                                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                                        Sobre o que você quer falar?
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            className="h-40 resize-none outline-none"
                                                            onKeyUp={(e) => {
                                                                field.onChange(e)
                                                                handleTextareaChange(e as any)
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <div className="mb-2">
                                                        <p className="text-xs text-zinc-900">
                                                            <strong>{charCount}</strong>/1000 caracteres
                                                        </p>
                                                    </div>
                                                    <FormMessage className="m-0 p-0 translate-x-0" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="my-3 flex items-center gap-2">
                                        <div className="flex justify-center items-center w-12 h-12 rounded rounded-md-full bg-gray-100 hover:bg-gray-200">
                                            <MidiaFileUpload
                                                isFinished={isFinished}
                                                onChange={handleFileUpload}
                                            />
                                        </div>
                                        <div className="flex justify-center items-center w-12 h-12 rounded rounded-md-full bg-gray-100 hover:bg-gray-200">
                                            <FeedEmojiPicker
                                                onChange={(emoji: string) => form.setValue("body", `${form.getValues("body")} ${emoji}`)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 float-right w-2/4">
                                        <Button
                                            type="submit"
                                            variant="default"
                                            className="relative flex justify-center items-center w-full h-14"
                                        >
                                            {isLoading && (
                                                <div className="absolute left-5 top-[50%] translate-y-[-50%]">
                                                    <Loader color="#FFF" width="40px" height="40px" />
                                                </div>
                                            )}
                                            Publicar
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="py-3 lg:px-16 flex justify-between items-center">
                <div className="md:py-2 md:px-5 flex items-center gap-1 md:gap-2 rounded-md transition-background duration-200 hover:bg-gray-200 cursor-pointer">
                    <div>
                        <AiFillPicture className="w-6 h-6 md:w-8 md:h-8 text-[#0A66C2]" />
                    </div>
                    <div className="text-sm md:text-base font-semibold text-zinc-500">
                        Mídia
                    </div>
                </div>
                <div className="md:py-2 md:px-5 flex items-center gap-1 md:gap-2 rounded-md transition-background duration-200 hover:bg-gray-200 cursor-pointer">
                    <div>
                        <IoCalendarNumberSharp className="w-5 h-5 md:w-7 md:h-7 text-yellow-600" />
                    </div>
                    <div className="text-sm md:text-base font-semibold text-zinc-500">
                        Evento
                    </div>
                </div>
                <div className="md:py-2 md:px-5 flex items-center gap-1 md:gap-2 rounded-md transition-background duration-200 hover:bg-gray-200 cursor-pointer">
                    <div>
                        <MdArticle className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                    </div>
                    <div className="text-sm md:text-base font-semibold text-zinc-500">
                        Escrever artigo
                    </div>
                </div>
            </div>
        </div>
    )
}