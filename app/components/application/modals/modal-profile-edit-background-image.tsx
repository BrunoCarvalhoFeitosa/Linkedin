"use client"
import { useState } from "react"
import { ClientUploadedFileData } from "uploadthing/types"
import { useRouter } from "next/navigation"
import { Bounce, toast } from "react-toastify"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/app/components/ui/form"
import { Button } from "@/app/components/ui/button"
import { Loader } from "@/public/svg/loader"
import { useForm } from "react-hook-form"
import { UploadButton } from "@/lib/uploadthing"
import { PiUploadSimpleBold } from "react-icons/pi"

const formSchema = z.object({
    coverImage: z
        .string()
        .min(1, {
            message: "Por favor, insira uma foto de capa."
        }),
})

interface ModalProfileBackgroundImageProps {
    setOpen: (open: boolean) => void
    userId: string
    coverImage: string | null
}

export const ModalProfileEditBackgroundImage = ({ setOpen, userId, coverImage }: ModalProfileBackgroundImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            coverImage: "",
        },
    })

    const handlePictureUpload = (pictureUrl: string) => {
        form.setValue("coverImage", pictureUrl)
    }
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        try {
            const response = await axios.patch(`/api/users/${userId}`, {
                coverImage: values.coverImage
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
    
            toast.success("Foto de capa atualizada.", {
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
            toast.error("Erro ao atualizar foto de capa.", {
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
        <div className="w-full">
            <div className="w-full h-32 overflow-hidden">
                {form.getValues("coverImage").length ? (
                    <div className="w-full h-full">
                        <Image
                            src={form.getValues("coverImage") as string}
                            width={1920}
                            height={380}
                            alt="Foto de capa"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full">
                        {coverImage ? (
                            <Image
                                src={coverImage}
                                width={1920}
                                height={380}
                                alt="Foto de capa"
                            />
                        ) : (
                            <Image
                                src="/images/application/image-background-cover.png"
                                width={1920}
                                height={380}
                                alt="Foto de capa"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                )}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mt-4 flex justify-start w-full uploadthing">
                        <FormField
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <FormItem className="relative w-full">
                                    <UploadButton
                                        endpoint="imageUploader"
                                        content={{
                                            button({ ready }) {
                                                if (ready) {
                                                    return (
                                                        <div className="py-3 flex items-center gap-2">
                                                            <PiUploadSimpleBold className="w-5 h-5 text-zinc-900 dark:text-white" />
                                                            <span className="text-sm text-zinc-900">
                                                                Selecionar arquivo .png, .jpg, .jpeg, ** (4MB)
                                                            </span>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="py-3 flex items-center gap-2 opacity-25">
                                                            <PiUploadSimpleBold className="w-5 h-5 text-zinc-900 dark:text-white" />
                                                            <span className="text-sm text-zinc-900">
                                                                Selecionar arquivo .png, .jpg, .jpeg, ** (4MB)
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            allowedContent({ ready, isUploading }) {
                                                if (isUploading) {
                                                    return (
                                                        <div className="w-full text-xs text-start dark:text-white">
                                                            Salvando foto de capa...
                                                        </div>
                                                    )
                                                }

                                                if (!ready) {
                                                    return <></>
                                                }

                                                return <></>
                                            }
                                        }}
                                        onClientUploadComplete={(res: ClientUploadedFileData<{ uploadedBy: string; }>[]) => {
                                            handlePictureUpload(res[0].url)
                                        }}
                                        onUploadError={(error: Error) => {
                                            toast.error("Erro ao cadastrar foto de capa.", {
                                                position: "bottom-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                theme: "light",
                                                transition: Bounce
                                            })
                                        }}
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-4 flex justify-end w-full">
                        <div className="w-full lg:w-2/4">
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
                                Atualizar foto de capa
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
