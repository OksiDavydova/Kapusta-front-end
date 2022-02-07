import styled from "@emotion/styled";

export const SingleText = styled.p`
  width: ${(props) => props.width};
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: none;
  margin-bottom: 0;
  text-align: ${(props) => props.align};

  color: #52555f;
`;
