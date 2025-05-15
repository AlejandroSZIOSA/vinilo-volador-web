import { type ReactNode } from "react";

type TableItemBtnProps = {
  children: ReactNode;
};

const TableItemBtn = ({ children }: TableItemBtnProps) => {
  return <button>{children}</button>;
};

export default TableItemBtn;
