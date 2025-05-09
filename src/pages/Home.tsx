import { type FC } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";
import type { Vinyl, Event } from "../types/shared";

const testNewVinyl: Vinyl = {
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

const HomePage: FC = () => {
  const vinyls = useAdmin_Ctx();
  const { nextEvent, set_Next_Event, updatedListDate, set_UpdatedListDate } =
    useAdmin_Ctx();

  /* console.log(vinyls.vinyls); */
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>home Page</h1>
      <button onClick={() => console.log(vinyls)}>show vinyls</button>
      <button onClick={() => vinyls.add_Vinyl(testNewVinyl)}>ADD VINYL</button>
      <button onClick={() => vinyls.remove_Vinyl("1")}>Remove</button>
      <button onClick={() => console.log(nextEvent)}>show event</button>
      <button onClick={() => set_Next_Event(newEvent)}>Update event</button>
      <button onClick={() => console.log(updatedListDate)}>
        Show updated date list
      </button>
      <button onClick={() => set_UpdatedListDate(newDate)}>
        Update last date
      </button>
    </div>
  );
};

export default HomePage;
