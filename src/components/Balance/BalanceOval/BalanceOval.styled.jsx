import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";

export const OvalBalanceSpan = styled.div`
  padding-bottom: 30px;

  @media ${device.tablet} {
    display: flex;
    padding-bottom: 0px;
  }
`;

export const OvalBalanceDiv = styled.div`
    display: inline-block;
    width: 183px;
    padding: 14px 5px;
    font-weight: bold;
    color: ${colors.black};
    border: 2px solid ${colors.white};
    border-radius: 22px 22px 22px 22px;
    background: none;

    @media ${device.tablet} {
        width: 125px;
        padding: 13px 5px;
    }
    `;

export const BalanceTextOval = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  color: ${colors.textColorSecond};

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 21px;
    padding: 14px 0px;
  }
`;
