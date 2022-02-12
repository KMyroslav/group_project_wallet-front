import React from 'react';

import s from './Header.module.scss';
import { ReactComponent as IconWallet } from '../../icons/IconWallet.svg';
import { ReactComponent as IconExit } from '../../icons/exit.svg';

export default function Header() {
  return (
    <>
      <header className={s.container}>
        <div>
          <IconWallet className={s.logoIcon} />
          <h1 className={s.logo}>Wallet</h1>
        </div>

        <div className={s.userStatus}>
          <p>Имя</p>
          <IconExit className={s.exitIcon} />
        </div>
      </header>
    </>
  );
}
