import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

const URL = 'https://dvf-project-group-2-back.herokuapp.com/api/users/login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(password, '<<<<');

  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <>
      <div className={style.formWrap}>
        <img src={logoMobile} alt="" className={style.logoMobile} />
        <img src={logo} alt="" className={style.logo} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setEmail(values.email);
            setPassword(values.password);
            // resetForm();
          }}
          // onChange={(values) => {
          //   setEmail(values.email);
          //   setPassword(values.password);
          // }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
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

              <button type="submit" disabled={null} className={style.button}>
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
