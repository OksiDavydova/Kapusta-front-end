import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";
import btnLayout from "../../../assets/img/btnLayout.png";
import btnLayoutActiv from "../../../assets/img/btnLayoutActiv.png";

export const CardItem = styled.li`
  position: relative;
  display: inline-block;
  text-align: center;
  outline: 1px solid red;

  @media ${device.tablet} {
    margin-top: 10px;
    margin-left: 20px;
    flex-basis: calc(100% / 6 - 20px);
  }

  @media ${device.tabletMax} {
    margin-top: 40px;
    margin-left: 10px;
    flex-basis: calc(100% / 3 - 10px);

    &:nth-child(4):before{
      content: "";
      display: block;
      position: absolute;
      top: -20%;
      right: -218%;
      height: 1px;
      width: 282px;
      background: ${colors.lineColor};
  }

  &:nth-child(7):before{
    content: "";
    display: block;
    position: absolute;
    top: -20%;
    right: -218%;
    height: 1px;
    width: 282px;
    background: ${colors.lineColor};
}

&:nth-child(10):before{
  content: "";
  display: block;
  position: absolute;
  top: -20%;
  right: -162%;
  height: 1px;
  width: 282px;
  background: ${colors.lineColor};
}

&:nth-child(10):after{
  content: "";
  display: block;
  position: absolute;
  top: 120%;
  right: -162%;
  height: 1px;
  width: 282px;
  background: ${colors.lineColor};
}
`;

export const CardText = styled.p`
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  outline: 1px solid red;


`;

export const CardBtnSvg = styled.div`
  position: relative;
  padding: 5px 0px;
  background-color: transparent;
  border: none;
  outline: 1px solid red;


  &:after {
    content: url(${btnLayout});
    position: absolute;
    left: 15%;
    bottom: 10%;
    z-index: -1;
  }
  &:hover {
    &::after {
      content: url(${btnLayoutActiv});
      z-index: -1;

    }
  }

  & svg {
    &:hover,
    &:focus {
      fill: #ff751d;
    }
  }
`;

export const SvgLayoutCard = styled.svg`
  width: 56px;
  height: 46px;
  position: absolute;
  top: 0;
  outline: 1px solid red;

`;

// export const CardSignature = styled.p`
//   margin: 14px 0 0;
//   text-transform: uppercase;
//   color: #52555f;

// `;

export const CardDiv = styled.a`
outline: 1px solid red;

`