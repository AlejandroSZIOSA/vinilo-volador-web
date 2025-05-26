import { type FC, useState } from "react";
import SearchSection from "../../components/SearchSection";
import type { Vinyl } from "../../types/shared";
import EditItemForm from "../../components/admin/EditItemForm";
import { useAdmin_Ctx } from "../../store/admin-Context";
import { getCurrentDateTime } from "../../utils/functions";

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

  //CallBack Fn
  const handleSave = (updatedVinyl: typeof vinyl) => {
    setVinyl(updatedVinyl);
    updateVinyl_Fn(itemId, updatedVinyl);
    setUpdatedListDate_Fn(getCurrentDateTime());
  };

  function handleEdit(item: Vinyl) {
    const { id } = item;
    setVinyl(item);
    setItemId(id);
  }

  return (
    <div>
      <h1>Edit Vinyl</h1>
      <EditItemForm initialData={vinyl} onSave={handleSave} />
      <SearchSection
        variant="admin"
        tableListVariant="admin-edit"
        onEditFn={handleEdit}
      />
    </div>
  );
};

export default EditPage;
