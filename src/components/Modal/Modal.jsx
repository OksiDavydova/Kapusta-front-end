import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ModalContent,
  ModalBackdrop,
  ModalTitleTxt,
  ModalBtnClose,
  ClickLeftBtn,
} from "./ModalStyles.styled";
import { SvgIcon } from "../SvgIcon";
import { Button } from "../Buttons/Button";
const modalRoot = document.querySelector("#modal-root");

function Modal({
  handleClickLeftBtn,
  handleClickRightBtn,
  onClose,
  modalTxt = "Вы уверены?",
  modalTxtBtnL = "Да",
  modalTxtBtnR = "Нет",
}) {
  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.document.body.style.overflowY = "visible";
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalBtnClose onClick={onClose}>
          <SvgIcon w={16} h={16} idIcon={"#icon-close"} />
        </ModalBtnClose>
        <ModalTitleTxt>{modalTxt}</ModalTitleTxt>
        <ClickLeftBtn onClick={handleClickLeftBtn}>
          <Button text={modalTxtBtnL}></Button>
        </ClickLeftBtn>
        <span onClick={handleClickRightBtn}>
          <Button text={modalTxtBtnR}></Button>
        </span>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

export default Modal;
