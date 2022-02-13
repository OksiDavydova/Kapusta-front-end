import styled from "@emotion/styled";
import { device } from "../../styles/utils";
export const Calendar = styled.div`
  /* width: 100%; */
   width: 200px;

  margin-top: auto;

    @media${device.tablet}{
    width: 145px;
  }
`;
