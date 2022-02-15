import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const BalanceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 42px;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 665px;
    padding-bottom: 58px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    width: 1060px;
    padding-bottom: 9px;
  }
`;
