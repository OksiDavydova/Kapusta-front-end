import styled from "@emotion/styled";
import { device } from "../../styles/utils";
import mainTitle from "../../assets/img/mainTitle.png";

export const MainTitle = styled.div`
background-image: url(${mainTitle});
width:183px;
height:63px;
margin: 86px 0 50px 49px;
background-repeat: no-repeat;
background-size: contain;
   @media ${device.tablet} {
 width: 306px;
height: 100px;
margin: 90px 0 50px 148px;
  };
   @media ${device.desktop} {
 width: 377px;
height: 139px;
margin: 308px 127px 347px 108px;
  };
`;