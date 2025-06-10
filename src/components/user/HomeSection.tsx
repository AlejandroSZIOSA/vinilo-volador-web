import { type FC } from "react";
import SearchSection from "../SearchSection";
import classes from "./HomeSection.module.css";

const HomeSection: FC = () => {
  return (
    <div className={classes.searchSectionOuterContainer}>
      <SearchSection variant="user" tableListVariant="user" />
    </div>
  );
};

export default HomeSection;
