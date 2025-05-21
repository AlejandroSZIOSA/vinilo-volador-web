import { type FC } from "react";
import { useAuth_Ctx } from "../store/auth-Context";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/admin/LoginForm";
const LoginPage: FC = () => {
  const { login_Fn } = useAuth_Ctx();
  const navigate = useNavigate();

  //This CB function can change in the future for async API calls
  function handleLogin() {
    login_Fn("token");
    navigate("/admin");
  }
  return (
    <>
      <h1>Login page</h1>
      <LoginForm handleLoginFn={handleLogin} />
    </>
  );
};

export default LoginPage;
