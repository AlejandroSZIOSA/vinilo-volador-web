import { type FC } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";

const HomePage: FC = () => {
  const { vinyls } = useAdmin_Ctx();

  console.log(vinyls);
  return (
    <>
      <h1>home Page</h1>
    </>
  );
};

export default HomePage;
