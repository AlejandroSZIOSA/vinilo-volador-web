import { type FC } from "react";
import { useAuth_Ctx } from "../../store/auth-Context";
import { useNavigate } from "react-router-dom";
import CreateForm from "../../components/admin/CreateForm";

const AddPage: FC = () => {
  const { logout_Fn, is_Authenticated } = useAuth_Ctx();

  const navigate = useNavigate();
  function handleLogOut() {
    logout_Fn();
    navigate("/");
  }

  console.log(is_Authenticated);
  return (
    <>
      <p>Add Page</p>
      <button onClick={handleLogOut}>logOut</button>
      <CreateForm />
      {/* <button onClick={() => navigate("/admin/remove")}>to remove</button> */}
      {/*   <button onClick={() => navigate("./")}>to remove</button> */}
    </>
  );
};

export default AddPage;
