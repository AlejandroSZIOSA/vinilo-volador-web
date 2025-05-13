import { type ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Sök...",
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "100%",
        maxWidth: "400px",
      }}
    />
  );
};

export default SearchBar;
