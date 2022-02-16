import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";

export const BtnToReport = styled.button`
  display: flex;
  align-items: baseline;
  letter-spacing: 0.04em;
  padding: 5px;
  color: ${colors.textColor};
  background: transparent;
  border: none;
  margin: 0 auto 40px auto;
  transition: color ${colors.animation};

  @media ${device.tablet} {
    margin: 0;
    padding: 14px 10px 10px;
  }

  @media ${device.desktop} {
    position: absolute;
    top: 0px;
    right: 30px;
  }

  &:hover,
  &:focus {
    color: ${colors.orange};
  }

  & > svg {
    fill: currentColor;
  }
`;

export const BtnReportText = styled.span`
   width: 115px;
   margin-right: 15px;
   letter-spacing: 0.04em;
   color: ${colors.textColorSecond}
   outline: 1px solid red;
`;
