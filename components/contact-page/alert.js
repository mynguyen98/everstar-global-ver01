import AlertIcon from "./../icons/icons/alert-icon";
import classes from "./alert.module.css";
export default function Alert({ content }) {
  return (
    <div className={classes.alert}>
      <AlertIcon />
      <span className={classes.required}>{content} is required</span>
    </div>
  );
}
