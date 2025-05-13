import { type FC } from "react";
import { useAuth_Ctx } from "../store/auth-Context";
import { useNavigate } from "react-router-dom";
const LoginPage: FC = () => {
  const { login_Fn, is_Authenticated } = useAuth_Ctx();
  const navigate = useNavigate();

  function handleLogin() {
    login_Fn("token");
    navigate("/admin");
  }

  console.log(is_Authenticated);
  return (
    <>
      <h1>Admin Login page</h1>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={() => navigate("/admin")}>to admin</button> */}
    </>
  );
};

export default LoginPage;
