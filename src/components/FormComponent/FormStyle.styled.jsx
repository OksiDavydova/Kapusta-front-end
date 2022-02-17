import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";

export const FormWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;

  @media${device.tablet} {
    padding: 28px 30px 48px 30px;
    background: ${colors.white};

    box-shadow: 0 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 0px 0px;
  }
  @media${device.desktop} {
    padding: 33px 20px 59px;
  }
`;

export const FormContainer = styled.div`
  @media${device.tablet} {
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

  @media${device.tablet} {
    padding-top: 0;
  }
  @media${device.desktop} {
    flex-direction: row;
  }
`;

export const InputDescription = styled.input`
  outline: none;
  padding-left: 20px;
  height: 44px;
  width: 282px;
  border-radius: 16px 0px 0px 0px;
  color: ${colors.textColor};
  border: 2px solid ${colors.white};
  background: none;

  &::placeholder {
    color: ${colors.selectColor};
  }

  @media${device.tablet} {
    width: 192px;
    border: 2px solid ${colors.bgSummary};
    border-right: 0;
  }
  @media${device.desktop} {
    width: 289px;
  }
`;
export const SelectOverlay = styled.div`
  width: 282px;
  height: 44px;
  margin-bottom: 30px;
  border: 2px solid ${colors.white};
  border-radius: 0px 0px 16px 0px;
  border-top: none;

  &:hover,
  &:focus {
    border-radius: 0;
  }

  @media ${device.tablet} {
    width: 176px;
    border-radius: 0;
    margin-bottom: 0;
    border: 2px solid ${colors.bgSummary};
  }
  @media ${device.desktop} {
    width: 188px;
  }
`;

export const CalculatorOverlay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media${device.tablet} {
    width: 104px;
    border-radius: 0px 22px 22px 0;
    border: 2px solid ${colors.bgSummary};
    height: 44px;
    border-left: none;
  }
`;

// for UAH
export const ValueSpan = styled.span`
  position: absolute;
  top: 16px;
  right: 124px;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  color: ${colors.black};

  @media ${device.tablet} {
    display: none;
  }
`;

export const ValueInput = styled.input`
  outline: none;
  width: 123px;
  padding-top: 5px;
  padding-right: 44px;
  font-weight: bold;
  text-align: right;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid ${colors.white};
  border-right: none;
  color: ${colors.black};
  background: none;

  &::placeholder {
    color: ${colors.black};

    @media ${device.tablet} {
      color: ${colors.selectColor};
    }
  }

  @media ${device.tablet} {
    width: 60px;
    padding-right: 5px;
    color: ${colors.textColor};
    border: 0;
  }

  @media ${device.desktop} {
    width: 80px;
  }
`;

export const CalculatorButton = styled.button`
  padding: 10px 0px;
  width: 60px;
  height: 44px;
  background: none;
  border: 2px solid ${colors.white};
  border-radius: 0px 22px 22px 0px;
  cursor: default;

  @media ${device.tablet} {
    border: none;
    width: 46px;
    padding: 0;
    padding-right: 5px;
  }

  @media ${device.desktop} {
    padding-right: 25px;
  }
`;

export const ButtonFormWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media${device.tablet} {
    margin-top: 30px;
    justify-content: center;
  }
  @media${device.desktop} {
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
  transition: ${colors.animation};

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
  @media${device.tablet} {
    margin-right: 15px;
  }
`;
