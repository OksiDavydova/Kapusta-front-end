import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // margin: 20px 9px 10px 9px;

  @media ${device.tablet} {
    margin:0;
  }
`;

export const Label = styled.label`
  margin-bottom: 12px;

  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: none;

  color: #000000;

  @media ${device.tablet} {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Input = styled.input`
  outline: none;
  margin-bottom: 30px;
  padding: 17px 20px;
  border: none;
  max-width: 253px;

  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: none;

  color: #52555f;

  background: #f6f7fb;
  border-radius: 30px;

  &::placeholder {
    color: #a6abb9;
  }
 
  @media ${device.tablet} {
    max-width: 265px;
  }
  :nth-of-type(2){
   @media ${device.tablet} {
    margin-bottom:40px
  }
  }
`;

export const AuthFormButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // outline: 1px solid red;
  margin-top: auto;
  
  @media ${device.tabletMax} {
    width: 265px;
    margin-left: -7px;
  }
`;
