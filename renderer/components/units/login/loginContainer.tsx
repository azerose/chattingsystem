import { useForm } from "react-hook-form";
import LoginPresenter from "./loginPresenter";
import { IFormData } from "./loginType";
import useMoveToPage from "../../commons/hooks/useMoveToPage";

const LoginContainer = () => {
  const { onClickMoveToPage } = useMoveToPage();

  const { register, formState, handleSubmit } = useForm<IFormData>();

  const onClickLogin = () => {};

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
