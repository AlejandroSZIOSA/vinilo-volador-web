import type { Event, User, Vinyl } from "../types/shared";

export const USER: User = {
  id: "userTest",
  username: "user1",
  password: "123",
};

export const NEXT_EVENT: Event = {
  place: "some name place",
  date: new Date(),
  from: "20",
  to: "22",
};

export const VINYLS: Vinyl[] = [
  { id: "vinyl1", artist: "artist1", album: "album1" },
  { id: "vinyl2", artist: "artist2", album: "album2" },
  { id: "vinyl3", artist: "artist3", album: "album3" },
  //... more vinyls
];
