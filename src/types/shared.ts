export type Event = {
  place: string;
  address: string;
  date: string;
  from: string;
  to: string;
};

export type Admin = {
  id: string;
  alias: string;
  password: "12" | "123";
};

export type Vinyl = {
  id: string;
  artist: string;
  album: string;
  price: number;
  createdAt: string;
};
