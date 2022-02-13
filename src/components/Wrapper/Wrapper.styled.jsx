import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;

  @media ${device.tablet} {
    padding-top: 40px;
  }
`;

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 60px 20px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
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
