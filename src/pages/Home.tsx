import { type FC } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";
import type { Vinyl, Event } from "../types/shared";
import Tabs from "../components/user/Tabs";
import News from "../components/user/NewsSection";
import SearchSection from "../components/user/SearchSection";
import SearchSection2 from "../components/user/SearchSection2";
import NewsSection from "../components/user/NewsSection";

import SearchSection3 from "../components/user/SearchSection3";
/* const testNewVinyl: Vinyl = {
  id: "1",
  album: "Test Album 1",
  artist: "Test Artist1",
};

const newEvent: Event = {
  place: "New Place",
  date: new Date(),
  from: "12",
  to: "14",
};

const newDate = new Date().toISOString();

const newVinyl: Vinyl = {
  id: "updated",
  album: "Updated Album 1",
  artist: "Updated Artist1",
}; */

const HomePage: FC = () => {
  const vinyls_ = useAdmin_Ctx();
  const {
    next_Event,
    setNextEvent_Fn,
    updated_ListDate,
    setUpdatedListDate_Fn,
    updateVinyl_Fn,
  } = useAdmin_Ctx();

  const tabData = [
    { label: "SEARCH", content: <SearchSection3 variant="user" /> },
    { label: "NEWS", content: <NewsSection /> },
  ];

  /*  console.log(vinyls_); */
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
