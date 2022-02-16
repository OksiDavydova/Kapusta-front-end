import React from "react";
import Media from "react-media";
import { useNavigate } from "react-router-dom";
import { ArrowBtnDiv, ArrowBtn, ArrowBtnText } from "./ButtonsStyles.styled";
import { SvgIcon } from "../SvgIcon";

const text = 'Вернуться на главную'

function ArrowButton() {
  const navigate = useNavigate();

  const clickOnArrow = () => {
    navigate("/");
  };
  return (
    <ArrowBtnDiv onClick={clickOnArrow}>
      <ArrowBtn >
        <SvgIcon w={24} h={24} idIcon={"#icon-arrow-left"} />
      </ArrowBtn>
      <Media
        query="(min-width: 768px)"
        render={() => <ArrowBtnText>{text}</ArrowBtnText>
        }
      />
      
    </ArrowBtnDiv>
  );
}

export default ArrowButton;
