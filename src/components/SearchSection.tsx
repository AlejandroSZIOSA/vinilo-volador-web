import { useState } from "react";
import { RadioGroup } from "./searchbar/RadioGroup";
import { SearchBar } from "./searchbar/SearchBar";
import type { RadioOption } from "./searchbar/RadioGroup";

type SearchSectionProps = {
  variant: "user" | "admin";
};

type SearchBy = "artist" | "album" | "id";

const vinylsReal = [
  { id: "1", artist: "ar1", album: "al1" },
  { id: "2", artist: "ar2", album: "al2" },
  { id: "3", artist: "ar3", album: "al3" },
  { id: "4", artist: "ar4", album: "al4" },
];

const SearchSection = ({ variant }: SearchSectionProps) => {
  const [search, setSearch] = useState("");
  const [searchByFilter, setSearchByFilter] = useState<SearchBy>("artist");

  const filtered = vinylsReal.filter((v) => {
    if (searchByFilter === "artist") {
      const matchesSearch = v.artist
        .toLowerCase()
        .includes(search.toLowerCase());
      const selectedRadioOption = searchByFilter === "artist";
      return matchesSearch && selectedRadioOption;
    }
    if (searchByFilter === "album") {
      const matchesSearch = v.album
        .toLowerCase()
        .includes(search.toLowerCase());
      const selectedRadioOption = searchByFilter === "album";
      return matchesSearch && selectedRadioOption;
    }
    if (searchByFilter === "id") {
      const matchesSearch = v.id.includes(search);
      const selectedRadioOption = searchByFilter === "id";
      return matchesSearch && selectedRadioOption;
    }
  });

  //as prop

  let searchByOptions: RadioOption<SearchBy>[] = [];
  if (variant === "user") {
    searchByOptions = [
      { label: "Artist", value: "artist" },
      { label: "Album", value: "album" },
    ];
  }

  if (variant === "admin") {
    searchByOptions = [
      { label: "Artist", value: "artist" },
      { label: "Album", value: "album" },
      { label: "Id", value: "id" },
    ];
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      {variant === "user" ? <h2>Search Vinyl</h2> : <h2>Find Vinyl</h2>}
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="search title..." /* as prop */
      />

      <RadioGroup<SearchBy>
        name="searchBy"
        options={searchByOptions}
        selectedValue={searchByFilter}
        onChange={setSearchByFilter}
      />
      <ul style={{ marginTop: "1rem" }}>
        {filtered.map((v) => (
          <li key={v.id}>
            {v.artist} {v.album}-{v.id}
          </li>
        ))}
        {filtered.length === 0 && <li>No Matches!</li>}
      </ul>
    </div>
  );
};

export default SearchSection;
