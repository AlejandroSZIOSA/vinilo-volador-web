import { type FC } from "react";
import CreateItemForm from "../../components/admin/CreateItemForm";
import TableListShow from "../../components/TableListShow";
import classes from "./Add.module.css";

const AddPage: FC = () => {
  return (
    <div className={classes.addPageContainer}>
      <div className={classes.addPageVinylContainer}>
        <h1>Add Vinyl</h1>
        <div className={classes.addPageFormOuterContainer}>
          <CreateItemForm />
        </div>
      </div>
      <div className={classes.addPageShowLatestItemsContainer}>
        <h1>Latest Added Vinyls</h1>
        <div>
          <TableListShow variant="admin-latest" />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
