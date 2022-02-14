import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";

export const CashPickerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  // margin-bottom: 20px;

  outline: 1px solid red;
`;

export const CashPickerDiv = styled.div`
  position: absolute;
  width: 134px;
  display: flex;
  justify-content: center;
  padding: 2px 0px;

  outline: 1px solid red;
  z-index: 99;
`;

export const Arrow = styled.a`
  width: 7px;
  height: 12px;
  margin-top: 2px;

  outline: 1px solid red;
`;

export const CashPickerSpan = styled.span`
  width: 96px;
  margin: 0px 15px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.black};

  outline: 1px solid red;
`;
