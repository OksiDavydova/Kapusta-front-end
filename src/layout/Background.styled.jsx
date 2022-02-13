//for test only
import styled from "@emotion/styled";
// import { colors } from "../styles/utils";
// import { device } from "../styles/utils";
// import setCabbage from "../assets/img/setCabbage.png";
import pairCabagges from "../assets/img/setCabbage.png";
import oneCabbage from "../assets/img/oneCabbage.png";
// import cabbagesBottom from "../assets/img/cabbagesBottom.png";
// grey back first then cabbage
export const BgOverlay = styled.div`
  position: absolute;
  left: 0px;
  top: 56px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #45b92d;
  /* background-image: url(${oneCabbage}), url(${pairCabagges});
  background-repeat: no-repeat;
  background-position: 273px 503px, 15px 515px; */
`;

export const Bg2 = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  /* background-color: #d5e4d5; */
  width: 100%;
  height: 100%;
`;
