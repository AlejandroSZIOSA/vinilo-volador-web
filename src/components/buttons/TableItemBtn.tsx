import { type ReactNode, type FC } from "react";

type TableItemBtnProps = {
  variant?: "remove" | "edit";
  children: ReactNode;
  itemId: string;
  onRemoveFn?: (id: string) => void; // for admin-remove variant only
};

const TableItemBtn: FC<TableItemBtnProps> = ({
  children,
  variant,
  itemId,
  onRemoveFn,
}) => {
  /*  const { removeVinyl_Fn } = useAdmin_Ctx(); */

  //Remove an item
  /* function handleRemoveClick() {
    removeVinyl_Fn(itemId);
  } */

  function handleEditClick() {
    console.log("Edit", itemId);
  }

  return (
    <>
      {variant === "remove" ? (
        <button onClick={() => onRemoveFn?.(itemId)}>{children}</button>
      ) : (
        <button onClick={handleEditClick}>{children}</button>
      )}
    </>
  );
};

export default TableItemBtn;
