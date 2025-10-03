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
  placeholder = "Search Vinyl",
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classes.searchBarContainer}>
      <input
        className={classes.searchBarInput}
        type="text"
        value={value}
        name="search"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
