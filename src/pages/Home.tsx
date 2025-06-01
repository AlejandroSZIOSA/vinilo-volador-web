import { type FC } from "react";
import Tabs from "../components/user/Tabs";
import News from "../components/user/News";
import SearchSection from "../components/SearchSection";
import classes from "./Home.module.css";

const HomePage: FC = () => {
  const tabData = [
    {
      label: "HOME",
      content: <SearchSection variant="user" tableListVariant="user" />,
    },
    { label: "NEWS", content: <News /> },
  ];

  return (
    <div className={classes.outerTabsContainer}>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default HomePage;
