//for test only
import styled from "@emotion/styled";
import {device} from "../styles/utils/device";
// import { colors } from "../styles/utils";
// import { device } from "../styles/utils";
import cabbagesBottom from "../assets/img/cabbagesBottom.png";
import setCabbage from "../assets/img/setCabbage.png"
import pairCabagges from "../assets/img/pairCabagges.png";
import oneCabbageRT from "../assets/img/oneCabbageRT.png";
import oneCabbageLB from "../assets/img/oneCabbageLB.png";

// import cabbagesBottom from "../assets/img/cabbagesBottom.png";
// grey back first then cabbage
export const BgBottomAuth = styled.div`
  position: absolute;
  left: 0px;
  top: 56px;
  z-index: -2;
  width: 100%;
  height: 100%;

  background-color: #FFFFFF;
  background-repeat: no-repeat;

  @media ${device.tablet} {
  left: 0px;
  top: 0px;
  background-image: url(${pairCabagges});
  background-position: calc((100% / 2) + 200px) 680px;
  }
  
  @media ${device.desktop} {
  background-image: url(${cabbagesBottom});
  background-position: 50% calc(100% + 25px);
  }


  /* background-image: url(${oneCabbage}), url(${pairCabagges});
  background-repeat: no-repeat;
  background-position: 273px 503px, 15px 515px; */

`;

export const BgBottom = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  left: 0px;
  top: 0px;  
  background-image: url(${oneCabbageRT});
  background-position: calc((100% / 2) - 90px) bottom;
  

  @media ${device.tablet} {
  left: 0px;
  top: 0px;
  background-image: url(${pairCabagges});
  background-position: calc((100% / 2) - 200px) 680px;
  }
  
  @media ${device.desktop} {
  left: 0px;
  top: 0px;
  background-position: calc((100% / 2) - 300px) 658px;
  }
`;

export const BgTopAuth = styled.div`
  z-index: -1;
  display: block;
  position: absolute;
  left: 0px;
  top: 56px;
  height: 345px;
  width: 100%;
  border-radius:0 0 0 150px;  
  background-color: #F2F5FC;
  background-repeat: no-repeat;

   @media ${device.tablet} {
   height: 526px;  
  }  
`;

export const BgTop = styled.div`
  z-index: -1;
  display: block;
  position: absolute;
  background-color: #F5F6FB;
  background-repeat: no-repeat;

  left: 0px;
  top: 56px;
  height: 345px;
  width: 100%;
  border-radius:0 0 0 150px; 
  background-image: url(${oneCabbageLB});
  background-position: calc((100% / 2) + 150px) 160px;

  @media ${device.tablet} {
  left: 0px;
  top: 56px;
  height: 526px;
  width: 100%;
  border-radius:0 0 0 150px; 
  background-image: url(${setCabbage});
  background-position: 50% 28px;
  }
  
  
`;

