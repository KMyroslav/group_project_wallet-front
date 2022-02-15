import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import logoMobile from '../../icons/logo-mobile.svg';
import logo from '../../icons/logo.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../icons/lock.svg';
import style from './LoginForm.module.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неверный адрес электронной почты')
    .required('Обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль должен состоять минимум из 6 символов!')
    .max(12, 'Пароль должен состоять максимум из 12 символов!')
    .required('Обязательно для заполнения'),
});

const LoginForm = () => {
  // const handleSubmit = () => {};
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <>
      <div className={style.formWrap}>
        <img src={logoMobile} alt="" className={style.logoMobile} />
        <img src={logo} alt="" className={style.logo} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = 'Заполните поле!';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Неверный адрес электронной почты';
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          onChange={(values) => setEmail(values.email)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.inputWrap}>
                <EmailIcon className={style.icon} />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="E-mail"
                  className={style.input}
                />

                <div className={style.errorMessage}>
                  {errors.email && touched.email && errors.email}
                </div>
              </div>

              <div className={style.inputWrap}>
                <PasswordIcon className={style.icon} />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Пароль"
                  className={style.input}
                />

                <div className={style.errorMessage}>
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={style.button}
              >
                ВХОД
              </button>
            </form>
          )}
        </Formik>

        <div className={style.link}>
          <Link to="/register">РЕГИСТРАЦИЯ</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
