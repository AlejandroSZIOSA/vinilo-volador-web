import { type FC } from "react";
import CreateItemForm from "../../components/admin/CreateItemForm";
import TableListShow from "../../components/TableListShow";
import classes from "./Add.module.css";

const AddPage: FC = () => {
  return (
    <div className={classes.addPageContainer}>
      <h1>Add</h1>
      <div className={classes.formOuterContainer}>
        <CreateItemForm />
      </div>
      <h1>Latest Added Items</h1>
      <div className={classes.tableOuterContainer}>
        <TableListShow variant="admin-latest" />
      </div>
    </div>
  );
};

export default AddPage;
