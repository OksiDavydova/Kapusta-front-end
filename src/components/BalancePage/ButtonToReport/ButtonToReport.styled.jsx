import styled from "@emotion/styled";

export const BtnToReport = styled.button`
  display: flex;
  align-items: bottom;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  padding: 5px;
  color: #52555fb2;
  background: none;
  border: none;
  . &:hover {
    border: 2px solid #ffffff;
  }
  &:focus {
    border: 2px solid #ffffff;
  }
`;

export const BtnReportText = styled.span`
  margin-right: 20px;
  letter-spacing: 0.04em;
  color: #52555fb3;
`;
