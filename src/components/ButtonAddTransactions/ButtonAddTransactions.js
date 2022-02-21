import styles from './ButtonAddTransactions.module.scss';
import { ReactComponent as AddTransactionsIcon } from 'icons/AddTransactionsIcon.svg';
import { useDispatch } from 'react-redux';
import modalActions from 'redux/isModalOpen/isModalOpenActions';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => dispatch(modalActions.open())}
    >
      <AddTransactionsIcon />
    </button>
  );
};

export default ButtonAddTransactions;
