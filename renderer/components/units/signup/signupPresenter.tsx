import Input01 from "../../commons/input/01";
import * as S from "./signupStyles";
import { ISignUpContainerProps } from "./signupTypes";

const SignUpPresenter = (props: ISignUpContainerProps) => {
  return (
    <>
      <S.MainWrapper>
        <S.SignupWrapper onSubmit={props.handleSubmit(props.onClickSignup)}>
          <S.SignupTopWrapper>
            <S.LogoStyle>회원가입</S.LogoStyle>
            <S.SignupInputWrapper>
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
                placeholder="비밀번호를 입력해주세요"
                register={props.register("password")}
              />
              <S.ErrorStyle>
                {props.formState.errors.password?.message}
              </S.ErrorStyle>
              <Input01
                style={{ textAlign: "center" }}
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </S.SignupInputWrapper>
          </S.SignupTopWrapper>
          <S.BtnWrapper>
            <S.BtnStyle type="button" onClick={props.onClickMoveBack}>
              돌아가기
            </S.BtnStyle>
            <S.BtnStyle>회원가입</S.BtnStyle>
          </S.BtnWrapper>
        </S.SignupWrapper>
      </S.MainWrapper>
    </>
  );
};

export default SignUpPresenter;
