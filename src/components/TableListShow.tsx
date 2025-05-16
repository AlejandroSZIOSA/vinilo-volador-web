import { type ReactNode } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";

type TableListShowProps = {
  variant: "user-latest" | "admin-latest";
};

const TableListShow = ({ variant }: TableListShowProps) => {
  const { vinyls_ } = useAdmin_Ctx();
  const keys = Object.keys(vinyls_?.[0] || {});

  keys[0] = "artist";
  keys[1] = "album";
  keys[2] = "price";
  keys[3] = "id";
  keys[4] = "createdAt";

  let contentTh: ReactNode;

  if (variant === "user-latest") {
    contentTh = (
      <tr>
        <th>Artist</th>
        <th>Album</th>
        <th>Price</th>
        <th>ID</th>
      </tr>
    );
  }

  if (variant === "admin-latest") {
    contentTh = (
      <tr>
        {keys.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    );
  }

  console.log(keys);
  return (
    <table>
      <thead>{contentTh}</thead>
      <tbody>
        {vinyls_?.map((v) => (
          <tr key={v.id}>
            <td>{v.artist}</td>
            <td>{v.album}</td>
            <td>{v.price}</td>
            <td>{v.id}</td>
            {variant === "admin-latest" && <td>{v.createdAt}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableListShow;
