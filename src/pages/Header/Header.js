import React from 'react';

import s from './Header.module.scss';

import { ReactComponent as IconExit } from '../../icons/exit.svg';

export default function Header() {
  return (
    <>
      <header className={s.container}>


        <div className={s.userStatus}>
          <p>Имя</p>
          <IconExit className={s.exitIcon} />
        </div>
      </header>
    </>
  );
}
