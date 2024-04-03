import * as Yup from 'yup';

 const ERR_EMAIL = 'Invalid email';
 const ERR_EMAIL_REQUIRED = 'Email is required';
 const ERR_PASSWORD = 'Password must be at least 8 characters';
 const ERR_PASSWORD_REQUIRED = 'Password is required';

 export const feedbackSchema = Yup.object().shape({
    email: Yup.string().email(ERR_EMAIL).required(ERR_EMAIL_REQUIRED),
    password: Yup.string().min(8, ERR_PASSWORD).required(ERR_PASSWORD_REQUIRED),
  });