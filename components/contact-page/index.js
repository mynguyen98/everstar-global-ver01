import { contactData } from "../../data/contact-data";
import { useRouter } from "next/router";
import classes from "./index.module.css";
import Form from "./form";
export default function ContactPage() {
  const { locale } = useRouter();
  const data = contactData[locale];
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
