"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Bounce, toast } from "react-toastify"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/app/components/ui/form"
import { Loader } from "@/public/svg/loader"

interface ModalProfileEditResumAbout {
    setOpen: (open: boolean) => void
    userProfile: User
}

const formSchema = z.object({
    about: z
        .string()
        .min(10, {
            message: "Por favor, insira um breve resumo sobre você."
        })
        .max(1000, {
            message: "O máximo de caracteres é 1000."
        })
})

export const ModalProfileEditAbout = ({ setOpen, userProfile }: ModalProfileEditResumAbout) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0)
    const router = useRouter()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          about: userProfile.about as string ?? "",
        }
    })

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharCount(event.target.value.length)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        try {
            const response = await axios.patch(`/api/users/${userProfile.id}`, {
                about: form.getValues("about")
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
    
            toast.success("Dados atualizados.", {
                position: "bottom-right",
                type: "success",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            })

            router.refresh()
            setOpen(false)
            return response.data
        } catch (error) {
            toast.error("Erro ao atualizar dados.", {
                position: "bottom-right",
                type: "error",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            })

            throw error
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <FormField
                            control={form.control}
                            name="about"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Resumo sobre você
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            autoComplete="off"
                                            className="h-96 lg:h-52 resize-none"
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
                                    <FormMessage className="m-0 p-0" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-3 flex justify-end w-full">
                        <Button
                            type="submit"
                            variant="default"
                            className="relative flex justify-center items-center w-full lg:w-2/4 h-14"
                        >
                            {isLoading && (
                                <div className="absolute left-5 top-[50%] translate-y-[-50%]">
                                    <Loader color="#FFF" width="40px" height="40px" />
                                </div>
                            )}
                            Atualizar dados do perfil
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}