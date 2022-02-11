import styled from "@emotion/styled";

export const ChangeBalanceWrapper = styled.div`
  display: flex;
  margin: 6px 0 40px 0;
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
