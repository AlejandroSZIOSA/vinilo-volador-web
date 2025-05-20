import { useRef, type FormEvent, type FC } from "react";
import type { Vinyl } from "../../types/shared";

type CreateFormProps = {
  handleCreateItemFn: (newVinyl: Vinyl) => void;
};

const CreateItemForm: FC<CreateFormProps> = ({ handleCreateItemFn }) => {
  const artist = useRef<HTMLInputElement>(null);
  const album = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

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
    handleCreateItemFn(newVinyl);
  }

  const handleOpenDialog = (e: React.FormEvent) => {
    e.preventDefault();
    dialogRef.current?.showModal();
  };

  const handleConfirmSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formEvent = new Event(
      "submit"
    ) as unknown as FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
    dialogRef.current?.close();
  };

  const handleCancel = () => {
    dialogRef.current?.close();
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
      <dialog ref={dialogRef} className="rounded-md p-6 shadow-lg">
        <p>Are you sure you want to submit this form?</p>
        <div className="mt-4 flex gap-4 justify-end">
          <button
            onClick={handleConfirmSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Yes, Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default CreateItemForm;
