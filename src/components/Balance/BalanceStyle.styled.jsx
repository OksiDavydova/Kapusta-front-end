import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const BalanceWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid red;
  padding-bottom: 62px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 58px;
  }

  @media ${device.desktop} {
    justify-content: center;
    padding-bottom: 9px;
  }
`;
