import styled from "@emotion/styled";
import { device } from "../../../styles/utils";
import btnLayout from "../../../assets/img/btnLayout.png";
import btnLayoutActiv from "../../../assets/img/btnLayoutActiv.png";

export const CardItem = styled.li`
  display: inline-block;
  text-align: center;

  @media ${device.mobileS} {
    margin-top: 10px;
    margin-left: 10px;
    flex-basis: calc(100% / 3 - 10px);
  }
  @media ${device.tablet} {
    margin-top: 10px;
    margin-left: 20px;
    flex-basis: calc(100% / 6 - 20px);
  }
`;

export const CardBtnSvg = styled.button`
  position: relative;
  background-color: transparent;
  border: none;

  &:after {
    content: url(${btnLayout});
    position: absolute;
    left: 0;
    bottom: 2px;
    z-index: -1;
  }
  &:hover {
    &::after {
      content: url(${btnLayoutActiv});
    }
  }

  & svg {
    &:hover,
    &:focus {
      fill: red;
    }
  }
`;

export const SvgLayoutCard = styled.svg`
  width: 56px;
  height: 46px;
  position: absolute;
  top: 0;
`;

export const CardSignature = styled.p`
  margin: 14px 0 0;
  text-transform: uppercase;
  color: #52555f;
`;
