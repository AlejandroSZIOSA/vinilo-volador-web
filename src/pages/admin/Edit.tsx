import { type FC } from "react";
import SearchSection from "../../components/SearchSection";

const EditPage: FC = () => {
  return (
    <div>
      <h1>Update Vinyl</h1>
      <SearchSection variant="admin" tableListVariant="admin-edit" />
    </div>
  );
};

export default EditPage;
