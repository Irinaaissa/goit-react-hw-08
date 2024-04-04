import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from 'yup';


export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
  .trim()
  .min(3, 'Username must be at least 3 characters')
  .max(50, 'Username is too long')
  .required('Username is required'),
    email: Yup.string()
      .trim()
      .email('Invalid email format')
.required('Email is required'),
      password: Yup.string()
      .trim()
      .min(8, 'Password must be at least 8 characters')
.matches(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
  'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
  .required('Password is required'),
  });


  return (
    <div className={css.formContainer}> 
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
        <span className={css.text}>Username</span>
        <ErrorMessage name="name" component="div" className={css.error} />
          <Field className={css.field} type="text" name="name" autoComplete="current-password" />
        </label>
        <label className={css.label}>
        
          <span className={css.text}> Email</span>
          <ErrorMessage name="email" component="div" className={css.error} />
          <Field className={css.field} type="email" name="email" autoComplete="current-password" />
        </label>
        <label className={css.label}>
        
        <span className={css.text}>Password</span>
        <ErrorMessage name="password" component="div" className={css.error} />
          <Field className={css.field} type="password" name="password" autoComplete="current-password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
    </div>
  );
}