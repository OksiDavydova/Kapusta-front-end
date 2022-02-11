import React, { useState } from "react";
import Media from "react-media";
import { useDispatch } from "react-redux";
import { logoutUsers } from "../../../redux/operation";
import { LogoutBtn, LogoutBtnText } from "./UserLogout.styled";
import { SvgIcon } from "../../SvgIcon";
import Modal from "../../Modal/Modal";

function UserLogout() {
  const [setOpenModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const userModalLogout = () => {
    dispatch(logoutUsers());
    toggleModal();
  };

  return (
    <>
      <LogoutBtn type="button" onClick={toggleModal}>
        <Media queries={{ mobile: { maxWidth: 767 } }}>
          {(matches) =>
            matches.mobile ? (
              <SvgIcon w={16} h={16} idIcon={"#icon-logout"} />
            ) : (
              <LogoutBtnText>Выйти</LogoutBtnText>
            )
          }
        </Media>
      </LogoutBtn>
      {setOpenModal && (
        <Modal
          modalTxt={"Вы действительно хотите выйти?"}
          handleClickLeftBtn={userModalLogout}
          handleClickRightBtn={toggleModal}
          onClose={toggleModal}
        />
      )}
    </>
  );
}
export default UserLogout;
