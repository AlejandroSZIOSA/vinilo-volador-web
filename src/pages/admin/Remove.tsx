import { type FC, useRef, useState } from "react";
import SearchSection from "../../components/SearchSection";
import { useAdmin_Ctx } from "../../store/admin-Context";
import ConfirmDialog, {
  type ConfirmDialogRef,
} from "../../components/admin/ConfirmDialog";

import classes from "./Remove.module.css";

const RemovePage: FC = () => {
  const { removeVinyl_Fn } = useAdmin_Ctx();
  const [id, setId] = useState("");

  const dialogRef = useRef<ConfirmDialogRef>(null); //Imported type for ConfirmDialogRef

  const handleOpenDialog = () => {
    dialogRef.current?.open();
  };

  const confirmAction = () => {
    removeVinyl_Fn(id);
  };

  //CALLBACK FN X 3
  function handleRemoveClick(id: string) {
    setId(id);
    handleOpenDialog();
  }

  return (
    <div className={classes.removePageContainer}>
      <h1>Remove</h1>
      <div className={classes.searchRemovePageOuterContainer}>
        <SearchSection
          variant="admin"
          tableListVariant="admin-remove"
          onRemoveFn={handleRemoveClick}
        />
      </div>

      <ConfirmDialog
        ref={dialogRef}
        title="Remove Item"
        message="Are you sure you want Delete this item from the list?"
        onConfirm={confirmAction}
      />
    </div>
  );
};

export default RemovePage;
