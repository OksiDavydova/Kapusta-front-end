import styled from "@emotion/styled"; /* padding: 12px 0 13px; // после добавления контейнера скоректировать  */ /* min-width: 320px;
 width:100%;
 height: 56px; 
  
    /* display: flex;
  justify-content: space-between;
  align-items: center; */

/* height: 56px;
  padding: 12px 0 13px; // после добавления контейнера скоректировать
width: 100%; */ // import { colors } from "../../styles/utils"; // stiky

// export const HeaderTag = styled.header`
/* position: fixed;
  z-index: 10;
  background-color: ${colors.white}; 
  top: 0; */ /* background-color: ${colors.white}; */

/* @media (min-width: 768px) {
    padding-left: 26px;
  } */
// `;

export const HeaderContainer = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 12px 10px 13px;
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
