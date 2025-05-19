import { type ReactNode } from "react";
import { useAdmin_Ctx } from "../store/admin-Context";
import { BASE_TH_KEYS, ADMIN_TH_KEYS, USER_TH_KEYS } from "../utils/constants";

type TableListShowProps = {
  variant: "user-latest" | "admin-latest";
};

const TableListShow = ({ variant }: TableListShowProps) => {
  const { vinyls_ } = useAdmin_Ctx();

  let contentTh: ReactNode;

  if (variant === "user-latest") {
    contentTh = (
      <tr>
        {USER_TH_KEYS.map((k, index) => (
          <th key={index}>{k}</th>
        ))}
      </tr>
    );
  }

  if (variant === "admin-latest") {
    contentTh = (
      <tr>
        {BASE_TH_KEYS.map((k) => (
          <th key={k}>{k}</th>
        ))}
        {ADMIN_TH_KEYS.map((k) => (
          <th key={k}>{k}</th>
        ))}
      </tr>
    );
  }
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
