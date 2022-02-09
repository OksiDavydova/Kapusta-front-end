import React, { useEffect, useState } from "react";
import { LogoutBtn, LogoutBtnText } from "./UserLogout.styled";
import { SvgIcon } from "../../SvgIcon";
import Modal from "../../Modal/Modal";

function UserLogout() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [setOpenModal, setShowModal] = useState(false);

  const updateWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const userModalLogout = () => {
    // dispatch(logOut())
    toggleModal();
  };

  return (
    <>
      <LogoutBtn onClick={toggleModal}>
        {deviceWidth < 768 ? (
          <SvgIcon w={16} h={16} idIcon={"#icon-logout"} />
        ) : (
          <LogoutBtnText>Выйти</LogoutBtnText>
        )}
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
