import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBtn } from "./ButtonsStyles.styled";
import { SvgIcon } from "../SvgIcon";

function ArrowButton() {
  const navigate = useNavigate();

  const clickOnArrow = () => {
    navigate("/");
  };
  return (
    <ArrowBtn onClick={clickOnArrow}>
      <SvgIcon w={24} h={24} idIcon={"#icon-arrow-left"} />
    </ArrowBtn>
  );
}

export default ArrowButton;
