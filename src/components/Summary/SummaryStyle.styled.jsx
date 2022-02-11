import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const SummaryTable = styled.div`
   margin: 0 auto;
 
    table {
        margin-top:40px;                            //delete
        background-color: ${colors.bgSummary};
        border-radius: 20px 20px 20px 0;
        width:230px;

  
  thead { 
       tr{
        padding-top:10px;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.16;
        height:38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;

     :last-child {
     display: none;   
     }
    th{
     border-bottom: 2px solid ${colors.white};

}}}
    tbody{
        display: flex;
        flex-direction: column;
    }
    tbody tr{
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        height:38px;
   &:not(:last-child){
     border-bottom: 2px solid ${colors.white};
     }
    th,
    td {
        margin-top:10px;
      }
    }
  }
`;
