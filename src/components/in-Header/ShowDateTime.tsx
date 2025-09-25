import { type FC } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";
import UpdatedIcon from "../../assets/icons/updated.svg";
import classes from "./showDateTime.module.css";

const ShowDateTime: FC = () => {
  const { updated_ListDate } = useAdmin_Ctx();

  return (
    <div className={classes.showDateTimeContainer}>
      <img src={UpdatedIcon} width={13} height="auto"></img>
      <div>{updated_ListDate}</div>
    </div>
  );
};

export default ShowDateTime;
