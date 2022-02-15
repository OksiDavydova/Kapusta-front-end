import styled from "@emotion/styled";

export const HeaderFixed = styled.header`
  /* position: fixed;
  top: 0;
  left: 0;
  // z-index: 999;
  width: 100%; */
  background-color: white;
`;

export const HeaderContainer = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 13px;
  width: 280px;
  margin: 0 auto 0 auto;

  @media (min-width: 768px) {
    width: 728px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    /* width: 1230px; */
  }
`;

export const UserProfileWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: baseline;
  }
`;
