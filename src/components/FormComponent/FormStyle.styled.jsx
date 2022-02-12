import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";

export const FormWrapper = styled.div`
  max-width: 280px;
  outline: 1px solid red;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;

  @media${device.tablet}{
    max-width: 604px;
    padding-top: 28px;
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
`;

export const InputDescription = styled.input`
  outline: none;
  padding-left: 20px;
  height: 44px;
  width: 100%;
  /* border: 1px solid red; */
  border-radius: 16px 0 0px 0px;
  color: #52555f;
  border: 2px solid #ffffff;
  background: none;

  &::placeholder {
    color: #c7ccdc;
  }
`;
export const SelectOverlay = styled.div`
  width: 282px;
  height: 44px;
  margin-bottom: 30px;

  border: 2px solid white;

  border-radius: 0px 0px 16px 0px;
  border-top: none;
`;

// export const Select = styled.select`
//     display: block;
//     width: 100%;
//     padding-left: 20px;
//     background: none;
//     border: none;
//     appearance: none;
//     outline: none;

//     /* display: flex;
//     align-items: center; */
//     text-align: left;
//     text-transform: none;

//     &:after{
//         position: absolute;
//         content: url(./Vector\ 15.svg);
//         margin-right: 22px;
//         margin-left: 139px;
//         pointer-events: none;
//     }
// `
export const InputCost = styled.input`
  outline: none;
  width: 104px;
  padding-left: 30px;

  text-align: left;

  color: #52555f;

  border: none;
  background: none;

  &::placeholder {
    color: #c7ccdc;
  }
`;
export const CalculatorOverlay = styled.div`
  display: flex;

  outline: 1px solid red;
`;

export const ValueSpan = styled.span`
  padding: 12px 20px;
  width: 125px;
  height: 44px;

  font-weight: bold;
  text-align: right;
  text-transform: uppercase;

  color: #000000;

  // background: #f5f6fb;
  background: none;
  border: 2px solid #ffffff;
  border-radius: 22px 0px 0px 22px;
`;

export const ValueInput = styled.input`
  outline: none;
  width: 50px;
  font-weight: bold;
  text-align: right;

  color: #000000;

  border: none;
  background: none;

  &::placeholder {
    color: #000000;
  }
`;

export const CalculatorButton = styled.button`
  padding: 12px 20px;
  width: 60px;
  height: 44px;

  background: none;
  // background: #f5f6fb;
  border: 2px solid #ffffff;
  border-left: none;
  border-radius: 0px 22px 22px 0px;
`;

export const ButtonFormWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
 @media${device.tablet}{
margin-top: 30px;
    
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
