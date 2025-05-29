import { useRef, forwardRef, useImperativeHandle } from "react";
import classes from "./ConfirmDialog.module.css";

type ConfirmDialogProps = {
  title?: string;
  message?: string;
  onConfirm: () => void;
};

export type ConfirmDialogRef = {
  open: () => void;
  close: () => void;
};

const ConfirmDialog = forwardRef<ConfirmDialogRef, ConfirmDialogProps>(
  ({ title = "Confirm", message = "Are you sure?", onConfirm }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }));

    const handleConfirm = () => {
      onConfirm();
      dialogRef.current?.close();
    };

    const handleCancel = () => {
      dialogRef.current?.close();
    };

    return (
      <dialog ref={dialogRef} className={classes.container}>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
        </div>
      </dialog>
    );
  }
);

export default ConfirmDialog;
