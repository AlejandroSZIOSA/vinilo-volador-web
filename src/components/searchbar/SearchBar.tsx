import { type ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search title...",
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
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "1rem",
      }}
    />
  );
};
