import { type ReactNode } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";
import TableItemBtn from "./buttons/TableItemBtn";
import type { Vinyl } from "../types/shared";

type TableListProps = {
  variant: "admin-show" | "admin-remove" | "admin-add" | "user";
  filteredItems?: Vinyl[];
};

const AdminContentTd = (id: string, variant: string) => {
  switch (variant) {
    case "admin-show":
      return (
        <>
          <td>{id}</td>
        </>
      );
    case "admin-remove":
      return (
        <>
          <td>{id}</td>
          <td>
            <TableItemBtn>Remove</TableItemBtn>
          </td>
        </>
      );
    case "admin-add":
      return (
        <>
          <td>{id}</td>
          <td>
            <TableItemBtn>Add</TableItemBtn>
          </td>
        </>
      );
    default:
      return null;
  }
};

//TODO: passar como prop una lista filtrada de vinilos
const TableList = ({ variant, filteredItems }: TableListProps) => {
  const { vinyls_ } = useAdmin_Ctx();

  let showAllVinyls: ReactNode;
  let contentAdminTh: ReactNode;

  if (variant !== "user") {
    //TODO: extraer valores del string variable
    contentAdminTh = (
      <>
        <th>Id</th>
        <th>{variant}</th>
      </>
    );
  }

  if (variant === "admin-show") {
    showAllVinyls = (
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {vinyls_?.map((v) => (
            <tr key={v.id}>
              <td>{v.artist}</td>
              <td>{v.album}</td>
              <td>{v.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  console.log(vinyls_);
  return (
    <>
      {variant === "admin-show" ? (
        showAllVinyls
      ) : (
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Album</th>
              <th>Price</th>
              {contentAdminTh}
            </tr>
          </thead>
          <tbody>
            {filteredItems?.map((v) => (
              <tr key={v.id}>
                <td>{v.artist}</td>
                <td>{v.album}</td>
                <td>{v.price}</td>
                {variant !== "user" && AdminContentTd(v.id, variant)}
              </tr>
            ))}
            {filteredItems?.length === 0 && <li>No Matches!</li>}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableList;
