import { type FC } from "react";
import SearchSection from "../../components/SearchSection";
import classes from "./Show.module.css";

const ShowPage: FC = () => {
  return (
    <div className={classes.showPageContainer}>
      <h1>Show Current Stack</h1>
      <div className={classes.showPageSearchSectionOuterContainer}>
        <SearchSection variant="admin" tableListVariant="admin-show" />
      </div>
    </div>
  );
};

export default ShowPage;
