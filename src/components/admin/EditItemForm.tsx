import {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  useRef,
} from "react";
import type { Vinyl } from "../../types/shared";
import ConfirmDialog, { type ConfirmDialogRef } from "./ConfirmDialog";
import ButtonSubmitForm from "../buttons/ButtonSubmitForm";
import classes from "./EditItemForm.module.css";

type EditFormProps = {
  initialData: Vinyl;
  onSave: (updatedVinyl: Vinyl) => void;
  isDisabled: boolean;
  /*  onCancel?: () => void; */
};

export default function EditItemForm({
  initialData,
  onSave,
  isDisabled,
}: /* onCancel, */
EditFormProps) {
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
      <form onSubmit={handleOpenDialog} className={classes.editItemForm}>
        <div>
          <label htmlFor="artist">Artist</label>
          <input
            placeholder="artist"
            id="artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div>
          <label htmlFor="album">Album</label>
          <input
            placeholder="album"
            id="album"
            name="album"
            value={form.album}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div className={classes.priceContainer}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            disabled={isDisabled}
          />
          <span>$</span>
        </div>

        <div className={classes.submitBtnOuterContainer}>
          <ButtonSubmitForm type="submit" disabled={isDisabled}>
            Done
          </ButtonSubmitForm>
        </div>
      </form>
      <ConfirmDialog
        ref={dialogRef}
        title="Edit Item"
        message="Are you sure you want Edit this item?"
        onConfirm={confirmAction}
      />
    </>
  );
}
