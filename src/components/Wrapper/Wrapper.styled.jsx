import styled from "@emotion/styled";

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  justify-content: space-around;
  width: 100%;
  height: calc(
    100vh - 56px
  ); // change - "some value" depended from content header
  /* height: 458px; */

  /* outline: 1px solid red;
  background-color: #9acd32; */
`;

export const AuthWrapper = styled.div`
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
`;

export const BalanceWrapper = styled.div`
  max-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  padding-top: 30px;
  outline: 1px solid red;
`;
