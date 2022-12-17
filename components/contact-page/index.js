import { contactData } from "../../data/contact-data";
import classes from "./index.module.css";
import Form from "./form";
import { useLangContext } from "../../store/lang-switch-context";
export default function ContactPage() {
  const { currentLocale } = useLangContext();
  const data = contactData[currentLocale];
  return (
    <>
      <section className={classes.section}>
        <div className="section-center">
          <h1 className="section-heading">CONTACT US</h1>
          <p className={classes.description}>{data.description}</p>
        </div>
      </section>
      <section className={classes.formContainer}>
        <div>
          <Form data={data} />
        </div>
      </section>
    </>
  );
}
