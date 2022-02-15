import React from 'react';

import styles from './Header.module.scss';

import { ReactComponent as IconWallet } from '../../icons/IconWallet.svg';
import { ReactComponent as IconExit } from '../../icons/exit.svg';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <div>
          <IconWallet className={styles.logoIcon} />
          <h1 className={styles.logo}>Wallet</h1>
        </div>
        <div className={styles.userStatus}>
          <p>Имя</p>
          <IconExit className={styles.exitIcon} />
        </div>
      </header>
    </>
  );
}
