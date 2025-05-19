import { type FC } from "react";
import SearchSection from "../../components/SearchSection";

const ShowPage: FC = () => {
  return (
    <div>
      <h1>Show page</h1>
      {/* <TableListShow variant="admin-latest" /> */}
      <SearchSection variant="admin" tableListVariant="admin-show" />
    </div>
  );
};

export default ShowPage;
