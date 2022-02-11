import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { BalanceText } from "./BalanceStyle.styled";
import { ChangeBalance } from "./ChangeBalance";
import { CalendarMUI } from "../CalendarMUI";
import { BalanceWrapper } from "../Wrapper/Wrapper.styled"; // =>Link
import { ButtonToReport } from "./ButtonToReport";
import { ModalBalance } from "../Modal";

function Balance() {
  const [showBalanceModal, setShowBalanceModal] = useState(true);
  const navigate = useNavigate();

  const clickToReport = () => {
    navigate("/report");
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(false);
  };

  return (
    <>
      <BalanceWrapper>
        <ButtonToReport onClick={clickToReport} />
        <BalanceText>Баланс:</BalanceText>

        <ChangeBalance />
        <Media query="(max-width: 767px)" render={() => <CalendarMUI />} />
      </BalanceWrapper>

      {/* --------Modal------------- */}
      {showBalanceModal && <ModalBalance onClose={removeBalanceModal} />}
      {/* --------------------- */}
    </>
  );
}

export default Balance;
