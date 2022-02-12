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
  transition: border-color ${colors.animation};

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

  @media ${device.tablet} {
    margin: 0;
    padding: 10px;
  }
  @media ${device.desktop} {
    position: absolute;
    top: 5px;
    right: 0;
  }
`;

export const BtnReportText = styled.span`
   width: 115px;
   margin-right: 15px;
   letter-spacing: 0.04em;
   color: ${colors.textColorSecond}
   outline: 1px solid red;
`;
