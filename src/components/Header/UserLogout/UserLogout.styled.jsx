import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";

export const LogoutBtn = styled.button`
  margin-top: 5px;
  margin-left: 15px;
  border: none;
  background-color: white;
 
  @media (min-width: 768px) {
    height: 36px;
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid ${colors.lineColor};
  }
`;

export const LogoutBtnText = styled.span`
  margin-bottom: 0;
  color: black;
  text-decoration-line: underline;
`;

