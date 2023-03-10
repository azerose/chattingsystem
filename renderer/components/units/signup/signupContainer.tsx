import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Auth, Store } from "../../commons/firebase/firebase";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { success } from "../../commons/Modal";
import SignUpPresenter from "./signupPresenter";
import { SignupYup } from "./signupSchema";
import { IFormData } from "./signupTypes";

const SignUpContainer = () => {
  const router = useRouter();
  const { onClickMoveBack } = useMoveToPage();
  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(SignupYup),
  });

  const onClickSignup = async (data: IFormData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        Auth,
        data?.email,
        data.password
      );
      await updateProfile(result.user, {
        displayName: data?.email,
      });
      success("회원가입에 성공하셨습니다");
      await router.push("login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <SignUpPresenter
      onClickMoveBack={onClickMoveBack}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSignup={onClickSignup}
    />
  );
};

export default SignUpContainer;
