import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const CategoryList = styled.ul`
  /* outline: 1px solid red; */

  @media ${device.mobileS} {
    margin-left: -10px;
    margin-top: -10px;
  }
  @media ${device.tablet} {
    margin-left: -20px;
    margin-top: -20px;
  }
  @media ${device.desktop} {
    width: 668px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CategoryListWrapper = styled.div`
  // padding-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
  /* outline: 1px solid red; */

  @media ${device.tablet} {
    top: 50%;
    left: 0%;
    min-width: 666px;
    padding: 20px 30px;
    margin-bottom: 30px;

    background-color: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;

    border-bottom: none;
  }
`;
