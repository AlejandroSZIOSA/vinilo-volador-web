import { type FC } from "react";
import { useAuth_Ctx } from "../store/auth-Context";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/admin/LoginForm";
import classes from "./Login.module.css";

const LoginPage: FC = () => {
  const { login_Fn } = useAuth_Ctx();
  const navigate = useNavigate();

  //This CB function can change in the future for async API calls
  function handleLogin() {
    login_Fn("token");
    navigate("/admin");
  }
  return (
    <div className={classes.loginPageContainer}>
      <h1>Login Admin Account</h1>
      <div className={classes.loginFormOuterContainer}>
        <LoginForm handleLoginFn={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
