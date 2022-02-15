import { useFormik } from 'formik';
// import * as Yup from 'yup';
import styles from './ModalAddTransactions.module.scss';
import { ReactComponent as CloseModalIcon } from 'icons/CloseModalIcon.svg';

import Toggler from 'components/Toggler';

const ModalAddTransactions = () => {
  const formik = useFormik({
    initialValues: {
      type: 'expenses',
      amount: 0.0,
      timestamp: '',
      comment: '',
    },
  });

  return (
    <div>
      <button className={styles.closeModalButton}>
        <CloseModalIcon />
      </button>
      <p className={styles.formCall}>Добавить транзакцию</p>
      <Toggler />
      <form>
        <label>
          Доход
          <input
            id="type"
            type="radio"
            name="type"
            onChange={formik.handleChange}
          />
        </label>
        <label>
          Расход
          <input
            id="type"
            type="radio"
            name="type"
            onChange={formik.handleChange}
          />
        </label>
        <select></select>
        <input id="amount" type="number" name="amount" />
        <input id="timestamp" type="date" name="timestamp" />
        <textarea id="comment" name="comment"></textarea>
        <button type="submit">Добавить</button>
        <button type="button">Отмена</button>
      </form>
    </div>
  );
};

export default ModalAddTransactions;
