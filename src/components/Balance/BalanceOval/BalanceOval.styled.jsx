import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";

export const OvalBalanceSpan = styled.div`
  outline: 1px solid red;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const OvalBalanceDiv = styled.div`
    display: inline-block;
    width: 183px;
    height: 44px;
    margin-bottom: 30px;
    padding: 14px 5px;
    font-weight: bold;
    color: ${colors.black};

    border: 2px solid ${colors.white};
    border-radius: 22px 22px 22px 22px;

    // background: ${colors.bgSummary};
    background: none;

    outline: 1px solid red;

    @media ${device.tablet} {
        width: 125px;
        margin-bottom: 0px;
        padding: 13px 5px;
    }
    `;

export const BalanceTextOval = styled.p`
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
