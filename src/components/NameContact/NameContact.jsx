
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from "./NameContact.module.css";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { notify}from "../Toaster/Toaster";
// import  { Toaster } from 'react-hot-toast';


export default function ContactForm({ closeContactForm }) {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(7, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
    closeContactForm(); 
    notify();
  }
  
  return (
    <div className={css.formContainer}>
      
<Formik 
  initialValues={initialValues}
  onSubmit={handleSubmit}
  validationSchema={validationSchema}
>
  <Form className={css.form}>
    <FormInput className={css.field} id={nameFieldId} type="text" name="name">
      <span className={css.text}> Name </span>
    </FormInput>
    <FormInput className={css.field} id={numberFieldId} type="text" name="number">
      <span className={css.text}> Number</span>
    </FormInput>
    <button   className={css.btn} type="submit"> 
    Add contact
    
    </button>
    
  </Form>
</Formik>
    </div>
  );
}

function FormInput({ id, type, name, children }) {
  return (
    <div className={css.fieldContainer}>
      <label htmlFor={id}>{children}</label>
      <Field type={type} name={name} id={id} className={css.input}></Field>
      <span className={css.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
}