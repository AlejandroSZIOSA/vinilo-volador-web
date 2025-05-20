import { type ReactNode, type FC } from "react";

import { useAdmin_Ctx } from "../../store/admin-Context";

type TableItemBtnProps = {
  variant?: "remove" | "edit";
  children: ReactNode;
  itemId: string;
};

const TableItemBtn: FC<TableItemBtnProps> = ({ children, variant, itemId }) => {
  const { removeVinyl_Fn } = useAdmin_Ctx();

  //Remove an item
  function handleRemoveClick() {
    removeVinyl_Fn(itemId);
  }

  function handleEditClick() {
    console.log("Edit", itemId);
  }

  return (
    <>
      {variant === "remove" ? (
        <button onClick={handleRemoveClick}>{children}</button>
      ) : (
        <button onClick={handleEditClick}>{children}</button>
      )}
    </>
  );
};

export default TableItemBtn;
