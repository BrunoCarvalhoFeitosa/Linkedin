"use client"
import { useState } from "react"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { Bounce, toast } from "react-toastify"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Textarea } from "@/app/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/app/components/ui/form"
import { Loader } from "@/public/svg/loader"
import { User, Experience } from "@/types"
import { UploadButton } from "@/lib/uploadthing"
import { PiUploadSimpleBold } from "react-icons/pi"
import { ClientUploadedFileData } from "uploadthing/types"

interface ModalProfileEditExperienceProps {
    setOpen: (open: boolean) => void
    userProfile: User
}

const formSchema = z.object({
    companyLogo: z
        .string()
        .min(1, {
            message: "Por favor, insira o logo da empresa."
        }),
    companyName: z
        .string()
        .min(3, {
            message: "Por favor, insira o nome da empresa."
        })
        .max(70, {
            message: "O valor máximo é de 70 caracteres."
        })
        .regex(/^[A-Za-zÀ-ú\s]+$/, {
            message: "Por favor, insira o nome da empresa."
        }),
    jobYearsWorked: z
        .string()
        .min(5, {
            message: "Por favor, insira o tempo de trabalho do cargo."
        }),
    jobTitle: z
        .string()
        .min(5, {
            message: "Por favor, insira o título do cargo."
        })
        .max(70, {
            message: "O valor máximo é de 70 caracteres."
        }),
    jobHiringModel: z
        .string()
        .min(3, {
            message: "Por favor, insira o modelo de contratação do cargo."
        }),
    jobRegion: z
        .string()
        .min(5, {
            message: "Por favor, insira a região do cargo."
        }),
    jobDescription: z
        .string()
        .min(10, {
            message: "Por favor, insira um breve resumo sobre o cargo."
        })
        .max(1000, {
            message: "O máximo de caracteres é 1000."
        })
})

export const ModalProfileEditExperience = ({ setOpen, userProfile }: ModalProfileEditExperienceProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0)
    const router = useRouter()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyLogo: "",
            companyName: "",
            jobYearsWorked: "",
            jobTitle: "",
            jobHiringModel: "",
            jobRegion: "",
            jobDescription: "",
        },
    })

    const handlePictureUpload = (pictureUrl: string) => {
        form.setValue("companyLogo", pictureUrl)
    }

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharCount(event.target.value.length)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        const updatedExperience: Experience[] = [
            ...(userProfile.experience || []),
            {
                companyLogo: values.companyLogo,
                companyName: values.companyName,
                jobYearsWorked: values.jobYearsWorked,
                jobTitle: values.jobTitle,
                jobHiringModel: values.jobHiringModel,
                jobRegion: values.jobRegion,
                jobDescription: values.jobDescription,
            }
        ]
    
        try {
            await axios.patch(`/api/users/${userProfile.id}`, {
                experience: updatedExperience
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
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
                        <div className="flex flex-col items-end gap-3">
                            <FormField
                                control={form.control}
                                name="companyLogo"
                                render={({ field }) => (
                                    <FormItem className="relative w-full">
                                        {form.getValues("companyLogo").length ? (
                                            <div className="flex-1 w-full">
                                                <Image
                                                    src={form.getValues("companyLogo") as string}
                                                    width={48}
                                                    height={48}
                                                    alt="Logo da empresa"
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
                                                                        Salvando logo da empresa...
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
                                                        toast.error("Erro ao cadastrar logo.", {
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
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Nome da empresa
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
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <FormField
                                control={form.control}
                                name="jobTitle"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Título do cargo
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
                                name="jobYearsWorked"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Tempo de trabalho do cargo
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
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <FormField
                                control={form.control}
                                name="jobHiringModel"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Modelo de contratação do cargo
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
                                name="jobRegion"
                                render={({ field }) => (
                                    <FormItem className="relative flex-1 w-full">
                                        <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                            Região do cargo
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
                        <FormField
                            control={form.control}
                            name="jobDescription"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Descrição do cargo
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            autoComplete="off"
                                            className="h-20 resize-none"
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
                            Atualizar dados de experiência
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}