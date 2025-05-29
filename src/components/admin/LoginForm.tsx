import { useState, useRef, type FormEvent, type FC } from "react";
import { ADMIN } from "../../data/static-data";
import classes from "./LoginForm.module.css";

type LoginFormProps = {
  handleLoginFn: () => void;
};

const LoginForm: FC<LoginFormProps> = ({ handleLoginFn }) => {
  const alias = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [areInputsLocked, setAreInputsLocked] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredAlias = alias.current!.value;
    const enteredPassword = password.current!.value;
    if (enteredAlias === ADMIN.alias && enteredPassword === ADMIN.password) {
      handleLoginFn();
    }
  }

  const toggleLock = () => setAreInputsLocked(!areInputsLocked);
  const toggleShowPassword = () => setIsPasswordShowing(!isPasswordShowing);

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <label>Alias</label>
      <input
        placeholder={ADMIN.alias}
        id="alias"
        type="text"
        name="alias"
        disabled={areInputsLocked} // check the login status here and disable the button accordingly
        ref={alias}
        required
      />
      <label>Password</label>
      <div className={classes.passwordInputContainer}>
        <input
          placeholder={ADMIN.password}
          id="password"
          type={isPasswordShowing ? "text" : "password"}
          name="password"
          maxLength={20}
          disabled={areInputsLocked} // check the login status here and disable the button accordingly  // fix: use useRef here to fix this error.  This is because useRef creates a mutable ref object that can be updated multiple times during the component's rendering phase. It's useful when some value needs to be referenced in the component's render function, but needs to be changed during updates.
          ref={password}
          required
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className={classes.showHideBtn}
          disabled={areInputsLocked}
        >
          {!isPasswordShowing ? "Show" : "Hide"}
        </button>
      </div>

      <div className={classes.submitBtnContainer}>
        <button type="submit" className={classes.submitBtn}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
