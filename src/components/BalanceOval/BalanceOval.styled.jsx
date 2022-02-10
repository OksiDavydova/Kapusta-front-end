import styled from "@emotion/styled";

export const OvalBalanceSpan = styled.div`
    padding: 15px 29px;
    margin-top: 6px;
    margin-bottom: 20px;
    width: 183px;
    height: 44px;
  
    font-weight: bold;
    // text-align: center;
    text-transform: uppercase;
  
    color: #000000;
  
    // background: #f5f6fb;
    background: none;
    border: 2px solid #ffffff;
    border-radius: 22px 22px 22px 22px;
  `
  
  export const OvalBalanceInput = styled.input`
    outline: none;
    width: 50px;
    font-weight: bold;
    // text-align: right;
  
    color: #000000;
  
    border: none;
    // background: #f5f6fb;
    background: none;

    &::placeholder {
        color: #000000;
      }
    `