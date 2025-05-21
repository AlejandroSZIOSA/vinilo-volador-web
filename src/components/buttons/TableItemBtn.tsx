import { type ReactNode, type FC } from "react";
import type { Vinyl } from "../../types/shared";

type TableItemBtnProps = {
  variant?: "remove" | "edit";
  children: ReactNode;
  item: Vinyl;
  onRemoveFn?: (id: string) => void; // for admin-remove variant only
  onEditFn?: (item: Vinyl) => void; // for admin-edit variant only
};

const TableItemBtn: FC<TableItemBtnProps> = ({
  children,
  variant,
  item,
  onRemoveFn, // Call Back FN  X 4
  onEditFn, // Call Back FN  X 4
}) => {
  const { id } = item;
  return (
    <>
      {variant === "remove" ? (
        <button onClick={() => onRemoveFn?.(id)}>{children}</button>
      ) : (
        <button onClick={() => onEditFn?.(item)}>{children}</button>
      )}
    </>
  );
};

export default TableItemBtn;
