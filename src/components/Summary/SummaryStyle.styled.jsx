import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const SummaryTableContainer = styled.div`
  width: 230px;
      max-height: 306px;
  /* margin: 0 auto; */
  padding-top: 40px;
  margin-left: 30px;
  border-radius: 20px 20px 20px 0;
  box-shadow: 0px 10px 30px 0px rgb(170 178 197 / 20%);     //?????
  @media ${device.desktop} {
    padding: 0;
    margin: 0;
  }
`;

export const SummaryTab = styled.div`
  /* width: 230px; */
  /* padding: 40px 0px 40px 30px;
  border-radius: 20px 20px 20px 0; */
`;

export const SummaryHead = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
`;

export const SummaryBody = styled.div`
   height: 228px;
   background-color: ${colors.bgSummary};
`;

export const SummaryTr = styled.div`
  height: 38px;
  border-bottom: 2px solid ${colors.white};
  background-color: ${colors.bgSummary};
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
  :last-child {
    display: none;
  }
`;

export const SummaryTrBody = styled.div`
  background-color: ${colors.bgSummary};
  border-bottom: 2px solid ${colors.white};
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
   text-transform: uppercase;
`;
