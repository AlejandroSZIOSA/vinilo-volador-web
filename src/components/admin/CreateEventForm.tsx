import { useRef, type FC, type FormEvent } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";
import ConfirmDialog, { type ConfirmDialogRef } from "./ConfirmDialog";
import { getCurrentDateTime } from "../../utils/functions";

const CreateEventForm: FC = () => {
  const { setNextEvent_Fn, setUpdatedListDate_Fn } = useAdmin_Ctx();

  const place = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const timeFrom = useRef<HTMLInputElement>(null);
  const timeTo = useRef<HTMLInputElement>(null);

  const dialogRef = useRef<ConfirmDialogRef>(null); //Imported type for ConfirmDialogRef

  function handleCreateEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredPlace = place.current!.value;
    const enteredAddress = address.current!.value;
    const enteredDate = date.current!.value;
    const enteredTimeFrom = timeFrom.current!.value;
    const enteredTimeTo = timeTo.current!.value;
    const newEvent = {
      place: enteredPlace,
      address: enteredAddress,
      date: enteredDate,
      from: enteredTimeFrom,
      to: enteredTimeTo,
    };
    setNextEvent_Fn(newEvent);
    setUpdatedListDate_Fn(getCurrentDateTime());
  }

  //Dialog functions for creating new Event
  const handleOpenDialog = (e: FormEvent) => {
    e.preventDefault();
    dialogRef.current?.open();
  };

  const confirmAction = () => {
    const formEvent = new Event(
      "submit"
    ) as unknown as FormEvent<HTMLFormElement>;
    handleCreateEvent(formEvent);
  };

  return (
    <div>
      <form onSubmit={handleOpenDialog}>
        <label>Place</label>
        <input
          placeholder="place"
          id="place"
          type="text"
          name="place"
          ref={place}
          required
        />
        <label>Address</label>
        <input
          placeholder="address"
          id="address"
          type="text"
          name="address"
          maxLength={20}
          ref={address}
        />
        <label>Date</label>
        <input
          placeholder="date"
          id="date"
          type="date"
          name="date"
          ref={date}
        />

        <h2>Time</h2>
        <label>From</label>
        <input
          type="time"
          id="timeFrom"
          name="timeFrom"
          min="09:00"
          max="17:00"
          ref={timeFrom}
        />
        <label>To</label>
        <input
          type="time"
          id="timeTo"
          name="timeTo"
          min="09:00"
          max="17:00"
          ref={timeTo}
        />
        <button type="submit">Create</button>
      </form>
      <ConfirmDialog
        ref={dialogRef}
        title="Create Event"
        message="Are you sure you want to Create this item?"
        onConfirm={confirmAction}
      />
    </div>
  );
};

export default CreateEventForm;
