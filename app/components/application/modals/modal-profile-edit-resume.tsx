"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import { ClientUploadedFileData } from "uploadthing/types"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Bounce, toast } from "react-toastify"
import { phoneFormatMask } from "@/utils/formatters"
import Image from "next/image"
import { UploadButton } from "@/lib/uploadthing"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/app/components/ui/form"
import { Loader } from "@/public/svg/loader"
import { PiUploadSimpleBold } from "react-icons/pi"

interface ModalProfileEditResumeProps {
    setOpen: (open: boolean) => void
    userProfile: User
}

const formSchema = z.object({
    image: z
        .string()
        .min(1, {
            message: "Por favor, insira uma foto para o perfil."
        }),
    name: z
        .string()
        .min(7, {
            message: "Por favor, insira seu nome completo."
        })
        .max(70, {
            message: "O valor máximo é de 70 caracteres."
        })
        .regex(/^[A-Za-zÀ-ú\s]+$/, {
            message: "Por favor, insira somente letras."
        }),
    phone: z
        .string()
        .min(15, {
            message: "Por favor, insira um número de celular válido."
        }),
        email: z
        .string()
        .email({
            message: "Por favor, insira um endereço de e-mail válido."
        }),
    description: z
        .string()
        .min(5, {
            message: "Por favor, insira sua profissão."
        }),
    address: z
        .string()
        .min(5, {
            message: "Por favor, insira sua cidade e estado."
        }),
})

export const ModalProfileEditResume = ({ setOpen, userProfile }: ModalProfileEditResumeProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            image: "",
            name: userProfile.name as string ?? "",
            phone: userProfile.phone as string ?? "",
            email: userProfile.email as string ?? "",
            description: userProfile.description as string ?? "",
            address: userProfile.address as string ?? "",
        },
    })

    const handlePictureUpload = (pictureUrl: string) => {
        form.setValue("image", pictureUrl)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        try {
            const response = await axios.patch(`/api/users/${userProfile.id}`, {
                image: form.getValues("image"),
                name: form.getValues("name"),
                phone: form.getValues("phone"),
                email: form.getValues("email"),
                description: form.getValues("description"),
                address: form.getValues("address"),
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
                            name="image"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    {form.getValues("image").length ? (
                                        <div className="w-28 h-28">
                                            <Image
                                                src={form.getValues("image") as string}
                                                width={120}
                                                height={120}
                                                alt="Logo da empresa"
                                                className="m-0 p-0 w-full h-full object-cover overflow-hidden rounded-full border-4 border-white cursor-pointer"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex justify-start flex-1 w-full uploadthing">
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
                                                                    Salvando foto de perfil...
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
                                                    toast.error("Erro ao cadastrar foto.", {
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
                                        </div>
                                    )}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="relative flex-1 w-full">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Nome completo
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled
                                            type="text"
                                            autoComplete="off"
                                            className="h-14"
                                        />
                                    </FormControl>
                                    <FormMessage className="m-0 p-0" />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            E-mail
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                disabled
                                                autoComplete="off"
                                                className="h-14"
                                            />
                                        </FormControl>
                                        <FormMessage className="m-0 p-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Telefone celular
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="off"
                                                className="h-14"
                                                onKeyUp={(ev) => phoneFormatMask(ev)}
                                            />
                                        </FormControl>
                                        <FormMessage className="m-0 p-0" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Profissão
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="off"
                                                className="h-14"
                                            />
                                        </FormControl>
                                        <FormMessage className="m-0 p-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Cidade e estado
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                autoComplete="off"
                                                className="h-14"
                                            />
                                        </FormControl>
                                        <FormMessage className="m-0 p-0" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="mt-3 flex justify-end w-full">
                        <Button
                            type="submit"
                            variant="default"
                            className="relative mt-2 flex justify-center items-center w-full lg:w-2/4 h-14"
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