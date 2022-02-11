import styled from "@emotion/styled";
import { colors } from "../../styles/utils";

export const HeaderTag = styled.header`
  /* position: fixed;
  z-index: 10;
  background-color: ${colors.white}; 
  top: 0; */  // stiky
  height: 56px;
  padding: 12px 0 13px; // после добавления контейнера скоректировать

  /* padding: 12px 0 13px; // после добавления контейнера скоректировать  */
 /* min-width: 320px;
 width:100%;
 height: 56px; 
  
    /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* background-color: ${colors.white}; */

  /* @media (min-width: 768px) {
    padding-left: 26px;
  } */
`;

export const HeaderContainer = styled.div`
  height: 100%;
  /* min-width: 300px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 212px;
    align-items: baseline;
  }
`;
