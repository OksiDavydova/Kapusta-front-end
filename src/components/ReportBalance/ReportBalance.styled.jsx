import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const ReportBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  padding: 21px 0px 26px 0px;

  background: ${colors.white};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  @media ${device.tablet} {
    margin-bottom: 30px;
    padding: 16px 0px 16px 0px;

    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;
export const ReportBalanceDiv = styled.div`
  position: relative;
  padding: 0px 15px;

  @media ${device.tablet} {
    display: flex;
    padding: 0px 20px;
  }

  &:nth-child(1):after {
    content: "";
    position: absolute;
    top: -12px;
    right: 0;
    border-right: 1px solid ${colors.lineColor};
    height: 70px;

    @media ${device.tablet} {
      top: -10px;
      right: 0;
      height: 36px;
    }
  }
`;
export const ReportBalanceSum = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.04em;

  color: ${(props) => (props.expenses ? `${colors.redColor}` : `${colors.greenColor}`)};
`;
