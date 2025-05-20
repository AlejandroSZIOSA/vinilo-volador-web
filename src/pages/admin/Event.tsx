import { type FC } from "react";
import CreateEventForm from "../../components/admin/CreateEventForm";

const EventPage: FC = () => {
  return (
    <div>
      <h1> Next Pick up place</h1>
      <CreateEventForm />
    </div>
  );
};

export default EventPage;
