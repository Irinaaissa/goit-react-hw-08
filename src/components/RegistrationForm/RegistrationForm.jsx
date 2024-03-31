import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}> 
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
        <span className={css.text}>Username</span>
          <Field className={css.field} type="text" name="name" />
        </label>
        <label className={css.label}>
          <span className={css.text}> Email</span>
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
        <span className={css.text}>Password</span>
          <Field className={css.field} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
    </div>
  );
}