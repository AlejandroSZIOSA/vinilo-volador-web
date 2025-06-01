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
    <div>
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
            className={
              activeIndex === index
                ? `${classes.tabBtn} ${classes.tabBtnActive}`
                : `${classes.tabBtn} ${classes.tabBtnDisabled}`
            }
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
