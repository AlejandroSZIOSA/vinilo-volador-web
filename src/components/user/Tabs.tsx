import { type ReactNode, useState } from "react";
import classes from "./Tabs.module.css";

type Tab = {
  label: string;
  content: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          /*  gap: "1rem", */
          borderBottom: "2px solid #ccc",
          background: "#b51717",
          padding: "7px",
          justifyContent: "space-around",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              borderTop: "none" /* fix */,
              borderLeft: "none" /* fix */,
              borderRight: "none" /* fix */,
              borderBottom: activeIndex === index ? "2px solid blue" : "none",
              fontWeight: activeIndex === index ? "bold" : "normal",
              /* padding: "0.5rem 1rem", */
              padding: "10px 70px 10px 70px",
              background: "#FFAD28",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={classes.tabsContentContainer}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
