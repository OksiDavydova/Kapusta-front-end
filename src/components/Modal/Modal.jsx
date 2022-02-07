import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
    ModalContent,
    ModalBackdrop,
    ModalTitleTxt,
    ModalBtnClose,
} from "./ModalStyles.styled";
import sprite from "../../assets/svg/symbol-defs.svg";
import { SvgIcon } from "../SvgIcon";
const modalRoot = document.querySelector('#modal-root');

function Modal({
    handleClickLeftBtn,
    handleClickRightBtn,
    onClose,
    modalTxt = 'Вы уверены?',
    modalTxtBtnL = 'Да',
    modalTxtBtnR = 'Нет',
}) {

    useEffect(() => {
        window.document.body.style.overflowY = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.document.body.style.overflowY = 'visible';
        };
    });

    const handleKeyDown = e => {
        if(e.code === 'Escape'){
            onClose();
        }
    }
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
        <ModalBackdrop onClick={handleBackdropClick}>
            <ModalContent>
                <ModalBtnClose onClick={onClose}>
                <SvgIcon w="16" h="16" hrefIcon={`${sprite}#icon-close`} />
        </ModalBtnClose> 
                <ModalTitleTxt>
                    {modalTxt}
                </ModalTitleTxt>
                <button onClick={handleClickLeftBtn}>
                    {modalTxtBtnL}
                </button>
                  <button onClick={handleClickRightBtn}>
                    {modalTxtBtnR}
            </button>
            </ModalContent>
        </ModalBackdrop>,
        modalRoot,
  );
}

export default Modal;