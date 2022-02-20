import styles from './ButtonAddTransactions.module.scss';
import { ReactComponent as AddTransactionsIcon } from 'icons/AddTransactionsIcon.svg';

const ButtonAddTransactions = () => {
  return (
    <button className={styles.button} type="button">
      <AddTransactionsIcon />
    </button>
  );
};

export default ButtonAddTransactions;
