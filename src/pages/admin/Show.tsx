import { type FC } from "react";
import SearchSection from "../../components/SearchSection";
import classes from "./Show.module.css";

const ShowPage: FC = () => {
  return (
    <div className={classes.showPageContainer}>
      <h1>Show</h1>
      <SearchSection variant="admin" tableListVariant="admin-show" />
    </div>
  );
};

export default ShowPage;
