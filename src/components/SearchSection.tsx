import { useState } from "react";
import { RadioGroup } from "./searchbar/RadioGroup";
import { SearchBar } from "./searchbar/SearchBar";
import type { RadioOption } from "./searchbar/RadioGroup";
import TableList from "./tableList";
import { useAdmin_Ctx } from "../store/admin-Context";

type SearchSectionProps = {
  variant: "user" | "admin";
  tableListVariant:
    | "admin-show"
    | "admin-remove"
    | "admin-add"
    | "admin-edit"
    | "user";
};

type SearchBy = "artist" | "album" | "id";

const SearchSection = ({ variant, tableListVariant }: SearchSectionProps) => {
  const { vinyls_ } = useAdmin_Ctx();

  const [search, setSearch] = useState("");
  const [searchByFilter, setSearchByFilter] = useState<SearchBy>("artist");

  const filtered = vinyls_?.filter((v) => {
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

      <TableList variant={tableListVariant} filteredItems={filtered} />
      {/* <ul style={{ marginTop: "1rem" }}>
        {filtered.map((v) => (
          <li key={v.id}>
            {v.artist} {v.album}-{v.id}
          </li>
        ))}
        {filtered.length === 0 && <li>No Matches!</li>}
      </ul> */}
    </div>
  );
};

export default SearchSection;
