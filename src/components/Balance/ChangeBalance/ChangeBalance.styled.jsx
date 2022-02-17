import styled from "@emotion/styled";
import { colors, device } from "../../../styles/utils";

export const ChangeBalanceWrapper = styled.div`
    margin-bottom: 40px;
  @media ${device.tablet} {
    margin: 0;
    margin-left: 40px;
    display: flex;
  }
  @media ${device.desktop} {
    justify-content: center;
  }
`;
export const LabelBalance = styled.label`
  position: relative;
`;

export const Span = styled.span`
  position: absolute;
  top: 0px;
  right: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.black};
  @media ${device.tablet} {
    top: 0;
    right: 12px;
  }
`;

export const ChangeBalanceInput = styled.input`
  outline: none;
  width: 123px;
  padding: 0;
  font-weight: bold;
  text-align: right;
  color:  ${colors.black};
  border: 2px solid  ${colors.white};
  border-radius: 22px 0px 0px 22px;
  background: none;

  padding: 13px 38px 13px 0;
  &::placeholder {
    color:  ${colors.black};
  }
  @media ${device.tablet} {
    border-radius: 16px;
  }
`;

export const ChangeBalanceButton = styled.button`
  display: inline-block;
  width: 123px;
  height: 44px;
  font-weight: normal;
  text-transform: uppercase;
  color:  ${colors.textColorSecond};
  text-align: center;
  background: none;
  border: 2px solid ${colors.white};
  border-left: none;
  border-radius: 0px 22px 22px 0px;
  transition: ${colors.animation};
  &:hover {
    color:  ${colors.white};
    background:  ${colors.orange};
    border:  ${colors.orange};
  }
  &:focus {
    color: ${colors.white};
    background: ${colors.orange};
    border: ${colors.orange};
  }
  @media ${device.tablet} {
    border-radius: 16px;
    margin-left: 15px;
  }
`;

export const BalanceText = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  color: ${colors.textColorSecond};

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 21px;
    margin-left: 30px;
    padding: 14px 0px;
  }
`;

export const OvalBalanceSpan = styled.div`
  padding-bottom: 40px;

  @media ${device.tablet} {
    display: flex;
    padding-bottom: 0px;
  }
`;

export const OvalBalanceDiv = styled.div`
  display: inline-block;
  width: 183px;

  padding: 14px 5px;
  font-weight: bold;
  color: ${colors.black};

  border: 2px solid ${colors.white};
  border-radius: 22px 22px 22px 22px;
  background: none;

  @media ${device.tablet} {
    width: 125px;
    padding: 13px 5px;
  }
`;

export const BalanceTextOval = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
  color: ${colors.textColorSecond};

  @media ${device.tablet} {
    margin-bottom: 0px;
    margin-right: 21px;
    padding: 14px 0px;
  }
`;
