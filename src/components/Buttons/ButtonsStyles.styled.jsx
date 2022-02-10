import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

  color: #52555f;
  background-color: #f5f6fb;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    color: #ffffff;
    background-color: #ff751d;
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: #ffffff;
    background-color: #ff751d;
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
`;
export const GreyButton = styled(BaseButton)`
  padding: 12px 6px;
  font-weight: normal;
  color: #52555fb3;
  background: #f5f6fb;
  /* background: none; */
  border: 2px solid #ffffff;

  &:hover {
    border: #ff751d;
  }

  &:focus {
    border: #ff751d;
  }
`;

export const WhiteButton = styled(GreyButton)`
  font-weight: bold;
  color: #52555f;
  background: #ffffff;
  border: 2px solid #f6f7fc;
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

  color: #000000;
  background-color: #f6f7fb;
  box-shadow: 1px 2px 3px rgba(170, 178, 197, 0.2);

  &:hover {
    color: #ffffff;
    background-color: #ff751d;
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  &:focus {
    color: #ffffff;
    background-color: #ff751d;
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
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
  . &:hover {
    border: 2px solid #ffffff;
  }
  &:focus {
    border: 2px solid #ffffff;
  }
`;
// position: absolute;
// bottom: 0;
export const StyledLink = styled(Link)`
  vertical-align: bottom;
  min-width: 150px;
  height: 53px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  outline: none;
  border: none;
  background: #f5f6fb;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #ff751d;
  }
`;

export const ArrowBtn = styled.a`
  width: 24px;
  height: 24px;
  margin: 15px auto 15px 0px;
  &:hover {
    fill: #ff751d;
  }
  &:focus {
    fill: #ff751d;
  }
`;
// =======
//   cursor: pointer;
//   &:hover {
//     color: #ffffff;
//     background-color: #ff751d;
//     box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
//   }
//   &:focus {
//     color: #ffffff;
//     background-color: #ff751d;
//     box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
//   }
// `;
// >>>>>>> main
