import { type FC } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";
import { type Vinyl } from "../types/shared";

const testNewVinyl: Vinyl = {
  id: "1",
  album: "Test Album 1",
  artist: "Test Artist1",
};

const HomePage: FC = () => {
  const vinyls = useAdmin_Ctx();

  /* console.log(vinyls.vinyls); */
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>home Page</h1>
      <button onClick={() => vinyls.add_Vinyl(testNewVinyl)}>ADD VINYL</button>
      <button onClick={() => console.log(vinyls)}>show vinyls</button>
      <button onClick={() => vinyls.remove_Vinyl("1")}>Remove</button>
    </div>
  );
};

export default HomePage;
