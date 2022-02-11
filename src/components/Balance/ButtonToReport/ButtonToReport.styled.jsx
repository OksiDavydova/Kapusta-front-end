import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";

export const BtnToReport = styled.button`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  padding: 5px;
  color: ${colors.textColor};
  background: transparent;
  border: none;

  &:hover {
    border: 2px solid #ffffff;
  }
  &:focus {
    border: 2px solid #ffffff;
  }
  & > svg {
    fill: ${colors.textColor};
    transition: ${colors.animation};
    &:hover,
    &:focus {
      fill: ${colors.orangeLight};
    }
  }
`;

export const BtnReportText = styled.span`
  margin-right: 20px;
  letter-spacing: 0.04em;
  color: #52555fb3;
`;
