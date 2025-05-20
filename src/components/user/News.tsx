import { type FC } from "react";
import TableListShow from "../TableListShow";
import { useAdmin_Ctx } from "../../store/admin-Context";

const News: FC = () => {
  const { next_Event } = useAdmin_Ctx();
  return (
    <div>
      <h1>News</h1>
      <h2>Next Pick up place</h2>
      <p>{next_Event?.place}</p>
      <h2>Last Items Added</h2>
      <TableListShow variant="user-latest" />
    </div>
  );
};

export default News;
