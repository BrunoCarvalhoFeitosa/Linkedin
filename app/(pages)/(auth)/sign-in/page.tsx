import getCurrentUser from "@/app/actions/getCurrentUser"
import { redirect } from "next/navigation"
import { SignInForm } from "@/app/(pages)/(auth)/sign-in/_components/form"

const SignInPage = async () => {
    const currentUser = await getCurrentUser()

    if (currentUser) (
        redirect("/app/feed")
    )

    return (
        <SignInForm />
    )
}

export default SignInPage