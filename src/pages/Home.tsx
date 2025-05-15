import { type FC } from "react";
import Tabs from "../components/user/Tabs";
import News from "../components/user/News";
import SearchSection from "../components/SearchSection";
import { useAdmin_Ctx } from "../store/admin-Context";

const HomePage: FC = () => {
  const { vinyls_ } = useAdmin_Ctx();

  const tabData = [
    {
      label: "SEARCH",
      content: <SearchSection variant="user" tableListVariant="user" />,
    },
    { label: "NEWS", content: <News /> },
  ];

  console.log(vinyls_);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>home Page</h1>
      <h1>Tabs</h1>
      <Tabs tabs={tabData} />

      {/*       <button onClick={() => console.log(vinyls_)}>show vinyls</button>
      <button onClick={() => vinyls_.addVinyl_Fn(testNewVinyl)}>
        ADD VINYL
      </button>
      <button onClick={() => vinyls_.removeVinyl_Fn("1")}>Remove</button>
      <button onClick={() => console.log(next_Event)}>show event</button>
      <button onClick={() => setNextEvent_Fn(newEvent)}>Update event</button>
      <button onClick={() => console.log(updated_ListDate)}>
        Show updated date list
      </button>
      <button onClick={() => setUpdatedListDate_Fn(newDate)}>
        Update last date
      </button>
      <button onClick={() => updateVinyl_Fn("vinyl1", newVinyl)}>
        Update Vinyl
      </button> */}
    </div>
  );
};

export default HomePage;
