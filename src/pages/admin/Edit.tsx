import { type FC, useState } from "react";
import SearchSection from "../../components/SearchSection";
import type { Vinyl } from "../../types/shared";
import EditItemForm from "../../components/admin/EditItemForm";
import { useAdmin_Ctx } from "../../store/admin-Context";

const EditPage: FC = () => {
  const [itemId, setItemId] = useState<string>("");
  const [vinyl, setVinyl] = useState<Vinyl>({
    id: "",
    artist: "",
    album: "",
    price: 0,
    createdAt: "",
  });

  const { updateVinyl_Fn } = useAdmin_Ctx();

  const handleSave = (updatedVinyl: typeof vinyl) => {
    setVinyl(updatedVinyl);
    updateVinyl_Fn(itemId, updatedVinyl);
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
