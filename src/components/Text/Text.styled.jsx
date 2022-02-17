import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const SingleText = styled.p`
  margin: auto;
  margin-bottom: 24px;
  width: ${(props) => props.width};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: none;
  text-align: ${(props) => props.align};
  color: ${colors.textColor};
  
  @media ${device.tablet} {
    margin:0;
    margin-bottom: 20px;
    text-align: left;
    font-size: 12px;
    line-height: 14px;
    width: 269px;
  }
`;
// ?????
export const ReportBalanceText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.textColor}

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;
