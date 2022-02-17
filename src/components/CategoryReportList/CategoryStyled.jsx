import styled from "@emotion/styled";
import { device, colors } from "../../styles/utils";

export const CategoryList = styled.ul`
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
  border-bottom: 1px solid ${colors.lineColor};

  @media ${device.tablet} {
    padding: 20px 30px;
    margin-bottom: 30px;

    background-color: ${colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;

    border-bottom: none;
  }
`;
