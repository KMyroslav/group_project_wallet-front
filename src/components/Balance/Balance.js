import { useSelector } from 'react-redux';
import getBalance from 'redux/balance/balanceSelectors';
import styles from './Balance.module.scss';

export default function Balance() {
  const balance = useSelector(getBalance);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ваш баланс</p>
      <p className={styles.balance}>
        ₴ <span className={styles.balanceNumber}>{balance.toFixed(2)}</span>
      </p>
    </div>
  );
}
