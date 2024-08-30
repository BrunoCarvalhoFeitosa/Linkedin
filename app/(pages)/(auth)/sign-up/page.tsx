import getCurrentUser from "@/app/actions/getCurrentUser"
import { redirect } from "next/navigation"
import { SignUpForm } from "@/app/(pages)/(auth)/sign-up/_components/form"

const SignUpPage = async () => {
    const currentUser = await getCurrentUser()

    if (currentUser) (
        redirect("/app/feed")
    )

    return (
        <SignUpForm />
    )
}

export default SignUpPage