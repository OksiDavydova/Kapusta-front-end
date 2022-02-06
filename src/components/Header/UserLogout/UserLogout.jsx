import React, { useEffect, useState } from "react";
import sprite from "../../../assets/svg/symbol-defs.svg";
import { LogoutBtn, LogoutBtnText } from "./UserLogout.styled";
import { SvgIcon } from "../../SvgIcon";

function UserLogout() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <LogoutBtn>
      {deviceWidth < 768 ? (
        <SvgIcon w="16" h="16" hrefIcon={`${sprite}#icon-logout`} />
      ) : (
        <LogoutBtnText>Выйти</LogoutBtnText>
      )}
    </LogoutBtn>
  );
}
export default UserLogout;
