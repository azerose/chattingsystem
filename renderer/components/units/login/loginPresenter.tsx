import Input01 from "../../commons/input/01";
import * as S from "./loginStyles";
import { ILoginContainerProps } from "./loginType";

const LoginPresenter = (props: ILoginContainerProps) => {
  return (
    <>
      <S.MainWrapper>
        <S.LoginMainWrapper>
          <S.LoginWrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.LogoStyle>로그인</S.LogoStyle>
            <S.LoginInputWrapper>
              <Input01
                style={{ textAlign: "center" }}
                type="text"
                placeholder="이메일을 입력해 주세요"
                register={props.register("email")}
              />
              <S.ErrorStyle>
                {props.formState.errors.email?.message}
              </S.ErrorStyle>
              <Input01
                style={{ textAlign: "center" }}
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                register={props.register("password")}
              />
              <S.ErrorStyle>
                {props.formState.errors.password?.message}
              </S.ErrorStyle>
              <S.LoginBtnStyle>로그인</S.LoginBtnStyle>
            </S.LoginInputWrapper>
            <S.LoginOptionWrapper>
              <S.LoginOptionStyle onClick={props.onClickMoveToPage("/signup")}>
                회원가입
              </S.LoginOptionStyle>
            </S.LoginOptionWrapper>
          </S.LoginWrapper>
        </S.LoginMainWrapper>
      </S.MainWrapper>
    </>
  );
};

export default LoginPresenter;
