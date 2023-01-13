import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const BtnStyle = styled.button`
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
  background: none;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  cursor: pointer;
  height: 50px;

  :nth-of-type(1) {
    color: ${stylePrimaryColor};
  }

  :nth-of-type(2) {
    color: white;
    background-color: ${stylePrimaryColor};
  }
`;

export const ErrorStyle = styled.div`
  font-size: 1.3rem;
  color: red;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignupTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid gray;
  margin-bottom: 20px;
  padding: 20px 0;
`;

export const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignupWrapper = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const LogoStyle = styled.div`
  font-size: 50px;
`;
