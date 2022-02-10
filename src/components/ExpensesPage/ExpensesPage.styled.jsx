import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
  min-width: 282px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  display: flex;
  width: 282px;
  height: 44px;

  border: 2px solid #f5f6fb;
  box-sizing: border-box;
  border-radius: 16px 16px 0px 0px;
`;

export const Input = styled.input`
  outline: none;
  padding-left: 20px;

  /* display: flex;
    align-items: center; */

  color: #52555f;

  border: none;
  background: none;

  &::placeholder {
    color: #c7ccdc;
  }
`;
export const DivSelect = styled.div`
  // position: relative;
  // display: flex;
  // align-items: center;
  width: 282px;
  height: 44px;
  margin-bottom: 30px;

  border: 2px solid #f5f6fb;
  box-sizing: border-box;
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
export const ProductDiv = styled.div`
  display: flex;
  margin: 6px 0 40px 0;
  outline: 1px solid red;
`;

export const ProductSpan = styled.span`
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

export const ProductInput = styled.input`
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

export const ProductButton = styled.span`
  padding: 12px 17px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
  margin-top: auto;
`;
