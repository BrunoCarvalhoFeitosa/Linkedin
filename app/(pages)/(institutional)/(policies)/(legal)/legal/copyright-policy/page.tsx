import { HeaderTitle } from "@/app/(pages)/(institutional)/_components/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/(legal)/legal/copyright-policy/_components/policy"

const CopyrightPolicyPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle title="Política de Direitos Autorais" />
            <Policy />
        </div>
    )
}

export default CopyrightPolicyPage