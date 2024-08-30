import { HeaderTitle } from "@/app/(pages)/(institutional)/_components/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/(legal)/legal/user-agreement/_components/policy"

const UserAgreementPage = () => {
    return (
        <div>
            <HeaderTitle title="Contrato do Usuário" />
            <Policy />
        </div>
    )
}

export default UserAgreementPage