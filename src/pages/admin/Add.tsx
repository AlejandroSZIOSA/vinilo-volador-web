import { type FC } from "react";
import { useAuth_Ctx } from "../../store/auth-Context";
import { useNavigate } from "react-router-dom";
import CreateItemForm from "../../components/admin/CreateItemForm";
import TableListShow from "../../components/TableListShow";

const AddPage: FC = () => {
  const { logout_Fn } = useAuth_Ctx();

  const navigate = useNavigate();
  function handleLogOut() {
    logout_Fn();
    navigate("/");
  }

  return (
    <>
      <p>Add New Item</p>
      <button onClick={handleLogOut}>logOut</button>
      <CreateItemForm />
      <TableListShow variant="admin-latest" />
    </>
  );
};

export default AddPage;
