import type { Event, User, Vinyl } from "../types/shared";

export const USER: User = {
  id: "userTest",
  alias: "user1",
  password: "123",
};

export const NEXT_EVENT: Event = {
  place: "some name place",
  date: new Date(),
  from: "20",
  to: "22",
};

export const VINYLS: Vinyl[] = [
  {
    id: "vinyl1",
    artist: "artist1",
    album: "album1",
    price: 10,
    createdAt: "2022-01-01",
  },
  {
    id: "vinyl2",
    artist: "artist2",
    album: "album2",
    price: 15,
    createdAt: "2022-02-01",
  },
  {
    id: "vinyl3",
    artist: "artist3",
    album: "album3",
    price: 20,
    createdAt: "2022-03-01",
  },
  //... more vinyls
];
