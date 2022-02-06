import styled from "@emotion/styled";
import { colors } from "../../../styles/utils";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarLetter = styled.p`
  width: 32px;
  height: 32px;

  margin-top: 12px;
  margin-right: 15px;
  padding: 9px 12px;

  font-weight: bold;

  border-radius: 50%;
  text-align: center;
  background-color: ${colors.logoBg};
  color: ${colors.textColor};

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const UserName = styled.p`
  position: relative;
  margin-bottom: 0;
  margin-right: 20px;
  /* font-size: 12px;
  line-height: 1.16; */
  color: ${colors.textColor};

  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 1px;
    height: 36px;
    top: -14px;
    left: 80px;
    background-color: ${colors.textColor};
  }

  @media (max-width: 767.98px) {
    display: none;
  }
`;
