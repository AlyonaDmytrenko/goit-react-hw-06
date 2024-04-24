import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  FORM_INITIAL_VALUES,
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
} from '../../utils/constants';

import * as Yup from 'yup';
import css from './contactForm.module.css';

const contactSchema = Yup.object({
  name: Yup.string()
    .required('Contact name is required!')
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Your contact name must be greater than ${MIN_CHAR_NAME_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your contact name must be less than ${MAX_CHAR_NAME_VALIDATION} characters`
    ),
  number: Yup.string().required('Contact number is required!').nullable(),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    // console.log(values, actions);
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span className={css.name}>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
