import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const BaseButton = styled.button`
  display: inline-block;
  width: 125px;
  height: 44px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-transform: uppercase;

  border: none;
  border-radius: 16px;

  color: ${colors.textColor};
  background-color: ${colors.bgSummary};
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  transition: ${colors.animation};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
`;
export const GreyButton = styled(BaseButton)`
  padding: 12px 6px;
  font-weight: normal;
  color: ${colors.textColorSecond};
  background: ${colors.bgSummary};
  /* background: none; */
  border: 2px solid ${colors.white};
  transition: color ${colors.animation};

  &:hover {
    border: ${colors.orange};
  }

  &:focus {
    border: ${colors.orange};
  }
`;

export const WhiteButton = styled(GreyButton)`
  font-weight: bold;
  color: ${colors.textColor};
  background: ${colors.white};
  border: 2px solid ${colors.borderClearBtnColor};
`;

export const LinkGoogle = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 26px;
  width: 122px;
  height: 40px;
  padding: 10px 30px 10px 20px;
  margin: auto;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  /* text-decoration: none; */

  color: ${colors.black};
  background-color: ${colors.inputBg};
  box-shadow: 1px 2px 3px rgba(170, 178, 197, 0.2);
  transition: color ${colors.animation};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: ${colors.white};
    background-color: ${colors.orange};
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
  }
`;

export const StatisticButton = styled.a`
  display: flex;
  align-items: bottom;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  background: none;
  border: none;
  transition: color ${colors.animation};
  . &:hover {
    border: 2px solid ${colors.white};
  }
  &:focus {
    border: 2px solid ${colors.white};
  }
`;

// export const ArrowBtnDiv = styled.div`
//   text-align: left;

//   /* outline: 1px solid red; */

//   @media ${device.tablet} {
//     display: flex;
//     align-items: center;
//     width: 174px;
//     margin: 0;
//     padding: 0;
//   }
// `;

export const ArrowBtnDiv = styled.div`
  text-align: left;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    width: 174px;
    margin: 0;
    padding: 0;
  }
`;

export const ArrowBtn = styled.a`
  width: 24px;
  height: 24px;
  fill: ${colors.orange};

  @media ${device.tablet} {
    margin-right: 15px;
  }
`;

export const ArrowBtnText = styled.a`
  display: block;
  margin: 0;
  letter-spacing: 0.04em;
  color: ${colors.textColorSecond};
  // transition: transform 0.2s;
`;
