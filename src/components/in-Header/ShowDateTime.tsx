import { type FC } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";

const ShowDateTime: FC = () => {
  const { updated_ListDate } = useAdmin_Ctx();

  return <div>{updated_ListDate}</div>;
};

export default ShowDateTime;
