import { type FC } from "react";
import { useAuth_Ctx } from "../../store/auth-Context";
import { useNavigate } from "react-router-dom";
import CreateForm from "../../components/admin/CreateForm";
import type { Vinyl } from "../../types/shared";
import TableListShow from "../../components/TableListShow";

const AddPage: FC = () => {
  const { logout_Fn, is_Authenticated } = useAuth_Ctx();

  const navigate = useNavigate();
  function handleLogOut() {
    logout_Fn();
    navigate("/");
  }

  //callback function to handle form submission
  function handleCreateItem(newVinyl: Vinyl) {
    console.log(newVinyl);
  }

  console.log(is_Authenticated);
  return (
    <>
      <p>Add Page</p>
      <button onClick={handleLogOut}>logOut</button>
      <CreateForm handleCreateItemFn={handleCreateItem} />
      <TableListShow variant="admin-latest" />
      {/* <button onClick={() => navigate("/admin/remove")}>to remove</button> */}
      {/*   <button onClick={() => navigate("./")}>to remove</button> */}
    </>
  );
};

export default AddPage;
