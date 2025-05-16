import { type ReactNode } from "react";
import TableItemBtn from "./buttons/TableItemBtn";
import type { Vinyl } from "../types/shared";

type TableListProps = {
  variant: "admin-show" | "admin-remove" | "admin-add" | "admin-edit" | "user";
  filteredItems?: Vinyl[];
};

const AdminContentTd = (createdAt: string, variant: string) => {
  switch (variant) {
    case "admin-show":
      return (
        <>
          <td>{createdAt}</td>
        </>
      );
    case "admin-remove":
      return (
        <>
          <td>
            <TableItemBtn>Remove</TableItemBtn>
          </td>
        </>
      );
    case "admin-add":
      return (
        <>
          <td>
            <TableItemBtn>Add</TableItemBtn>
          </td>
        </>
      );
    case "admin-edit":
      return (
        <>
          <td>{createdAt}</td>
          <td>
            <TableItemBtn>Edit</TableItemBtn>
          </td>
        </>
      );
    default:
      return null;
  }
};

//TODO: passar como prop una lista filtrada de vinilos
const TableList = ({ variant, filteredItems }: TableListProps) => {
  let adminContentTh: ReactNode;

  if (variant === "admin-show") {
    //TODO: extraer valores del string variable
    adminContentTh = (
      <>
        <th>Created</th>
      </>
    );
  }

  if (variant === "admin-remove") {
    adminContentTh = (
      <>
        <th>{variant}</th>
      </>
    );
  }

  if (variant === "admin-edit") {
    adminContentTh = (
      <>
        <th>{variant}</th>
      </>
    );
  }

  /* console.log(vinyls_); */
  return (
    <table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Album</th>
          <th>Price</th>
          <th>Id</th>
          {adminContentTh}
        </tr>
      </thead>
      <tbody>
        {filteredItems?.map((v) => (
          <tr key={v.id}>
            <td>{v.artist}</td>
            <td>{v.album}</td>
            <td>{v.price}</td>
            <td>{v.id}</td>
            {variant !== "user" && AdminContentTd(v.createdAt, variant)}
          </tr>
        ))}
        {filteredItems?.length === 0 && <li>No Matches!</li>}
      </tbody>
    </table>
  );
};

export default TableList;
