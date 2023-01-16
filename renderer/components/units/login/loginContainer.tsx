import { useForm } from "react-hook-form";
import LoginPresenter from "./loginPresenter";
import { IFormData } from "./loginType";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginYup } from "./loginShema";
import { Auth, Login } from "../../commons/firebase/firebase";
import { errorMsg, success } from "../../commons/Modal";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";
import { useRouter } from "next/router";

const LoginContainer = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(LoginYup),
  });

  const onClickLogin = async (data: IFormData) => {
    try {
      await Login(data.email, data.password);
      setAccessToken(Auth.currentUser?.displayName);
      success("로그인에 성공하셨습니다");
      await router.push("/userlist");
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  return (
    <LoginPresenter
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickMoveToPage={onClickMoveToPage}
      onClickLogin={onClickLogin}
    />
  );
};

export default LoginContainer;
