import styled from "@emotion/styled";
import {colors, device} from '../../styles/utils'

export const SingleText = styled.p`
  margin: auto;
  margin-bottom: 24px;
  width: ${(props) => props.width};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: none;
  text-align: ${(props) => props.align};

  color: #52555f;
`;

export const BalanceText = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  // color: #52555fb3;
  color: ${colors.textColorSecond};
  outline: 1px solid red;

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 21px;
    padding: 14px 0px;
  }
`;

export const ReportText = styled.p`
  margin-right: 15px;
  letter-spacing: 0.04em;
  // color: #52555fb3;
  color: ${colors.textColorSecond}
  outline: 1px solid red;
`;

export const ReportBalanceText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  // color: #52555F;
  color: ${colors.textColor}

  outline: 1px solid red;

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;
