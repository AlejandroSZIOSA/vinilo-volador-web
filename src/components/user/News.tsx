import { type FC } from "react";
import TableListShow from "../TableListShow";

const News: FC = () => {
  return (
    <div>
      <h1>News</h1>
      <TableListShow variant="user-latest" />
    </div>
  );
};

export default News;
