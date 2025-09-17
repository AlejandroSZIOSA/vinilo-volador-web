import { type FC, useState } from "react";
import SearchSection from "../../components/SearchSection";
import type { Vinyl } from "../../types/shared";
import EditItemForm from "../../components/admin/EditItemForm";
import { useAdmin_Ctx } from "../../store/admin-Context";
import { getCurrentDateTime } from "../../utils/functions";
import classes from "./Edit.module.css";

//TODO: Fix Change price type to string
const EditPage: FC = () => {
  const [itemId, setItemId] = useState<string>("");
  const [vinyl, setVinyl] = useState<Vinyl>({
    id: "",
    artist: "",
    album: "",
    price: 0,
    createdAt: "",
  });

  const { updateVinyl_Fn, setUpdatedListDate_Fn } = useAdmin_Ctx();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  //CallBack Fn Edit The Item
  const handleSave = (updatedVinyl: typeof vinyl) => {
    setVinyl(updatedVinyl);
    updateVinyl_Fn(itemId, updatedVinyl);
    setUpdatedListDate_Fn(getCurrentDateTime());
  };

  function handleEdit(item: Vinyl) {
    const { id } = item;
    setVinyl(item);
    setItemId(id);
    setIsDisabled(false); //Disable the form when iteration starts
  }

  return (
    <div className={classes.editPageContainer}>
      <div className={classes.editSectionContainer}>
        <h1>Edit</h1>
        <div className={classes.formEditItemOuterContainer}>
          <EditItemForm
            initialData={vinyl}
            onSave={handleSave}
            isDisabled={isDisabled}
          />
        </div>
      </div>

      <div className={classes.searchSectionEditOuterContainer}>
        <SearchSection
          variant="admin"
          tableListVariant="admin-edit"
          onEditFn={handleEdit}
        />
      </div>
    </div>
  );
};

export default EditPage;
