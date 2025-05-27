import type { Event, Admin, Vinyl } from "../types/shared";

export const ADMIN: Admin = {
  id: "adminTest",
  alias: "admin",
  password: "123",
};

export const NEXT_EVENT: Event = {
  place: "some name place",
  address: "some address",
  date: new Date().toISOString(),
  from: "20",
  to: "22",
};

export const VINYLS: Vinyl[] = [
  {
    id: "1",
    artist: "Iron Maiden",
    album: "The number of the Best",
    price: 100,
    createdAt: "2022-01-01",
  },
  {
    id: "2",
    artist: "U2",
    album: "All That You Can't Leave Behind",
    price: 150,
    createdAt: "2022-02-01",
  },
  {
    id: "3",
    artist: "Pink Floyd",
    album: "The wall",
    price: 200,
    createdAt: "2022-03-01",
  },
  {
    id: "4",
    artist: "Black Sabbath",
    album: "Heaven and Hell",
    price: 100,
    createdAt: "2022-03-01",
  },
  {
    id: "5",
    artist: "Pink Floyd",
    album: "The wall",
    price: 200,
    createdAt: "2022-03-01",
  },
  {
    id: "6",
    artist: "Black Sabbath",
    album: "Heaven and Hell",
    price: 100,
    createdAt: "2022-03-01",
  },
  //... more vinyls
];
