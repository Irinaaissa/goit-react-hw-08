import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
// import * as Yup from 'yup';
import { feedbackSchema } from "./constants";
// import Button from '@mui/material/Button';
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };


  return (
    <div className={css.formContainer}>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
        <span className={css.text}> Email</span> 
          
          <Field className={css.field} type="email" name="email" autoComplete="current-password" />
        </label>
        <label className={css.label}>
         <span className={css.text}> Password </span> 
          <Field className={css.field} type="password" name="password"autoComplete="current-password"  />
        </label>
        <button className={css.btn} type="submit">Log In</button>
        
      </Form>
    </Formik>
    </div>
  );
}