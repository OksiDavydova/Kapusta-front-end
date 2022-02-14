import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const SummaryTableContainer = styled.div`
    margin: 0 auto;

  @media${device.desktop}{
    position:absolute;
    top:160px;
    right:20px;

  }
`;

export const SummaryTab = styled.div`
    width:230px;
    padding-top: 40px;     
    border-radius: 20px 20px 20px 0;
    max-width: 300px;
      
`;

export const SummaryHead = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: center;
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
`;
