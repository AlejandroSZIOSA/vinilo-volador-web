import { useRef, type FormEvent, type FC } from "react";
import type { Vinyl } from "../../types/shared";
import ConfirmDialog, { type ConfirmDialogRef } from "./ConfirmDialog";
import { useAdmin_Ctx } from "../../store/admin-Context";

const CreateItemForm: FC = () => {
  const { addVinyl_Fn } = useAdmin_Ctx();

  const artist = useRef<HTMLInputElement>(null);
  const album = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const dialogRef = useRef<ConfirmDialogRef>(null); //Imported type for ConfirmDialogRef

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredArtist = artist.current!.value;
    const enteredAlbum = album.current!.value;
    const enteredPrice = parseInt(price.current!.value);

    const newVinyl: Vinyl = {
      id: crypto.randomUUID().toString(),
      artist: enteredArtist,
      album: enteredAlbum,
      price: enteredPrice,
      createdAt: new Date().toISOString(),
    };
    addVinyl_Fn(newVinyl);
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
  };

  return (
    <div>
      <form onSubmit={handleOpenDialog}>
        <label>Artist</label>
        <input
          placeholder="artist"
          id="artist"
          type="text"
          name="artist"
          ref={artist}
          required
        />
        <label>Album</label>
        <input
          placeholder="album"
          id="album"
          type="text"
          name="album"
          maxLength={20}
          ref={album}
          required
        />

        <label>Price</label>
        <input
          placeholder="price"
          id="price"
          type="number"
          name="price"
          maxLength={20}
          ref={price}
          required
        />

        <div style={{ paddingTop: "20px" }}>
          <button type="submit">Create</button>
        </div>
      </form>
      <ConfirmDialog
        ref={dialogRef}
        title="Add new Vinyl"
        message="Are you sure you want Add this item to the list?"
        onConfirm={confirmAction}
      />
    </div>
  );
};

export default CreateItemForm;
