import { type FC } from "react";
import CreateItemForm from "../../components/admin/CreateItemForm";
import TableListShow from "../../components/TableListShow";
import classes from "./Add.module.css";

const AddPage: FC = () => {
  return (
    <div className={classes.container}>
      <h1>Add</h1>
      <div className={classes.formContainer}>
        <CreateItemForm />
      </div>
      <h1>Latest Added Items</h1>
      <div className={classes.tableContainer}>
        <TableListShow variant="admin-latest" />
      </div>
    </div>
  );
};

export default AddPage;
