import { type ReactNode, type FC } from "react";
import TableItemBtn from "./buttons/TableItemBtn";
import type { Vinyl } from "../types/shared";
import { USER_TH_KEYS } from "../utils/constants";
import classes from "./TableListFiltered.module.css";

type TableListProps = {
  variant: "admin-show" | "admin-remove" | "admin-add" | "admin-edit" | "user";
  filteredItems?: Vinyl[];
  onRemoveFn?: (id: string) => void;
  onEditFn?: (item: Vinyl) => void;
};

//Component
const AdminContentTd = (
  createdAt: string,
  variant: string,
  item: Vinyl,
  onRemoveFn?: (id: string) => void,
  onEditFn?: (item: Vinyl) => void
) => {
  switch (variant) {
    case "admin-show":
      return <td>{createdAt}</td>;
    case "admin-remove":
      return (
        <td>
          <TableItemBtn variant="remove" item={item} onRemoveFn={onRemoveFn}>
            Remove
          </TableItemBtn>
        </td>
      );

    case "admin-edit":
      return (
        <td>
          <TableItemBtn variant="edit" item={item} onEditFn={onEditFn}>
            Edit
          </TableItemBtn>
        </td>
      );
    default:
      return null;
  }
};

//Component
const TableListFiltered: FC<TableListProps> = ({
  variant,
  filteredItems,
  onRemoveFn,
  onEditFn,
}) => {
  let adminContentTh: ReactNode;

  if (variant === "admin-show") {
    adminContentTh = <th>Created</th>;
  }

  if (variant === "admin-edit") {
    adminContentTh = <th>Edit</th>;
  }

  if (variant === "admin-remove") {
    adminContentTh = <th>Remove</th>;
  }

  return (
    <table className={classes.container}>
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
            {variant !== "user" &&
              AdminContentTd(v.createdAt, variant, v, onRemoveFn, onEditFn)}
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

export default TableListFiltered;
