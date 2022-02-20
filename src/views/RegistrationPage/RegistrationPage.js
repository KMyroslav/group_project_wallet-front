import React from 'react';
import { useWindowSize } from '@react-hook/window-size';

import RegistrationForm from '../../components/RegistrationForm';

import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [width] = useWindowSize();

  return (
    <div>
      <div className={style.PageContainer}>
        {width >= 768 && <p className={style.pageText}>Finance App</p>}
        {/* <p className={style.pageText}>Finance App</p> */}
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
