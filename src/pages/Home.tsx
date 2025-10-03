import { type FC } from "react";
import Tabs from "../components/user/Tabs";
import HomeSection from "../components/user/HomeSection";
import NewsSection from "../components/user/NewsSection";

//tabs and content for each tab
const HomePage: FC = () => {
  const tabData = [
    {
      label: "Vinyls",
      content: <HomeSection />,
    },
    { label: "News", content: <NewsSection /> },
  ];

  return (
    <>
      <Tabs tabs={tabData} />
    </>
  );
};

export default HomePage;
