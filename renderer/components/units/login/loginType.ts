import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginContainerProps {
  register: UseFormRegister<IFormData>;
  formState: FormState<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickMoveToPage: (path: String) => () => void;
  onClickLogin: (data: IFormData) => void;
}

export interface IFormData {
  email: string;
  password: string;
}
