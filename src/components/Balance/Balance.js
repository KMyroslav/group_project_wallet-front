import styles from './Balance.module.scss';

export default function Balance() {
  // потрібно взяти з редакс стора баланс
  //const { balance, isLoading: balanceIsLoading } = getUserBalance()
  const balance = '24 000.00';
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ваш баланс</p>
      <p className={styles.balance}>
        ₴ <span className={styles.balanceNumber}>{balance}</span>
      </p>
    </div>
  );
}
