import { HeaderTitle } from "@/app/(pages)/(institutional)/_components/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/(legal)/legal/privacy-policy/_components/policy"

const PrivacyPolicyPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle title="Política de Privacidade" />
            <Policy />
        </div>
    )
}

export default PrivacyPolicyPage