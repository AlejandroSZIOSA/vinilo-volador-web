import { type ChangeEvent } from "react";
import classes from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search Vinyl title...",
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      name="search"
      onChange={handleChange}
      placeholder={placeholder}
      className={classes.searchBarInput}
    />
  );
};
