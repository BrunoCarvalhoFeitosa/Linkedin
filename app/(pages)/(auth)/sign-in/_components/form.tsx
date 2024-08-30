"use client"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast, Bounce } from "react-toastify"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/app/components/ui/form"
import { GoogleIconSvg } from "@/public/svg/google-icon-svg"
import { Loader } from "@/public/svg/loader"
import { HiEyeOff } from "react-icons/hi"
import { HiEye } from "react-icons/hi2"

const formSchema = z.object({
    email: z.string().email({
        message: "Por favor, insira um endereço de e-mail válido."
    }),
    password: z.string().min(10, {
        message: "Por favor, insira sua senha de no mínimo 10 caracteres.",
    }),
})

export const SignInForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    })

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        signIn("credentials", { 
            ...values, 
            redirect: true,
        })
        .then((callback) => {
            setIsLoading(false)

            if (callback?.ok) {
                toast.success("Autenticado com sucesso.", {
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
            }
 
            if (callback?.error) {
                toast.error(callback.error, {
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
            }
        })
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
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
                                            <Input
                                                {...field}
                                                type={showPassword ? "text" : "password"}
                                                className="h-14"
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
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-2 flex justify-end">
                        <Link
                            href=""
                            className="py-1 px-2 text-sm font-semibold text-[#0A66C2] rounded-md transition-all duration-300 hover:bg-blue-600/25"
                        >
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <div className="mt-3">
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
                            Entrar
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