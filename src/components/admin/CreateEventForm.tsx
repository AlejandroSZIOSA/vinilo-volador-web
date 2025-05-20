import { useRef, type FC, type FormEvent, type MouseEvent } from "react";
import { useAdmin_Ctx } from "../../store/admin-Context";

const CreateEventForm: FC = () => {
  const { setNextEvent_Fn } = useAdmin_Ctx();

  const place = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const timeFrom = useRef<HTMLInputElement>(null);
  const timeTo = useRef<HTMLInputElement>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

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
    console.log("Event created:", newEvent);
  }

  //Dialog for creating new event
  const handleOpenDialog = (e: FormEvent) => {
    e.preventDefault();
    dialogRef.current?.showModal();
  };

  const handleConfirmSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formEvent = new Event(
      "submit"
    ) as unknown as FormEvent<HTMLFormElement>;
    handleCreateEvent(formEvent);
    dialogRef.current?.close();
  };

  const handleCancel = () => {
    dialogRef.current?.close();
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
          /* value="13:30" */
          min="09:00"
          max="17:00"
          ref={timeFrom}
        />
        <label>To</label>
        <input
          type="time"
          id="timeTo"
          name="timeTo"
          /*  value="13:30" */
          min="09:00"
          max="17:00"
          ref={timeTo}
        />
        <button type="submit">Create</button>
      </form>
      <dialog ref={dialogRef} className="rounded-md p-6 shadow-lg">
        <p>Are you sure you want to submit this form?</p>
        <div className="mt-4 flex gap-4 justify-end">
          <button
            onClick={handleConfirmSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Yes, Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default CreateEventForm;
