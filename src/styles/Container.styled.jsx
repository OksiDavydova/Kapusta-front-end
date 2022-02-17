import styled from "@emotion/styled";
//import pairCabbages from "../assets/img/pairCabbages.png";
import { device } from "./utils";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media ${device.mobileS} {
    width: 320px;
  }

  /* @media screen and (min-width: 480px) {
    max-width: 480px;
  } */

  @media ${device.tablet} {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.desktop} {
    width: 1280px;
    background-image: none;
  }
`;
