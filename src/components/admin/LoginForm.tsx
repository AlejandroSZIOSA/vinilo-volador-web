import { useState, useRef, type FormEvent } from "react";
import { USER } from "../../data/static-data";

type LoginFormProps = {
  handleLoginFn: () => void;
};

const LoginForm = ({ handleLoginFn }: LoginFormProps) => {
  const alias = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [areInputsLocked, setAreInputsLocked] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredAlias = alias.current!.value;
    const enteredPassword = password.current!.value;
    if (enteredAlias === USER.alias && enteredPassword === USER.password) {
      handleLoginFn();
    }
  }

  const toggleLock = () => setAreInputsLocked(!areInputsLocked);
  const toggleShowPassword = () => setIsPasswordShowing(!isPasswordShowing);

  return (
    <form onSubmit={handleSubmit}>
      <label>Alias</label>
      <input
        placeholder={USER.alias}
        id="alias"
        type="alias"
        name="alias"
        disabled={areInputsLocked} // check the login status here and disable the button accordingly
        ref={alias}
        required
      />
      <label>Password</label>
      <div>
        <input
          placeholder={USER.password}
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
          disabled={areInputsLocked}
        >
          {!isPasswordShowing ? "Show" : "Hide"}
        </button>
      </div>

      <div>
        <button type="button" onClick={toggleLock}>
          {!areInputsLocked ? "Lock" : "Unlock"}
        </button>
        <div style={{ paddingTop: "20px" }}>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
