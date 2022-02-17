import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const MonthPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tabletMax} {
    padding-bottom: 30px;
  }
`;

export const MonthPickerText = styled.p`
  margin-bottom: 5px;
  letter-spacing: 0.04em;
  color: ${colors.textColorSecond};
`;

export const Arrow = styled.a`
  width: 7px;
  height: 12px;
  margin-top: 2px;
`;

export const MonthPickerSpan = styled.span`
  width: 164px;
  display: flex;
  justify-content: space-between;
  padding: 2px 0px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.black};
`;
