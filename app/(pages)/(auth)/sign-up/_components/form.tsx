"use client"
import { useState } from "react"
import { ClientUploadedFileData } from "uploadthing/types"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm, Controller } from "react-hook-form"
import { toast, Bounce } from "react-toastify"
import axios from "axios"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { UploadButton } from "@/lib/uploadthing"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { GridBackground } from "@/app/components/ui/grid-background"
import { phoneFormatMask } from "@/utils/formatters"
import { GoogleIconSvg } from "@/public/svg/google-icon-svg"
import { Loader } from "@/public/svg/loader"
import { HiEyeOff, HiEye } from "react-icons/hi"
import { FaCheck } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { PiUploadSimpleBold } from "react-icons/pi"
import Image from "next/image"

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
    password: z
        .string()
        .min(10, {
            message: "Por favor, insira sua senha de no mínimo 10 caracteres.",
        }),
})

const getPasswordStrength = (password: string) => {
    const lengthCriteria = password.length >= 10
    const upperCase = /[A-Z]/.test(password)
    const lowerCase = /[a-z]/.test(password)
    const digit = /\d/.test(password)
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const criteriaCount = [upperCase, lowerCase, digit, specialChar].filter(Boolean).length

    if (password.length < 6) return "very-weak"
    if (criteriaCount === 1 && lengthCriteria) return "weak"
    if (criteriaCount === 2 && lengthCriteria) return "medium"
    if (criteriaCount >= 3 && lengthCriteria) return "strong"

    return "very-weak"
}

export const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showPasswordStrength, setShowPasswordStrength] = useState<boolean>(false)
    const [passwordStrength, setPasswordStrength] = useState<"very-weak" | "weak" | "medium" | "strong">("very-weak")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            image: "",
            name: "",
            phone: "",
            email: "",
            password: "",
        }
    })

    const handlePictureUpload = (pictureUrl: string) => {
        form.setValue("image", pictureUrl)
    }

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    const handlePasswordChange = (password: string) => {
        setShowPasswordStrength(password.length >= 1)
        setPasswordStrength(getPasswordStrength(password))
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        const formData = new FormData()
        formData.append("image", values.image)
        formData.append("name", values.name)
        formData.append("phone", values.phone)
        formData.append("email", values.email)
        formData.append("password", values.password)

        try {
            await axios.post("/api/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            toast.success("Dados cadastrados.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce
            })
        } catch (error) {
            console.error("Erro ao cadastrar os dados:", error)
            toast.error("Erro ao cadastrar os dados.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce
            })
        } finally {
            form.reset()
            setIsLoading(false)
            setShowPasswordStrength(false)
        }
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <div className="w-full h-40 overflow-hidden">
                                        <GridBackground />
                                    </div>
                                    <div className="absolute top-[30%] -translate-y-[30%] left-2/4 -translate-x-2/4">
                                        {form.getValues("image").length ? (
                                            <div>
                                                <Image
                                                    src={form.getValues("image")}
                                                    width={250}
                                                    height={250}
                                                    alt="Foto de perfil"
                                                    className="w-32 h-28 object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <UploadButton
                                                endpoint="imageUploader"
                                                content={{
                                                    button({ ready }) {
                                                        if (ready) {
                                                            return (
                                                                <div className="py-3 flex flex-col items-center">
                                                                    <PiUploadSimpleBold className="w-5 h-5 text-zinc-900 dark:text-white" />
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div className="py-3 flex flex-col items-center opacity-10 cursor-not-allowed">
                                                                    <PiUploadSimpleBold className="w-5 h-5 text-zinc-900 dark:text-white" />
                                                                </div>
                                                            )
                                                        }
                                                    },
                                                    allowedContent({ ready, isUploading }) {
                                                        if (!ready) {
                                                            return (
                                                                <div className="text-xs dark:text-white">
                                                                    .png, .jpg, .jpeg, .webp (4MB)
                                                                </div>
                                                            )
                                                        }

                                                        if (isUploading) {
                                                            return (
                                                                <div className="text-xs dark:text-white">
                                                                    Salvando foto de perfil...
                                                                </div>
                                                            )
                                                        }

                                                        return (
                                                            <div className="text-xs dark:text-white">
                                                                .png, .jpg, .jpeg, .webp (4MB)
                                                            </div>
                                                        )
                                                    },
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
                                        )}
                                    </div>
                                    <FormMessage
                                        className={`m-0 p-0 ${
                                            form.formState.errors.image ? "text-red-500" : ""
                                        }`}
                                    >
                                        {form.formState.errors.image?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Nome completo
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
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="relative">
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
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Endereço de e-mail
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
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute -top-2 left-2 py-2 px-3 bg-white dark:bg-[#0C0A09] dark:text-white z-10">
                                        Senha
                                    </FormLabel>
                                    <FormControl className="relative">
                                        <div>
                                            <Controller
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        className="h-14"
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            handlePasswordChange(e.target.value)
                                                        }}
                                                        onBlur={field.onBlur}
                                                        value={field.value}
                                                    />
                                                )}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                className="absolute top-1/2 -translate-y-1/2 right-4 p-0"
                                                onClick={handleShowOrHidePassword}
                                            >
                                                {showPassword ? (
                                                    <HiEyeOff className="w-7 h-7 text-gray-300" />
                                                ) : (
                                                    <HiEye className="w-7 h-7 text-gray-300" />
                                                )}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                    {showPasswordStrength && (
                                        <div>
                                            <div className="mt-2 h-1 rounded-md w-full bg-gray-200">
                                                <div
                                                    className={`h-full rounded-md ${passwordStrength === "very-weak" ? "bg-red-500" :
                                                        passwordStrength === "weak" ? "bg-orange-500" :
                                                        passwordStrength === "medium" ? "bg-yellow-500" :
                                                        "bg-green-500"}`}
                                                    style={{
                                                        width: passwordStrength === "very-weak" ? "25%" :
                                                            passwordStrength === "weak" ? "50%" :
                                                            passwordStrength === "medium" ? "75%" : "100%"
                                                    }}
                                                />
                                            </div>
                                            {passwordStrength !== "strong" && (
                                                <div className="mt-2 text-xs">
                                                    <ul>
                                                        <li className={/[A-Z]/.test(form.watch("password")) ? "text-green-500" : "text-red-500"}>
                                                            <div className="flex items-center gap-1">
                                                                {/[A-Z]/.test(form.watch("password")) ? (
                                                                    <FaCheck className="w-3 h-3 text-green-500" />
                                                                ) : (
                                                                    <MdClose className="w-4 h-4 text-red-500" />
                                                                )}
                                                                <strong className="font-normal">
                                                                    A senha deve conter um caractere maiúsculo.
                                                                </strong>
                                                            </div>
                                                        </li>
                                                        <li className={/[a-z]/.test(form.watch("password")) ? "text-green-500" : "text-red-500"}>
                                                            <div className="flex items-center gap-1">
                                                                {/[a-z]/.test(form.watch("password")) ? (
                                                                    <FaCheck className="w-3 h-3 text-green-500" />
                                                                ) : (
                                                                    <MdClose className="w-4 h-4 text-red-500" />
                                                                )}
                                                                <strong className="font-normal">
                                                                    A senha deve conter um caractere minúsculo.
                                                                </strong>
                                                            </div>
                                                        </li>
                                                        <li className={/\d/.test(form.watch("password")) ? "text-green-500" : "text-red-500"}>
                                                            <div className="flex items-center gap-1">
                                                                {/\d/.test(form.watch("password")) ? (
                                                                    <FaCheck className="w-3 h-3 text-green-500" />
                                                                ) : (
                                                                    <MdClose className="w-4 h-4 text-red-500" />
                                                                )}
                                                                <strong className="font-normal">
                                                                    A senha deve conter um caractere numérico.
                                                                </strong>
                                                            </div>
                                                        </li>
                                                        <li className={/[!@#$%^&*(),.?":{}|<>]/.test(form.watch("password")) ? "text-green-500" : "text-red-500"}>
                                                            <div className="flex items-center gap-1">
                                                                {/[!@#$%^&*(),.?":{}|<>]/.test(form.watch("password")) ? (
                                                                    <FaCheck className="w-3 h-3 text-green-500" />
                                                                ) : (
                                                                    <MdClose className="w-4 h-4 text-red-500" />
                                                                )}
                                                                <strong className="font-normal">
                                                                    A senha deve conter um caractere especial.
                                                                </strong>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-7">
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
                            Aceite e cadastre-se
                        </Button>
                    </div>
                    <div className="py-4 flex items-center gap-3">
                        <div className="flex-1 w-full h-[1px] bg-gray-200" />
                        <span className="text-sm">
                            ou
                        </span>
                        <div className="flex-1 w-full h-[1px] bg-gray-200" />
                    </div>
                    <div className="mb-5">
                        <p className="text-sm text-center">
                            Ao clicar em Continuar para se cadastrar ou entrar, você aceita o <Link className="text-blue-500 hover:underline" href="https://br.linkedin.com/legal/user-agreement?trk=linkedin-tc_auth-button_user-agreement">Contrato do Usuário</Link>, a <Link className="text-blue-500 hover:underline" href="https://br.linkedin.com/legal/privacy-policy?trk=linkedin-tc_auth-button_privacy-policy">Política de Privacidade</Link> e a <Link className="text-blue-500 hover:underline" href="https://br.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">Política de Cookies</Link> do LinkedIn.
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="default"
                            className="h-12 border-gray-300"
                            onClick={() => signIn("google")}
                        >
                            <div className="flex items-center gap-1">
                                <GoogleIconSvg width="26" height="26" />
                            </div>
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}