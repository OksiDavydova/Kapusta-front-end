import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-around;
  width: 100%;
  /* height: calc(
    100vh - 56px
  ); // change - "some value" depended from content header */
  /* height: 458px; */

  /* outline: 1px solid red;
  background-color: #9acd32; */
  /* @media ${device.tablet} {
    width: 748px;
    height: calc(100vh - 56px);
  } */
`;

export const AuthWrapper = styled.div`
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
`;
