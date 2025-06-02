import { type FC, type ReactNode } from "react";
import classes from "./ButtonSubmitForm.module.css";

type ButtonSubmitFormProps = {
  children: ReactNode;
  type?: "submit" | "button";
  disabled?: boolean;
  onClickFn?: () => void;
};

const ButtonSubmitForm: FC<ButtonSubmitFormProps> = ({
  children,
  type,
  onClickFn,
  disabled,
}) => {
  return (
    <button
      className={classes.buttonSubmitContainer}
      type={type}
      onClick={onClickFn}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSubmitForm;
