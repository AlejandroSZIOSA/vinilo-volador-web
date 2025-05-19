import { type FC } from "react";
import SearchSection from "../../components/SearchSection";

const RemovePage: FC = () => {
  return (
    <div>
      <h1>Remove</h1>
      <SearchSection variant="admin" tableListVariant="admin-remove" />
    </div>
  );
};

export default RemovePage;
