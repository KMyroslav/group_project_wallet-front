import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { ReactComponent as IconWallet } from '../../icons/IconWallet.svg';
import { ReactComponent as IconExit } from '../../icons/exit.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
// import UserInfo from '../Userinfo/Userinfo';

export default function Header() {
  // рендер по усливию поими что тебе надо сделать
  // ты хочешь уьирать абзац на мобильной разметке если это мобильное устройство тога убрать element если нет тогда покажи его

  const viewPort = useWindowDimensions();

  return (
    <>
      <header className={styles.container}>
        <Link to="/" alt="homepage">
          <div>
            <IconWallet className={styles.logoIcon} />
            <h1 className={styles.logo}>Wallet</h1>
          </div>
        </Link>
        <div className={styles.userStatus}>
          <p>Имя</p>

          <IconExit className={styles.exitIcon} />
          {viewPort.width >= 320 && <p>Выход</p>}
        </div>
      </header>
    </>
  );
}
