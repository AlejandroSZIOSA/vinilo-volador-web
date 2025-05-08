import { type FC } from "react";
import { useAuth } from "../store/authAdmin-Context";
import { useNavigate } from "react-router-dom";
const LoginPage: FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(isAuthenticated);
  const handleLogin = () => {
    navigate("/admin");
  };
  return (
    <>
      <h1>Admin Login page</h1>
      <button onClick={() => login()}>Login</button>
      <button onClick={handleLogin}>to admin</button>
    </>
  );
};

export default LoginPage;
