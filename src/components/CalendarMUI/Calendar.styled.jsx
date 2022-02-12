import styled from "@emotion/styled";
import { device } from "../../styles/utils";
export const Calendar = styled.div`
  /* width: 100%; */
   width: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
  margin-top: auto;

    @media${device.tablet}{
    width: 120px;
  }
`;
