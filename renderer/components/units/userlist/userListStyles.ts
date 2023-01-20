import styled from "@emotion/styled";
import { stylePrimaryColor } from "../../../commons/styles/globalStyles";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid ${stylePrimaryColor};
  align-items: center;
  font-size: 15px;
  :hover {
    background-color: ${stylePrimaryColor};
    color: white;
    cursor: pointer;
  }
`;

export const IndexStyle = styled.div`
  width: 50%;
  min-width: 200px;
  padding-left: 30px;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 50%;
  max-width: 1000px;
`;

export const LoggedInUser = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
