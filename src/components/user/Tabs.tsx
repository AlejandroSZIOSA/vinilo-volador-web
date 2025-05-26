import { type ReactNode, useState } from "react";

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
        style={{ display: "flex", gap: "1rem", borderBottom: "2px solid #ccc" }}
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
              padding: "0.5rem 1rem",
              background: "none",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "1rem" }}>{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
