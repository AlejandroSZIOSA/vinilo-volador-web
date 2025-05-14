import { type FC, type ReactNode, useState } from "react";
import { RadioGroup } from "../RadioGroup";
import { SearchBar2 } from "../SearchBar2";
import type { RadioOption } from "../RadioGroup";

type SearchBy = "artist" | "album" | "id";

const vinylsReal = [
  { id: "1", artist: "ar1", album: "al2" },
  { id: "2", artist: "ar2", album: "al2" },
  { id: "3", artist: "ar3", album: "al3" },
  { id: "4", artist: "ar4", album: "al4" },
];

const SearchSection2: FC = () => {
  const [search, setSearch] = useState("");
  const [searchByFilter, setSearchByFilter] = useState<SearchBy>("artist");

  const filteredArtist = vinylsReal.filter((v) => {
    const matchesSearch = v.artist.toLowerCase().includes(search.toLowerCase());
    const selectedOption = searchByFilter === "artist";
    return matchesSearch && selectedOption;
  });

  const filteredAlbum = vinylsReal.filter((v) => {
    const matchesSearch = v.album.toLowerCase().includes(search.toLowerCase());
    const selectedOption = searchByFilter === "album";
    return matchesSearch && selectedOption;
  });

  const filteredId = vinylsReal.filter((v) => {
    const matchesSearch = v.id.includes(search);
    const selectedOption = searchByFilter === "id";
    return matchesSearch && selectedOption;
  });

  //as prop
  const genreOptions: RadioOption<SearchBy>[] = [
    { label: "Artist", value: "artist" },
    { label: "Album", value: "album" },
    /*   { label: "Id", value: "id" }, */
  ];

  let content: ReactNode;

  if (searchByFilter === "artist") {
    content = (
      <ul style={{ marginTop: "1rem" }}>
        {filteredArtist.map((v) => (
          <li key={v.id}>
            {v.artist}
            {v.album}-{v.id}
          </li>
        ))}
        {filteredArtist.length === 0 && <li>No Matches!</li>}
      </ul>
    );
  }

  if (searchByFilter === "album") {
    content = (
      <ul style={{ marginTop: "1rem" }}>
        {filteredAlbum.map((v) => (
          <li key={v.id}>
            {v.artist} {v.album}-{v.id}
          </li>
        ))}
        {filteredAlbum.length === 0 && <li>No Matches!</li>}
      </ul>
    );
  }

  if (searchByFilter === "id") {
    content = (
      <ul style={{ marginTop: "1rem" }}>
        {filteredId.map((v) => (
          <li key={v.id}>
            {v.artist} {v.album}-{v.id}
          </li>
        ))}
        {filteredId.length === 0 && <li>No Matches!</li>}
      </ul>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Vinyls Inventory</h2>
      <SearchBar2
        value={search}
        onChange={setSearch}
        placeholder="Sök titel..." /* as prop */
      />

      <RadioGroup<SearchBy>
        name="genre"
        options={genreOptions}
        selectedValue={searchByFilter}
        onChange={setSearchByFilter}
      />
      {content}
    </div>
  );
};

export default SearchSection2;
