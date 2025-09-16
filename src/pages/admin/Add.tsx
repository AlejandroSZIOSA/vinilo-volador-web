import { type FC } from "react";
import CreateItemForm from "../../components/admin/CreateItemForm";
import TableListShow from "../../components/TableListShow";
import classes from "./Add.module.css";

const AddPage: FC = () => {
  return (
    <div className={classes.addPageContainer}>
      <div className={classes.addVinylContainer}>
        <h1>Add Vinyl</h1>
        <div className={classes.formOuterContainer}>
          <CreateItemForm />
        </div>
      </div>
      <div className={classes.latestAddedListContainer}>
        <h1>Latest Added Items</h1>
        <div className={classes.tableOuterContainer}>
          <TableListShow variant="admin-latest" />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
