import {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  useRef,
} from "react";
import type { Vinyl } from "../../types/shared";

import ConfirmDialog, { type ConfirmDialogRef } from "./ConfirmDialog";

type EditFormProps = {
  initialData: Vinyl;
  onSave: (updatedVinyl: Vinyl) => void;
  onCancel?: () => void;
};

export default function EditItemForm({
  initialData,
  onSave,
  onCancel,
}: EditFormProps) {
  const [form, setForm] = useState<Vinyl>(initialData);
  const dialogRef = useRef<ConfirmDialogRef>(null); //Imported type for ConfirmDialogRef

  useEffect(() => {
    setForm(initialData); // Update if new data is passed in
  }, [initialData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  //Confirmation dialog Fns

  const handleOpenDialog = (e: FormEvent) => {
    e.preventDefault();
    dialogRef.current?.open();
  };

  const confirmAction = () => {
    const formEvent = new Event(
      "submit"
    ) as unknown as FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
  };

  return (
    <>
      <form onSubmit={handleOpenDialog} className="space-y-4">
        <div>
          <label className="block">Artist</label>
          <input name="artist" value={form.artist} onChange={handleChange} />
        </div>

        <div>
          <label className="block">Album</label>
          <input name="album" value={form.album} onChange={handleChange} />
        </div>
        <div>
          <label className="block">Price</label>
          <input name="price" value={form.price} onChange={handleChange} />
        </div>

        <div className="flex gap-2">
          <button type="submit">Save</button>
          {onCancel && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
      <ConfirmDialog
        ref={dialogRef}
        title="Edit Vinyl"
        message="Are you sure you want Edit this item?"
        onConfirm={confirmAction}
      />
    </>
  );
}
