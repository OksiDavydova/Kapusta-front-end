import React from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { BalanceWrapper } from "./BalanceStyle.styled";
import { ChangeBalance } from "./ChangeBalance";
import { CalendarMUI } from "../CalendarMUI";
import { ButtonToReport } from "./ButtonToReport";

function Balance() {
  const navigate = useNavigate();

  const clickToReport = () => {
    navigate("/report");
  };

  return (
    <>
      <BalanceWrapper>
        <ButtonToReport onClick={clickToReport} />
        <ChangeBalance />
        <Media query="(max-width: 767.98px)" render={() => <CalendarMUI />} />
      </BalanceWrapper>
    </>
  );
}

export default Balance;
