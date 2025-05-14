export type Event = {
  place: string;
  date: Date;
  from: string;
  to: string;
};
export type User = {
  id: string;
  username: string;
  password: "123" | "234";
};

export type Vinyl = {
  id: string;
  artist: string;
  album: string;
  price: number;
};
