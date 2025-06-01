import { type FC } from "react";
import CreateEventForm from "../../components/admin/CreateEventForm";
import classes from "./Event.module.css";

const EventPage: FC = () => {
  return (
    <div className={classes.eventPageContainer}>
      <h1> Create "A Pick Up Point"</h1>
      <div className={classes.formOuterContainer}>
        <CreateEventForm />
      </div>
    </div>
  );
};

export default EventPage;
