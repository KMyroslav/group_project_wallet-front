import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBalance } from 'redux/balance/balanceOperations';
import getBalance from 'redux/balance/balanceSelectors';
import styles from './Balance.module.scss';

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);
  useEffect(() => {
    console.log('useEffect dispatch');
    dispatch(fetchBalance());
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ваш баланс</p>
      <p className={styles.balance}>
        ₴ <span className={styles.balanceNumber}>{balance.toFixed(2)}</span>
      </p>
    </div>
  );
}
