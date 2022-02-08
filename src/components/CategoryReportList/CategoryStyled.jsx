import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    margin-left: -10px;
    margin-top: -10px;
  }
  @media ${device.tablet} {
    margin-left: -20px;
    margin-top: -10px;
  }
`;
