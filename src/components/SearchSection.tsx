import { useState, type FC } from "react";
import { RadioGroup } from "./searchbar/RadioGroup";
import { SearchBar } from "./searchbar/SearchBar";
import type { RadioOption } from "./searchbar/RadioGroup";
import TableListFiltered from "./TableListFiltered";
import { useAdmin_Ctx } from "../store/admin-Context";
import type { Vinyl } from "../types/shared";
import classes from "./SearchSection.module.css";

type SearchSectionProps = {
  variant: "user" | "admin";
  tableListVariant:
    | "admin-show"
    | "admin-remove"
    | "admin-add"
    | "admin-edit"
    | "user";
  onRemoveFn?: (id: string) => void;
  onEditFn?: (item: Vinyl) => void;
};

type SearchBy = "artist" | "album" | "id";

const SearchSection: FC<SearchSectionProps> = ({
  variant,
  tableListVariant,
  onRemoveFn,
  onEditFn,
}) => {
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
    <div className={classes.container}>
      {/* {variant === "user" ? <h2>Search Vinyl</h2> : <h2>Find Vinyl</h2>} */}
      <div>
        <SearchBar value={search} onChange={setSearch} />
        {/*  RadioGroup Component using generic types */}
        <RadioGroup<SearchBy>
          name="searchBy"
          options={searchByOptions}
          selectedValue={searchByFilter}
          onChange={setSearchByFilter}
        />
      </div>
      <div className={classes.tableContainer}>
        <TableListFiltered
          variant={tableListVariant}
          filteredItems={filtered}
          onRemoveFn={onRemoveFn}
          onEditFn={onEditFn}
        />
      </div>
    </div>
  );
};

export default SearchSection;
