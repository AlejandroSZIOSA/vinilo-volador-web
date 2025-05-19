import { type ReactNode } from "react";
import TableItemBtn from "./buttons/TableItemBtn";
import type { Vinyl } from "../types/shared";
import { USER_TH_KEYS } from "../utils/constants";

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
          <td>
            <TableItemBtn>Edit</TableItemBtn>
          </td>
        </>
      );
    default:
      return null;
  }
};

const TableList = ({ variant, filteredItems }: TableListProps) => {
  const adminEditThKeys: string[] = ["EDIT iMG"];

  let adminContentTh: ReactNode;

  if (variant === "admin-show") {
    adminContentTh = (
      <>
        <th>Created</th>
      </>
    );
  }

  if (variant === "admin-edit") {
    adminContentTh = (
      <>
        {adminEditThKeys.map((k, index) => (
          <th key={index}>{k}</th>
        ))}
      </>
    );
  }

  if (variant === "admin-remove") {
    adminContentTh = (
      <>
        <th>Remove img</th>
      </>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {USER_TH_KEYS.map((k, index) => (
            <th key={index}>{k}</th>
          ))}
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
        {filteredItems?.length === 0 && (
          <tr>
            <td>No Matches!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableList;
