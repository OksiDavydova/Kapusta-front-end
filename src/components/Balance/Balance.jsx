import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { BalanceWrapper } from "./BalanceStyle.styled";
import { ChangeBalance } from "./ChangeBalance";
import { CalendarMUI } from "../CalendarMUI";
import { ButtonToReport } from "./ButtonToReport";
import { LoaderReport } from "../Loader";
import { loadingOnBalance } from "../../redux/getBalance/balance-selector";

function Balance() {
  const navigate = useNavigate();
  const isLoading = useSelector(loadingOnBalance);

  const clickToReport = () => {
    navigate("/report");
  };

  return (
    <>
      {isLoading && <LoaderReport />}
      <BalanceWrapper>
        <ButtonToReport onClick={clickToReport} />
        <ChangeBalance />
        <Media query="(max-width: 767.98px)" render={() => <CalendarMUI />} />
      </BalanceWrapper>
    </>
  );
}

export default Balance;
