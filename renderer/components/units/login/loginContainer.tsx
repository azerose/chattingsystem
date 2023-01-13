import { useForm } from "react-hook-form";
import LoginPresenter from "./loginPresenter";
import { IFormData } from "./loginType";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../commons/firebase/firebase";

const LoginContainer = () => {
  const { onClickMoveToPage } = useMoveToPage();

  const { register, formState, handleSubmit } = useForm<IFormData>();

  const onClickLogin = async (data: IFormData) => {
    const { user } = await signInWithEmailAndPassword(
      Auth,
      data.email,
      data.password
    );
    // const { stsTokenManager, uid } = user;
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
