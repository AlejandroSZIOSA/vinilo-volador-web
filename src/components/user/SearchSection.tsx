import { type FC, useState } from "react";
import SearchBar from "../SearchBar";

const dummyVinyls = [
  { id: "1", title: "Abbey Road" },
  { id: "2", title: "Dark Side of the Moon" },
  { id: "3", title: "Rumours" },
];
const SearchSection: FC = () => {
  const [query, setQuery] = useState("");

  const filtered = dummyVinyls.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Mina Vinyls</h2>
      <SearchBar value={query} onChange={setQuery} placeholder="Sök vinyl..." />

      <ul style={{ marginTop: "1rem" }}>
        {filtered.map((v) => (
          <li key={v.id}>{v.title}</li>
        ))}
        {filtered.length === 0 && <li>Inget matchande resultat.</li>}
      </ul>
    </div>
  );
};

export default SearchSection;
