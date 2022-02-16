import styled from "@emotion/styled";

export const HeaderFixed = styled.header`
  background-color: white;
`;

export const HeaderContainer = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 19px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 728px;
    padding: 10px 0px 10px 26px;

  }

  @media (min-width: 1280px) {
    width: 100%;
    padding: 10px 44px 10px 26px;
  }
`;

export const UserProfileWrapper = styled.div`
  // margin: 0;
  display: flex;
  align-items: center;
  justify-content:  space-between;

  @media (min-width: 768px) {
    align-items: baseline;
  }
`;
