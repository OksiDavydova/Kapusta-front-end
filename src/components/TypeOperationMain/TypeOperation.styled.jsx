import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const TypeOperationWrapper = styled.div`
  width: 665px;
  /* display: flex;
  align-items: center; */
  outline: 1px solid red;
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
  background-color: ${colors.bgSummary};
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
`;
