import styled from "@emotion/styled";
import { device } from "../../styles/utils";

export const CategoryList = styled.ul`
  outline: 1px solid red;
  // display: flex;
  // justify-content: center;
  // align-items: baseline;
  // flex-wrap: wrap;

  @media ${device.mobileS} {
    margin-left: -10px;
    margin-top: -40px;
  }
  @media ${device.tablet} {
    margin-left: -20px;
    margin-top: -40px;
  }
  @media ${device.desktop} {
    width: 668px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CategoryListWrapper = styled.div`
  // position:relative;
  // top: 50%;
  // left: 0%;
  padding-bottom: 20px;
  outline: 1px solid red;

  @media ${device.tablet} {
    position: relative;
    top: 50%;
    left: 0%;
    min-width: 666px;
    padding: 20px 30px;
    margin-bottom: 30px;

    background-color: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    z-index: 0;

    @media ${device.tablet} {
      padding-bottom: 30px;
    }
  }
`;
