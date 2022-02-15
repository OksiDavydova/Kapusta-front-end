import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { BalanceWrapper } from "./BalanceStyle.styled";
import { ChangeBalance } from "./ChangeBalance";
import { CalendarMUI } from "../CalendarMUI";
import { ButtonToReport } from "./ButtonToReport";

function Balance() {
  const balCalc = useRef();
  const navigate = useNavigate();

  const clickToReport = () => {
    navigate("/report");
  };

  return (
    <>
      <BalanceWrapper>
        <Media
          query="(min-width: 320px) and (max-width: 767px)"
          render={() => <ButtonToReport onClick={clickToReport} />}
        />

        <ChangeBalance ref={balCalc} />

        <Media query="(max-width: 767px)" render={() => <CalendarMUI />} />
        <Media
          query="(min-width: 768px) and (max-width: 2000px)"
          render={() => <ButtonToReport onClick={clickToReport} />}
        />
      </BalanceWrapper>
    </>
  );
}

export default Balance;
