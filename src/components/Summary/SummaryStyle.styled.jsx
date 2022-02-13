import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const SummaryTable = styled.div`
   margin: 0 auto;
   @media${device.desktop}{
position:absolute;
top:106px;
right:20px;

   }
 table{
   width:230px;
 }
 thead >tr{
   :last-child {
     display: none;   
     }}

    tbody{
        display:contents;
      }
      tr td{
        :first-of-type{
             display: block;
              margin:0;
              padding-left: 17px;
              margin-top: 10px;
              text-align:start;
        }
        :last-of-type{
           display: inline-block;
           margin: -28px -13px 0 0;
              text-align: right;
        }
      }
thead {
      display: grid;
      border-radius: 20px 20px 0px 0px;
      text-align: center;
      background-color: ${colors.bgSummary};
    }
    `;
