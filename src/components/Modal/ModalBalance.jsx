import { createPortal } from "react-dom";
import {
    ModalBalanceContent,
    ModalBackdrop,
    ModalTitleTxtB1,
    ModalTitleTxtB2,
} from "./ModalStyles.styled";
const modalRoot = document.querySelector('#modal-root');



function ModalBalance({
    onClose,
    modalTxtB1 = 'Привет! Для начала работы внеси текущий баланс своего счета!',
    modalTxtB2 = 'Ты не можешь тратить деньги пока их у тебя нет :)',
    
}) {
    const handleCloseModal = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
       <ModalBackdrop onClick={handleCloseModal}>
            <ModalBalanceContent onClick={handleCloseModal}>               
                <ModalTitleTxtB1>
                    {modalTxtB1}
                </ModalTitleTxtB1>
                <ModalTitleTxtB2>
                    {modalTxtB2}
                </ModalTitleTxtB2>
            </ModalBalanceContent>
        </ModalBackdrop>,
        modalRoot,
  );
}
export default ModalBalance;