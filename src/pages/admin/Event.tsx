import { type FC } from "react";
import CreateEventForm from "../../components/admin/CreateEventForm";
import classes from "./Event.module.css";

const EventPage: FC = () => {
  return (
    <div className={classes.container}>
      <h1> Next Pick Up Place</h1>
      <div className={classes.formOuterContainer}>
        <CreateEventForm />
      </div>
    </div>
  );
};

export default EventPage;
