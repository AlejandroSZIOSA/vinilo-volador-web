import { type FC, type ReactNode } from "react";
import classes from "./ButtonSubmitForm.module.css";

type ButtonSubmitFormProps = {
  children: ReactNode;
  onClickFn?: () => void;
  type?: "submit" | "button";
};

const ButtonSubmitForm: FC<ButtonSubmitFormProps> = ({
  children,
  type,
  onClickFn,
}) => {
  return (
    <button className={classes.container} type={type} onClick={onClickFn}>
      {children}
    </button>
  );
};

export default ButtonSubmitForm;
