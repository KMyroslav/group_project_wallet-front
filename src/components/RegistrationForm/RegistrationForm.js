import React from "react";
import './RegistrationForm.scss';
import { Formik, Form } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";


export default function RegistrationForm() {


    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),

        password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
        email: yup.string().email('Введите верный email').required('Обязательно'),

    })


    return (

        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    name: "",
                }}
                validateOnBlur
                onSubmit={values => { console.log(values) }}
                validationSchema={validationsSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

                    <Form className="form-register ">
                        <div>




                            <label htmlFor={`email`} className="label" >

                                <input type="email"
                                    email="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="E-mail"
                                    value={values.email}
                                    id="email" />

                            </label>

                            {touched.email && errors.email && <p className="errors">{errors.email}</p>}

                            <label htmlFor={`password`} className="label">

                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder=" Пароль"
                                    value={values.password}
                                />
                            </label>

                            {touched.password && errors.password && <p className="errors">{errors.password}</p>}

                            <label htmlFor={`confirmPassword`} className="label">

                                <input
                                    type="confirmPassword"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    placeholder=" Подтвердите пароль"
                                />
                            </label>

                            {touched.confirmPassword && errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}

                            <label htmlFor={`name`} className="label">

                                <input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Ваше имя"
                                />
                            </label>
                            {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                            <button onClick={handleSubmit} disabled={!isValid && !dirty} type="submit">Регистрация</button>

                            <div className="btn-container">
                                <NavLink to="/login" className="main_btn">
                                    Вход
                                </NavLink>
                            </div>
                        </div>
                    </Form>)
                }
            </Formik >
        </>
    );
}