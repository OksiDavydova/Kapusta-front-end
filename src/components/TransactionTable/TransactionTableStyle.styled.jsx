import styled from "@emotion/styled";
import { colors, device } from "../../styles/utils";

export const TransactionSection = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    margin-left: 0;
    padding: 0 30px 48px;
    background: ${colors.white};
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.1);
    border-radius: 0px 0px 30px 30px;
  }

  @media ${device.desktop} {
    padding: 0;
    box-shadow: 0 0 0 0;
    background: transparent;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const TableTransaction = styled.div`
  max-width: 282px;
  min-height: 200px;
  margin: auto;

  @media ${device.tablet} {
    margin: auto;
    min-width: 605px;
    min-height: 300px;
    background-color: ${colors.white};
    box-shadow: 0px 10px 30px 0px rgb(170 178 197 / 20%);
    border-radius: 20px 20px 0 0;
  }

  @media ${device.desktop} {
    min-width: 760px;
    margin: 0;
  }
`;
export const TableHeadTransaction = styled.div`
  @media ${device.tabletMax} {
    display: none;
  }
`;
export const TrHeadTransaction = styled.div`
  @media ${device.tablet} {
    height: 40px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.16;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background-color: ${colors.bgSummary};
    border-radius: 20px 20px 0 0;
  }
`;
export const ThHeadTransaction = styled.div`
  :nth-of-type(1) {
    @media ${device.tablet} {
      width: 66px;
      margin-right: 27px;
      margin-left: 10px;
    }

    @media ${device.desktop} {
      width: 84px;
      margin-right: 20px;
      margin-left: 10px;
      text-align: start;
      padding-left: 10px;
    }
  }

  :nth-of-type(2) {
    @media ${device.tablet} {
      width: 97px;
      margin-right: 104px;
    }

    @media ${device.desktop} {
      width: 74px;
      margin-right: 150px;
    }
  }

  :nth-of-type(3) {
    @media ${device.tablet} {
      width: 120px;
      margin-right: 16px;
    }

    @media ${device.desktop} {
      width: 172px;
      margin-right: 33px;
    }
  }

  :nth-of-type(4) {
    @media ${device.tablet} {
      width: 104px;
      margin-right: 63px;
    }

    @media ${device.desktop} {
      margin-right: 109px;
      padding-left: 52px;
    }
  }
`;

export const TableBodyTransaction = styled.div`
  width: 100%;
  max-height: 250px;
  overflow-y: scroll;

  @media ${device.tablet} {
    border: none;
  }
  @media ${device.desktop} {
    border: none;
  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 2px;
  }

  ,
  &::-webkit-scrollbar-thumb {
    background: ${colors.orange};
    border-radius: 15px;
  }
`;

export const TrBodyTransaction = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  background-color: ${colors.white};
  height: 50px;
  margin-bottom: 2px;
  min-width: 245px;
  border-bottom: 2px solid ${colors.bgSummary};
  @media ${device.tabletMax} {
    display: grid;
    border-bottom: 2px solid ${colors.bgSummary};
    align-items: center;
    padding: 10px 0;
  }

  @media ${device.tablet} {
    min-width: 280px;
    display: flex;
    align-items: center;
    height: 40px;
  }
`;
export const TdBodyTransaction = styled.div`
  :nth-of-type(1) {
    @media ${device.tabletMax} {
      grid-row: 2/4;
      width: 44px;
      font-size: 8px;
      line-height: 1.12;
    }

    @media ${device.tablet} {
      width: 84px;
      margin-right: 20px;
      margin-left: 10px;
    }
  }

  :nth-of-type(2) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media ${device.tabletMax} {
      width: 68px;
      padding-bottom: 5px;
      font-weight: 700;
      text-align: start;
    }

    @media ${device.tablet} {
      margin-right: 31px;
      width: 157px;
      text-align: start;
    }

    @media ${device.desktop} {
      width: 188px;
      margin-right: 61px;
      display: flex;
      justify-content: flex-start;
    }
  }

  :nth-of-type(3) {
    @media ${device.tabletMax} {
      width: 66px;
      margin: 20px 5px 0 0;
      font-size: 8px;
      line-height: 1.12;
      grid-row: 1/4;
      display: grid;
      align-items: center;
      justify-items: stretch;
      justify-content: space-between;
    }

    @media ${device.tablet} {
      text-align: start;
      padding-left: 30px;
      width: 111px;
      margin-right: 7px;
    }

    @media ${device.desktop} {
      width: 116px;
      margin-right: 49px;
    }
  }

  :nth-of-type(4) {
    font-weight:700;
    font-size:12px;
    text-align: start;
    padding-left: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media ${device.tabletMax} {
      width: 84px;
      grid-row: 1/4;
      font-weight: 700;
    }

    @media ${device.tablet} {
      padding-left: 35px;
      width: 103px;
      margin: 0px 15px;
    }

    @media ${device.desktop} {
      padding-left: 47px;
      width: 118px;
      margin-right: 23px;
    }
  }

  :nth-of-type(5) {
    grid-row: 1/4;
    border: none;
    border-radius: 50%;
    width: 32px;
    padding: 7px;

    @media ${device.tablet} {
      margin-right: 26px;
    }
  }

  :hover,
  :focus {
    background-color: ${colors.bgSummary};
  }
`;
