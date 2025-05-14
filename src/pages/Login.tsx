import { type FC } from "react";
import { useAuth_Ctx } from "../store/auth-Context";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/admin/LoginForm";
const LoginPage: FC = () => {
  const { login_Fn } = useAuth_Ctx();
  const navigate = useNavigate();

  function handleLogin() {
    login_Fn("token");
    navigate("/admin");
  }
  return (
    <>
      <h1>Admin Login page</h1>

      <LoginForm handleLoginFn={handleLogin} />

      {/*  <button onClick={handleLogin}>Login</button> */}
      {/* <button onClick={() => navigate("/admin")}>to admin</button> */}
    </>
  );
};

export default LoginPage;
