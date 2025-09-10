import { useState, useRef, type FormEvent, type FC } from "react";
import { ADMIN } from "../../data/static-data";
import classes from "./LoginForm.module.css";
import ButtonSubmitForm from "../buttons/ButtonSubmitForm";

type LoginFormProps = {
  handleLoginFn: () => void;
};

const LoginForm: FC<LoginFormProps> = ({ handleLoginFn }) => {
  const alias = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredAlias = alias.current!.value;
    const enteredPassword = password.current!.value;
    if (enteredAlias === ADMIN.alias && enteredPassword === ADMIN.password) {
      handleLoginFn();
    }
  }

  const toggleShowPassword = () => setIsPasswordShowing(!isPasswordShowing);

  return (
    <form className={classes.loginFormContainer} onSubmit={handleSubmit}>
      <label htmlFor="alias">Alias</label>
      <input
        placeholder={ADMIN.alias}
        id="alias"
        type="text"
        name="alias"
        ref={alias}
        required
      />
      <label htmlFor="password">Password</label>
      <div className={classes.passwordInputContainer}>
        <input
          placeholder={ADMIN.password}
          id="password"
          type={isPasswordShowing ? "text" : "password"}
          name="password"
          maxLength={20}
          ref={password}
          required
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className={classes.showHideBtn}
        >
          {!isPasswordShowing ? "Show" : "Hide"}
        </button>
      </div>
      <div className={classes.submitBtnOuterContainer}>
        <ButtonSubmitForm type="submit">login</ButtonSubmitForm>
      </div>
    </form>
  );
};

export default LoginForm;
