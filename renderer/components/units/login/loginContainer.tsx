import { useForm } from "react-hook-form";
import LoginPresenter from "./loginPresenter";
import { IFormData } from "./loginType";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginYup } from "./loginShema";
import { Login } from "../../commons/firebase/firebase";
import { errorMsg, success } from "../../commons/Modal";

const LoginContainer = () => {
  const { onClickMoveToPage } = useMoveToPage();

  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(LoginYup),
  });

  const onClickLogin = (data: IFormData) => {
    try {
      Login(data.email, data.password);
      success("로그인에 성공하셨습니다");
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
