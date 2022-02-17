import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  width: calc(100vw / 2 - 2px);
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
  transition: ${colors.animation};

  &:not(:last-child) {
    margin-right: 2px;
  }

  &:hover,
  &:focus {
    color: ${colors.white};
    background: ${colors.orange};
  }
`;
