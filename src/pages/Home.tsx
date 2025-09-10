import { type FC } from "react";
import Tabs from "../components/user/Tabs";
import classes from "./Home.module.css";
import HomeSection from "../components/user/HomeSection";
import NewsSection from "../components/user/NewsSection";

//tabs and content for each tab
const HomePage: FC = () => {
  const tabData = [
    {
      label: "Home",
      content: <HomeSection />,
    },
    { label: "News", content: <NewsSection /> },
  ];

  return (
    <div className={classes.outerTabsContainer}>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default HomePage;
