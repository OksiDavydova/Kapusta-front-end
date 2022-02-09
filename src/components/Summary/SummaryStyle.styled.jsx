import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const SummaryContainer = styled.div`
margin-top:40px;                            //delete
background-color: ${colors.bgSummary};
 border-radius: 20px 20px 20px 0;
 max-width:230px;

`;
export const SumTitle = styled.p`
border-bottom: 2px solid ${colors.white};
padding-top:10px;
margin-bottom: 0;
font-weight: 700;
font-size: 12px;
line-height: 1.16;
height:38px;
letter-spacing: 0.02em;
text-transform: uppercase;

`;

export const SumItem = styled.li`
display: flex;
justify-content: space-between;
padding: 0 20px;
height:38px;
&:not(:last-child){
     border-bottom: 2px solid ${colors.white};
}

`;
export const SumMonth= styled.p`
margin-top:10px;
`;

export const SumValue = styled.p`
margin-top:10px;
`;
