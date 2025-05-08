import { type FC } from "react";
import { useAuth } from "../store/authAdmin-Context";
import { useNavigate } from "react-router-dom";
const LoginPage: FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(isAuthenticated);
  return (
    <>
      <h1>Admin Login page</h1>
      <button onClick={() => login("token")}>Login</button>
      <button onClick={() => navigate("/admin")}>to admin</button>
    </>
  );
};

export default LoginPage;
