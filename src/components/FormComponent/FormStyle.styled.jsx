import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";

export const FormWrapper = styled.div`
width:100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;

  @media${device.tablet}{
    
    padding: 28px 30px 48px 30px; 
    background: #ffffff;
      box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 0px 0px;


  }
    @media${device.desktop}{
    padding: 33px 20px 59px;
   
  }
`;

export const FormContainer = styled.div`
      @media${device.tablet}{
    display: flex;
  }
`;

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 15px;

  box-sizing: border-box;
  border-radius: 16px 16px 0px 0px;

  @media${device.tablet}{
    padding-top: 0;
  }
  @media${device.desktop}{
    flex-direction: row;
  }
`;

export const InputDescription = styled.input`
  outline: none;
  padding-left: 20px;
  height: 44px;
  width: 100%;
  border-radius: 16px 0px 0px 0px;
  color: #52555f;
  border: 2px solid ${colors.white};
  background: none;

  &::placeholder {
    color: #c7ccdc;
  }
  @media${device.tablet}{
    width: 190px;
    border: 2px solid ${colors.bgSummary};
    border-right:0;
  }
    @media${device.desktop}{
    width: 287px;
  }
`;
export const SelectOverlay = styled.div`
  width: 282px;
  height: 44px;
  margin-bottom: 30px;
  border: 2px solid ${colors.white};
  border-radius: 0px 0px 16px 0px;
  border-top: none;
  @media ${device.tablet} {
    width: 190px;
    border-radius: 0;
    margin-bottom: 0;
    border: 2px solid ${colors.bgSummary};
  }
`;

export const CalculatorOverlay = styled.div`
  position: relative;
  display: flex;
  
    justify-content: center;
  margin-left:auto;
  margin-right:auto;
  @media${device.tablet}{
    border-radius:  0px 22px  22px 0;
    border: 2px solid #F5F6FB;
    height: 44px;
    border-left:none;
  }
`;
// for UAH
export const ValueSpan = styled.span`
  position: absolute;
  top: 14px;
  right: 114px;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  color: #000000;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ValueInput = styled.input`
  outline: none;
  width: 123px;
  padding-right: 35px;
  font-weight: bold;
  text-align: right;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid ${colors.white};
  border-right: none;
  color: #000000;
  background: none;

  &::placeholder {
    color: #000000;
  }

  @media ${device.tablet} {
    border-color: ${colors.bgSummary};
    height: 40px;
    padding-right: 5px;
    border: 0;
    width: 60px;
  }

  @media ${device.desktop} {
    width: 80px;
  }
`;

export const CalculatorButton = styled.button`
  padding: 12px 20px;
  width: 60px;
  height: 44px;
  background: none;
  border: 2px solid ${colors.white};
  border-radius: 0px 22px 22px 0px;
  @media ${device.tablet} {
    border-color: ${colors.bgSummary};
    border: 0;
    width: 40px;
    padding: 0;
    height: 40px;
  }
`;

export const ButtonFormWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* outline: 1px solid red; */
   @media${device.tablet}{
   margin-top: 30px;
   justify-content: center;  
  }
     @media${device.desktop}{
   margin-top: 0;
   width: 265px;
    margin-left: 27px;
  }
`;

export const FormButton = styled.button`
  width: 125px;
  height: 44px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 16px;

  color: ${colors.textColor};
  background-color: ${colors.bgSummary};
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
`;

export const FormButtonSubmit = styled(FormButton)`
       @media${device.tablet}{
margin-right: 15px
  }
`;
