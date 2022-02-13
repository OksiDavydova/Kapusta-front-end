import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const TypeOperationWrapper = styled.div`
  max-width: 665px;
  text-align: start;
  /* outline: 1px solid red; */
  margin-left: auto;
  margin-right: auto;
`;

export const ChooseOperationButton = styled.button`
  display: inline-block;
  width: 125px;
  height: 44px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-transform: uppercase;

  border: none;
  border-radius: 16px;

  color: ${colors.textColor};
  background-color: ${colors.bgMainNav};
  transition: color ${colors.animation}

  &:hover {
    color: ${colors.orange};
  }
  &:focus {
    color: ${colors.orange};
  }
`;
