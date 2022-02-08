import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 320px;
  height: 458px;
  //   align-items: center;
  justify-content: center;
  outline: 1px solid red;
`;

export const AuthWrapper = styled.div`
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
`;
export const SingleWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
`;
export const BalanseWrapper = styled.div`
  width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  outline: 1px solid red;
`;
