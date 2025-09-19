import { type FC } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";
import classes from "./ShowDateTime.module.css";
const ShowDateTime: FC = () => {
  const { updated_ListDate } = useAdmin_Ctx();

  return (
    <div className={classes.showDateTimeContainer}>
      <img src="/src/assets/icons/updated.svg" width={13} height="auto"></img>
      <div>{updated_ListDate}</div>
    </div>
  );
};

export default ShowDateTime;
