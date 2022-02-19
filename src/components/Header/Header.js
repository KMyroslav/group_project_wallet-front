import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useWindowSize } from '@react-hook/window-size';

import { getUserName, getIsAuth } from '../../redux/auth/auth-selectors';
// import { logout } from 'redux/auth/auth-operations';

import styles from './Header.module.scss';

import { ReactComponent as IconWallet } from '../../icons/IconWallet.svg';
import { ReactComponent as IconExit } from '../../icons/exit.svg';

export default function Header() {
  const isAuthUser = useSelector(getIsAuth);
  const userName = useSelector(getUserName);

  // const dispatch = useDispatch();

  console.log('name', userName);

  const [width] = useWindowSize();

  return (
    <>
      <header className={styles.container}>
        <Link to="/home" alt="homepage">
          <div>
            <IconWallet className={styles.logoIcon} />
            <h1 className={styles.logo}>Wallet</h1>
          </div>
        </Link>
        <div className={styles.userStatus}>
          {isAuthUser !== userName ? <p>Имя</p> : <p>{userName}</p>}
          <IconExit className={styles.exitIcon} />

          {width >= 768 && <p>Выход</p>}
          {/* {width >= 768 && (
            <button onClick={() => dispatch(logout())}>Выход</button>
          )} */}
        </div>
      </header>
    </>
  );
}
