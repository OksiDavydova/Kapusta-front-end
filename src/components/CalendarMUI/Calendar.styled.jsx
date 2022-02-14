import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  width: 124px;

  outline: 1px solid red;

    @media${device.desktop}{
    width: 145px;
  }
`;
