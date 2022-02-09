import styled from "@emotion/styled";
import { device } from "./utils";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;


  @media ${device.mobileS} {
    width: 100%;
  }

  /* @media screen and (min-width: 480px) {
    max-width: 480px;
  } */

  @media ${device.tablet} {
    max-width: 728px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.laptop} {
    max-width: 1024px;
  }
`;