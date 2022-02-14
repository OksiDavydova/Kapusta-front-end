import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 56px);

  @media ${device.tablet} {
    justify-content: flex-start;
    padding: 40px 30px 83px;
  }

  @media ${device.desktop} {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 0 83px;
  }
`;

export const Overlay = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 60px 20px;
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 0px 30px 30px;
  }
`;
export const OverlayMobile = styled.div`
  align-content: flex-end;
  padding-top: 20px;
`;

export const AuthWrapper = styled.div`
  position: absolute;
  top: 255px;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);

  padding: 40px 18px 53px 29px;
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media ${device.tablet} {
    top: 300px;
    width: 436px;
    height: 535px;
    padding: 50px 85px 53px 85px;
  }
  @media ${device.desktop} {
    top: 173px;
    left: 74%;
  }
`;

export const ReportPageWrapper = styled.div`
  padding: 15px 0px;
  outline: 1px solid red;

  @media ${device.tablet} {
    padding: 32px 0px 76px 0px;
  }
`;

export const ChartTabletWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 422px;
  padding: 20px 15px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  outline: 1px solid red;
`;

export const ReportPageTopWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 30px;
  outline: 1px solid red;
`;

export const WrapperLoginContainer = styled.section`
height: 750px;
 @media ${device.desktop}{
height: 0; 
}
`;

