import { type FC, useState } from "react";
import SearchBar from "../SearchBar";
import { RadioGroup } from "../RadioGroup";
import { SearchBar2 } from "../SearchBar2";
import type { RadioOption } from "../RadioGroup";

/* const dummyVinyls = [
  { id: "1", title: "Abbey Road" },
  { id: "2", title: "Dark Side of the Moon" },
  { id: "3", title: "Rumours" },
]; */

type Genre = "all" | "rock" | "jazz" | "pop";

const vinyls = [
  { id: "1", title: "Abbey Road", genre: "rock" },
  { id: "2", title: "Kind of Blue", genre: "jazz" },
  { id: "3", title: "Thriller", genre: "pop" },
  { id: "4", title: "The Wall", genre: "rock" },
];

const vinylsReal = [
  { id: "1", artist: "a1", album: "a2" },
  { id: "2", artist: "a2", album: "a3" },
  { id: "3", artist: "a3", album: "a4" },
  { id: "4", artist: "a4", album: "a5" },
  { id: "5", artist: "a5", album: "a6" },
  { id: "6", artist: "a6", album: "a7" },
];

const SearchSection: FC = () => {
  /*  const [query, setQuery] = useState("");

  const filtered = dummyVinyls.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase())
  ); */

  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState<Genre>("all");

  const filtered = vinyls.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genreFilter === "all" || v.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  const genreOptions: RadioOption<Genre>[] = [
    { label: "Alla", value: "all" },
    { label: "Rock", value: "rock" },
    { label: "Jazz", value: "jazz" },
    { label: "Pop", value: "pop" },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Mina Vinyls</h2>
      <SearchBar2
        value={search}
        onChange={setSearch}
        placeholder="Sök titel..."
      />

      <RadioGroup<Genre>
        name="genre"
        options={genreOptions}
        selectedValue={genreFilter}
        onChange={setGenreFilter}
      />

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
