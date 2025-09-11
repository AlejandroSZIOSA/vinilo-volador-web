import { useRef, type FormEvent, type FC } from "react";
import type { Vinyl } from "../../types/shared";
import ConfirmDialog, { type ConfirmDialogRef } from "./ConfirmDialog";
import { useAdmin_Ctx } from "../../store/admin-Context";
import { getCurrentDateTime } from "../../utils/functions";
import ButtonSubmitForm from "../buttons/ButtonSubmitForm";
import classes from "./CreateItemForm.module.css";

function generateRandomNumericId() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

const CreateItemForm: FC = () => {
  const { addVinyl_Fn, setUpdatedListDate_Fn } = useAdmin_Ctx();

  const artist = useRef<HTMLInputElement>(null);
  const album = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<ConfirmDialogRef>(null); //Imported type for ConfirmDialogRef

  //NOTE: Can use a library like "nanoid" instead

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredArtist = artist.current!.value;
    const enteredAlbum = album.current!.value;
    const enteredPrice = parseInt(price.current!.value);
    const dateToday = new Date();
    const created = dateToday.toLocaleDateString("en-CA");

    const newVinyl: Vinyl = {
      id: generateRandomNumericId().toString(),
      artist: enteredArtist,
      album: enteredAlbum,
      price: enteredPrice,
      createdAt: created,
    };
    addVinyl_Fn(newVinyl);
    setUpdatedListDate_Fn(getCurrentDateTime());
  }

  const handleOpenDialog = (e: FormEvent) => {
    e.preventDefault();
    dialogRef.current?.open();
  };

  const confirmAction = () => {
    const formEvent = new Event(
      "submit"
    ) as unknown as FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
    formRef.current?.reset(); //Clear the form
  };

  //DONE: Clear Form after Confirmation
  const cancelAction = () => {
    formRef.current?.reset(); //Clear the form
  };

  return (
    <>
      <form
        onSubmit={handleOpenDialog}
        className={classes.createFormContainer}
        ref={formRef}
      >
        <div>
          <label htmlFor="artist">Artist</label>
          <input
            placeholder="artist"
            id="artist"
            type="text"
            name="artist"
            maxLength={30}
            ref={artist}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album</label>
          <input
            placeholder="album"
            id="album"
            type="text"
            name="album"
            maxLength={30}
            ref={album}
            required
          />
        </div>

        <div className={classes.priceContainer}>
          <label htmlFor="price">Price</label>
          <input
            placeholder="price"
            id="price"
            type="number"
            name="price"
            maxLength={3}
            ref={price}
            required
          />
        </div>
        <div className={classes.submitBtnContainer}>
          <ButtonSubmitForm type="submit">Add</ButtonSubmitForm>
        </div>
      </form>
      <ConfirmDialog
        ref={dialogRef}
        title="Add new Item"
        message="Are you sure you want Add this item to the list?"
        onConfirm={confirmAction}
        onCancel={cancelAction}
      />
    </>
  );
};

export default CreateItemForm;
