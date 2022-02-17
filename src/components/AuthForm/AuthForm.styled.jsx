import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  // margin: 20px 9px 10px 9px;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 12px;

  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: none;

  color: ${colors.black};

  @media ${device.tablet} {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Input = styled.input`
  outline: none;
  margin-bottom: 35px;
  padding: 17px 20px;
  border: none;
  max-width: 253px;

  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: none;

  color: ${colors.textColor};

  background: ${colors.inputBg};
  border-radius: 30px;

  &::placeholder {
    color: ${colors.authText};
  }

  @media ${device.tablet} {
    max-width: 265px;
  }
  :nth-of-type(2) {
    @media ${device.tablet} {
      margin-bottom: 40px;
    }
  }
`;

export const AuthFormButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  @media ${device.tabletMax} {
    width: 265px;
    margin-left: -7px;
  }
`;

export const SpanEmail = styled.span`
  position: absolute;
  top: 30%;
  color: ${colors.redColor};
  text-align: left;
  font-size: 10px;
  font-style: italic;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const SpanPassword = styled.span`
  position: absolute;
  top: 70%;
  padding-top: 5px;
  color: ${colors.redColor};
  text-align: left;
  font-size: 10px;
  font-style: italic;
  @media ${device.tablet} {
    font-size: 12px;
    padding-top: 0;
  }
`;

export const SpanText = styled.span`
  color: ${colors.textColor};
`;
