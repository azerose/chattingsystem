import styled from "@emotion/styled";
import { stylePrimaryColor } from "../../../commons/styles/globalStyles";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
`;

export const LoginMainWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const ErrorStyle = styled.div`
  font-size: 15px;
  color: red;
`;

export const LoginBtnStyle = styled.button`
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  color: ${stylePrimaryColor};
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
  }
`;

export const LogoStyle = styled.div`
  font-size: 50px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const LoginOptionStyle = styled.div`
  cursor: pointer;
  font-size: 15px;
`;

export const LoginOptionWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 10px;
  align-items: center;
`;
