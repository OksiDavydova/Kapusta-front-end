import { createPortal } from "react-dom";
import {
    ModalBalanceContent,
    ModalBackdrop,
    ModalTitleTxt1,
    ModalTitleTxt2,
} from "./ModalStyles.styled";
const modalRoot = document.querySelector('#modal-root');



function ModalBalance({
    onClose,
    modalTxt1 = 'Привет! Для начала работы внеси текущий баланс своего счета!',
    modalTxt2 = 'Ты не можешь тратить деньги пока их у тебя нет :)',
    
}) {
    const handleCloseModal = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
       <ModalBackdrop onClick={handleCloseModal}>
            <ModalBalanceContent onClick={handleCloseModal}>               
                <ModalTitleTxt1>
                    {modalTxt1}
                </ModalTitleTxt1>
                <ModalTitleTxt2>
                    {modalTxt2}
                </ModalTitleTxt2>
            </ModalBalanceContent>
        </ModalBackdrop>,
        modalRoot,
  );
}
export default ModalBalance;