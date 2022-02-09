import styled from "@emotion/styled";
import { colors } from "../../styles/utils";
import {device }from '../../styles/utils/device';

export const ModalBackdrop = styled.div`
  position: fixed; 
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  background-color: transparent;
  `;

  export const ModalContent = styled.div`
  position: absolute; 
  text-align: center;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  height: 194px;
  background-color: ${colors.white};
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
   @media ${device.mobileL} {
      width: 380px;
      };
  `;

export const ModalBalanceContent = styled.div`
  position: absolute; 
  text-align: center;
  max-width: 282px;
  padding: 41px 25px 31px 25px;
  color: ${colors.white};
  background: ${colors.bgModalBalance};
  transform: translateY(calc(100% + 15px)) translateX(12%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  
  ::before {
      content: '';
      position: absolute;
      left: 24%;
      top: -11px;
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-bottom: 11px solid #172d5d;

      @media ${device.tablet} {
      left:16%;
    };
  }

      @media ${device.mobileS} {
      transform: translateY(calc(100% + 15px)) translateX(5%);
      };
      @media ${device.tablet} {
      transform: translateY(calc(100% + 15px)) translateX(10%);
      width: 292px;
      };
      @media ${device.laptop} {
     transform: translateY(calc(100% + 18px)) translateX(16%);
    };
};
`;

export const ModalTitleTxt = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 24px 0 20px 0;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.02em;
`;

export const ModalTitleTxtB1 = styled.p`
  font-size: 14px;
  line-height: 1.48;
`;

  export const ModalTitleTxtB2 = styled.p`
  font-size: 12px;
  line-height: 1.33;
`;

export const ModalBtnClose = styled.span`
  display: block;
  cursor: pointer;
  text-align: right;
  padding: 20px 20px 0 0;
  fill: ${colors.textColor}; 
`;

export const ClickLeftBtn = styled.span`
  margin-right: 15px;
`;



  