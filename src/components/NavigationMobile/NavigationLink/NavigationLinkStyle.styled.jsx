import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  vertical-align: bottom;
  min-width: 148px;
  height: 53px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.black};
  outline: none;
  border: none;
  background: ${colors.bgSummary};

  // outline: 1px solid red;


  &:hover,
  &:focus {
    color: ${colors.white};
    background: ${colors.orange};
  }
`;
