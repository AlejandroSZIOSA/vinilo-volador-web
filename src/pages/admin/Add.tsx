import { type FC } from "react";
import { useAuth } from "../../store/authAdmin-Context";

const AddPage: FC = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return <div>Add Page</div>;
};

export default AddPage;
