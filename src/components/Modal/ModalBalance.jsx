import { useEffect, useState} from "react";
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
    coordinates,
}) {
    const [top, setTop] = useState('');
    const [left, setLeft] = useState('');

    useEffect(() => {
        setTop(coordinates.top)
        setLeft(coordinates.left)
    }, [coordinates])

    const handleCloseModal = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
       <ModalBackdrop onClick={handleCloseModal}>
            <ModalBalanceContent style={{top: top+50, left: left-10}} onClick={handleCloseModal}>               
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