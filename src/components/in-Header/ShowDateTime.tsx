import { type FC } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";
import classes from "./ShowDateTime.module.css";
const ShowDateTime: FC = () => {
  const { updated_ListDate } = useAdmin_Ctx();

  return (
    <div className={classes.container}>
      <img src="/src/assets/icons/updated.svg" width={15} height={15}></img>
      <p>{updated_ListDate}</p>
    </div>
  );
};

export default ShowDateTime;
