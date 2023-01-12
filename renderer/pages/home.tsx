import styled from "@emotion/styled";
import useMoveToPage from "../components/commons/hooks/useMoveToPage";

function Home() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <MainWrapper>
        <Title>실시간 채팅 서비스</Title>
        <GoToLoginButton onClick={onClickMoveToPage("/login")}>
          로그인하러 가기
        </GoToLoginButton>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 20px;
`;

const GoToLoginButton = styled.button`
  width: 500px;
  min-width: 500px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
  padding: 20px 5px;
  font-size: 30px;
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;
  box-shadow: inset 0 0 0 0 white;
  font-weight: 600;
  border: 1px dashed white;
  :hover {
    color: skyblue;
    box-shadow: inset 500px 0 0 0 white;
    border: 1px solid white;
  }
`;

export default Home;
