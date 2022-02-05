import styled from "@emotion/styled";

export const LogoutButton = styled.button`
  margin-top: 5px;
  border: none;
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoutButtonText = styled.button`
  margin-left: 20px;
  border: none;
  background-color: transparent;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const LogoutBtnText = styled.p`
  margin-bottom: 0;
  line-height: 1.16;
  font-size: 12px;
  color: black;
  border-bottom: 1px solid black;
`;
