import React from 'react';

import RegistrationForm from '../../components/RegistrationForm';

import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <div>
      <div className={style.container}>
        <p className={style.pageText}>Finance App</p>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
