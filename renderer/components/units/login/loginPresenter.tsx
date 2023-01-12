import * as S from "./loginStyles";

const LoginPresenter = () => {
  return (
    <>
      <S.MainWrapper>
        <div>로그인</div>
        <input placeholder="이메일을 입력하세요" />
        <input placeholder="비밀번호를 입력하세요" />
      </S.MainWrapper>
    </>
  );
};

export default LoginPresenter;
