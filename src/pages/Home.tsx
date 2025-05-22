import { type FC } from "react";
import Tabs from "../components/user/Tabs";
import News from "../components/user/News";
import SearchSection from "../components/SearchSection";

const HomePage: FC = () => {
  const tabData = [
    {
      label: "SEARCH",
      content: <SearchSection variant="user" tableListVariant="user" />,
    },
    { label: "NEWS", content: <News /> },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>home Page</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default HomePage;
