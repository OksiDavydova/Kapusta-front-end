import styled from "@emotion/styled";

export const SingleText = styled.p`
  margin: auto;
  margin-bottom: 24px;
  width: ${(props) => props.width};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: none;
  text-align: ${(props) => props.align};

  color: #52555f;
`;


// DELETE LATER!!!
export const BalanceText = styled.p`
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #52555fb3;
`;
