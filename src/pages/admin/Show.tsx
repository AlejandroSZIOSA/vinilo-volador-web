import { type FC } from "react";
import TableListShow from "../../components/TableListShow";

const ShowPage: FC = () => {
  return (
    <div>
      <h1>Show page</h1>
      {/*  <SearchSection
        variant="admin"
        tableListVariant="admin-show"
      ></SearchSection> */}
      <TableListShow variant="admin-latest" />
    </div>
  );
};

export default ShowPage;
