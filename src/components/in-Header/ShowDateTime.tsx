import { type FC } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";
import classes from "./ShowDateTime.module.css";
const ShowDateTime: FC = () => {
  const { updated_ListDate } = useAdmin_Ctx();

  return <div className={classes.container}>{updated_ListDate}</div>;
};

export default ShowDateTime;
