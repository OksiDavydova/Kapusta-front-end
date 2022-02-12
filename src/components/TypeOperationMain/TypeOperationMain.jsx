import React from "react";
import { Button } from "../Buttons";
import { TypeOperationWrapper } from "./TypeOperation.styled";

function TypeOperationMain() {
  return (
    <TypeOperationWrapper>
      <>
        <Button text={"расход"} />
        <Button text={"доход"} />
      </>
    </TypeOperationWrapper>
  );
}
export default TypeOperationMain;
