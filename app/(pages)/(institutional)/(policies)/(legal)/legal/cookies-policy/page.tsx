import { HeaderTitle } from "@/app/(pages)/(institutional)/_components/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/(legal)/legal/cookies-policy/_components/policy"

const CookiesPolicyPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle title="Política de Cookies" />
            <Policy />
        </div>
    )
}

export default CookiesPolicyPage