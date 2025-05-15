import { type FC, useRef, type FormEvent } from "react";
import type { Vinyl } from "../../types/shared";

const CreateForm: FC = () => {
  const artist = useRef<HTMLInputElement>(null); /* fix */
  const album = useRef<HTMLInputElement>(null); /* fix */
  const price = useRef<HTMLInputElement>(null); /* fix */

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
    };
    handleCreateItem(newVinyl);
  }

  function handleCreateItem(newVinyl: Vinyl) {
    console.log(newVinyl);
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default CreateForm;
