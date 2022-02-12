import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const BalanceWrapper = styled.section`
  position: relative;
  max-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid red;
  padding-bottom: 62px;

  @media ${device.tablet} {
    max-width: 634px;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 58px;
  }

  @media ${device.desktop} {
    max-width: 1060px;
    justify-content: center;
    padding-bottom: 9px;
  }
`;
