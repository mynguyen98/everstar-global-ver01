import classes from "./form.module.css";
import { useForm } from "react-hook-form";
import Alert from "./alert";
export default function Form({ data }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { fullName, companyName, email, phone, prjDesc, submit } = data;
  console.log(fullName);
  const onSubmit = (datas) => {
    console.log(datas);
  };
  console.log("");
  return (
    <div>
      <div className="section-center">
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.formContainer}>
            <div className={classes.inputField}>
              <input
                type="text"
                placeholder={fullName}
                {...register("fullName", { required: true })}
              />
              {errors.fullName && <Alert content="full name" />}
            </div>
            <div className={classes.inputField}>
              <input
                type="text"
                placeholder={companyName}
                {...register("company", { required: true })}
              />
              {errors.company && <Alert content="company name" />}
            </div>
          </div>
          <div className={classes.formContainer}>
            <div className={classes.inputField}>
              <input
                type="text"
                placeholder={email}
                {...register("email", { required: true })}
              />
              {errors.email && <Alert content="email address" />}
            </div>
            <div className={classes.inputField}>
              <input
                type="text"
                placeholder={phone}
                {...register("phone", { required: true })}
              />
              {errors.phone && <Alert content="phone number" />}
            </div>
          </div>
          <div className={`${classes.inputField} ${classes.desc}`}>
            <textarea
              type="text"
              placeholder={prjDesc}
              {...register("projectDetail")}
            />
          </div>
          <button type="submit">{submit}</button>
        </form>
      </div>
    </div>
  );
}
