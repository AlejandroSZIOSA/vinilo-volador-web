import { type FC } from "react";
import { useAuth } from "../../store/authAdmin-Context";

import { useNavigate } from "react-router-dom";

const AddPage: FC = () => {
  const { logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  function handleLogOut() {
    logout();
    navigate("/");
  }

  console.log(isAuthenticated);
  return (
    <>
      <p>Add Page</p>
      <button onClick={handleLogOut}>logOut</button>
      <button onClick={() => navigate("/admin/remove")}>to remove</button>
      {/*   <button onClick={() => navigate("./")}>to remove</button> */}
    </>
  );
};

export default AddPage;
