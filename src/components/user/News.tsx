import { type FC } from "react";
import TableListShow from "../TableListShow";
import { useAdmin_Ctx } from "../../store/admin-Context";
import classes from "./News.module.css";

const News: FC = () => {
  const { next_Event } = useAdmin_Ctx();
  return (
    <section className={classes.newsSectionContainer}>
      <h1>Next Pick up place</h1>
      <div className={classes.newPlaceContainer}>
        <div className={classes.newPlaceInnerContainer}>
          <div>
            <p>
              <strong>Place:</strong> {next_Event?.place}
            </p>
            <p>
              <strong>Address:</strong> {next_Event?.address}
            </p>
            <p>
              <strong>Date:</strong> {next_Event?.date}
            </p>
          </div>
          <p style={{ textAlign: "center" }}>
            <strong>Time</strong>
          </p>
          <div className={classes.timeContainer}>
            <p>
              <strong>From:</strong> {next_Event?.from}
            </p>
            <p>
              <strong>To:</strong>
              {next_Event?.to}
            </p>
          </div>
        </div>
      </div>
      <h1>Latest Added Items</h1>
      <div className={classes.tableShowOuterContainer}>
        <TableListShow variant="user-latest" />
      </div>
    </section>
  );
};

export default News;
