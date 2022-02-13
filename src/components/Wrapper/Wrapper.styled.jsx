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

export const ReportPageWrapper = styled.div`
  padding: 15px 0px;
  outline: 1px solid red;

  @media ${device.tablet} {
    padding: 32px 0px 76px 0px;
  }

`
export const ChartTabletWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 422px;
  padding: 20px 15px;
  background: #FFFFFF;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  outline: 1px solid red;

`

export const ReportPageTopWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 30px;
  outline: 1px solid red;


`
