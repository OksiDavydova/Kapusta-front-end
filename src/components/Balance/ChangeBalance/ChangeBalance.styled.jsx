import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";

export const ChangeBalanceWrapper = styled.div`
  margin: 0 0 40px 0;
  border: 1px solid green;
  @media ${device.tablet} {
    margin-bottom: 0;
    display: flex;
  }
`;

export const ChangeBalanceSpan = styled.span`
  padding: 12px 17px;
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

  @media ${device.tablet} {
    border-radius: 16px;
  }
`;

export const ChangeBalanceInput = styled.input`
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

  @media ${device.tablet} {
    border-radius: 16px;
  }
`;

export const ChangeBalanceButton = styled.button`
  padding: 12px 17px;
  width: 123px;
  height: 44px;
  font-weight: normal;
  text-transform: uppercase;
  color: #52555fb3;
  // background: #f5f6fb;
  background: none;
  border: 2px solid #ffffff;
  border-left: none;
  border-radius: 0px 22px 22px 0px;
  &:hover {
    color: #ffffff;
    background: #ff751d;
    border: #ff751d;
  }
  &:focus {
    color: #ffffff;
    background: #ff751d;
    border: #ff751d;
  }
  @media ${device.tablet} {
    border-radius: 16px;
    margin-left: 15px;
  }
`;

export const BalanceText = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  color: ${colors.textColorSecond};
  outline: 1px solid red;

  @media ${device.tablet} {
    max-width: 83px;
    margin-bottom: 0px;
    margin-right: 21px;
    padding: 14px 0px;
  }
`;

// export const ChangeBalanceSpan = styled.span`
//   position: relative;
//   &:after {
//     position: absolute;
//     content: "UAN";
//     width: 25px;
//     left: 80px;
//     top: 15px;
//     text-align: right;
//     text-transform: uppercase;
//     color: #000000;
//     font-weight: bold;
//   }

//   /* padding: 12px 17px;
//   width: 125px;
//   height: 44px;

//   font-weight: bold;
//   text-align: right;
//   text-transform: uppercase;

//   color: #000000;

//   // background: #f5f6fb;
//   background: none;
//   border: 2px solid #ffffff;
//   border-radius: 22px 0px 0px 22px; */
// `;
