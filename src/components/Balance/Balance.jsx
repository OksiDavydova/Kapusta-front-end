import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { BalanceWrapper } from "./BalanceStyle.styled";
import { ChangeBalance } from "./ChangeBalance";
import { CalendarMUI } from "../CalendarMUI";
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
        <Media
          query="(min-width: 320px) and (max-width: 767px)"
          render={() => <ButtonToReport onClick={clickToReport} />}
        />

        <ChangeBalance />

        <Media query="(max-width: 767px)" render={() => <CalendarMUI />} />
        <Media
          query="(min-width: 768px) and (max-width: 1440px)"
          render={() => <ButtonToReport onClick={clickToReport} />}
        />
      </BalanceWrapper>

      {/* --------Modal------------- */}
      {showBalanceModal && <ModalBalance onClose={removeBalanceModal} />}
      {/* --------------------- */}
    </>
  );
}

export default Balance;
