import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import logo from '../../icons/logo-mobile.svg';
import style from './LoginForm.module.scss';

const LoginForm = () => {
  const handleSubmit = () => {};

  return (
    <>
      <div className={style.formWrap}>
        <img src={logo} alt="" className={style.logo} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Заполните поле!';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Неверный адрес электронной почты';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={style.form}>
              <Field type="email" name="email" className={style.input} />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" className={style.input} />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
