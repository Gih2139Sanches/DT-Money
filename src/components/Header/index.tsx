import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewtransactionModal } from "../NewTransactionModal";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewtransactionModal />

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}