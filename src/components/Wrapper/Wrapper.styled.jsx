import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";
import pairCabbages from "../../assets/img/pairCabbages.png";
import cabbagesBottom from "../../assets/img/cabbagesBottom.png";


export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 56px);
  background-repeat: no-repeat;

  @media ${device.tablet} {
    justify-content: flex-start;
    padding: 40px 30px 83px;
    background-image: url(${pairCabbages});
    background-position: calc((100% / 2) + 200px) calc(100% - 24px);
  }

  @media ${device.desktop} {
    max-width: 1240px;
    padding: 40px 90px 83px;
    background-image: url(${cabbagesBottom});
    background-position: 50% calc(100% + 25px);
  }
`;

export const Overlay = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 60px 20px;
    background: ${colors.white};
    border-radius: 0px 0px 30px 30px;
  }
`;

export const DesktopOverlayShadow = styled.div`
  @media ${device.desktop} {
    width: 100%;
    background: ${colors.white};
    border-radius: 0px 30px 30px 30px;
    box-shadow: 0 10px 60px rgba(170, 178, 197, 0.2);
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
  background: ${colors.white};
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

  @media ${device.tablet} {

    padding: 32px 0px 76px;
    background-image: url(${pairCabbages});
    background-position: calc((100% / 2) + 200px) calc(100% + 40px);
    background-repeat: no-repeat;
  }

  @media ${device.desktop} {
   background-image: url(${cabbagesBottom});
   background-position: 50% calc(100% - 20px);

  }

  @media ${device.desktop} {
    width: 1060px;
    margin: 0px auto;
    padding: 40px 0px 75px 0px;
  }
`;

export const ChartTabletWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 422px;
  padding: 20px 15px;
  background: ${colors.white};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

export const ReportPageTopWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const WrapperLoginContainer = styled.section`
  height: 750px;
  @media ${device.desktop} {
    height: 0;
  }
`;
