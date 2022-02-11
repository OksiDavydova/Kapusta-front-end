import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const BalanceWrapper = styled.div`
  max-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  /* padding-top: 30px; */
  outline: 1px solid red;

  @media ${device.tablet} {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 52px 58px 52px;
  }
`;

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
