import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const BalanceText = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  // color: #52555fb3;
  color: ${colors.textColorSecond};
  outline: 1px solid red;

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 21px;
    padding: 14px 0px;
  }
`;
