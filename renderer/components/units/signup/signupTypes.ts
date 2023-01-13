import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
}

export interface ISignUpContainerProps {
  onClickMoveBack: () => void;
  formState: FormState<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  register: UseFormRegister<IFormData>;
  onClickSignup: (data: IFormData) => void;
}
