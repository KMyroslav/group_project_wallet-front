import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import categoriesActions from 'redux/categories/categoriesSelectors';
import styles from './ModalAddTransactions.module.scss';

import 'styles/globalMUI.scss';

import { ReactComponent as CloseModalIcon } from 'icons/CloseModalIcon.svg';
import { ReactComponent as DateRangeIcon } from 'icons/DateRangeIcon.svg';
import { ReactComponent as OpenSelectIcon } from 'icons/OpenSelectIcon.svg';

import { useFormik } from 'formik';
// import * as Yup from 'yup';
import DateAdapter from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

import Toggler from 'components/Toggler';
import CustomNumberFormat from 'components/CustomNumberFormat';

const ModalAddTransactions = () => {
  const [toggled, setToggled] = useState('expenses');
  const [timestamp, setTimestamp] = useState(new Date());
  const [amount, setAmount] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const initial = { toggled, timestamp, amount, selected };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(categoriesActions.getCategories);

  const formik = useFormik({
    initialValues: {
      ...initial,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const locale = ruLocale;
  const mask = '__.__.___';

  const handleToggle = () => {
    toggled === 'expenses' ? setToggled('profit') : setToggled('expenses');
  };

  const onAmountChange = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  return (
    <div className={styles.formWrapper}>
      <button className={styles.closeModalButton}>
        <CloseModalIcon />
      </button>
      <p className={styles.formCall}>Добавить транзакцию</p>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Toggler selected={toggled} toggleSelected={handleToggle} />
        <div className={styles.selectWrapper}>
          <input
            className={
              toggled === 'expenses'
                ? styles.transactionCategory
                : styles.hidden
            }
            placeholder="Выберите категорию"
          />
          <button
            className={
              toggled === 'expenses' ? styles.openSelectButton : styles.hidden
            }
            type="button"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <OpenSelectIcon />
          </button>
          {isSelectOpen && (
            <div className={styles.selectListWrapper}>
              <ul className={styles.selectList}>
                {categories &&
                  categories.map((category) => (
                    <li
                      className={styles.selectListItem}
                      key={category._id}
                      onClick={() => {
                        setSelected(category.nameCategory);
                        setIsSelectOpen(false);
                      }}
                    >
                      <p className={styles.option}>{category.nameCategory}</p>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.neighborInputsWrapper}>
          <TextField
            variant="outlined"
            label=""
            placeholder="0.00"
            value={amount === null ? '' : amount}
            onChange={onAmountChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: CustomNumberFormat,
              classes: { notchedOutline: styles.noBorder },
            }}
          />
          <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
            <DatePicker
              components={{ OpenPickerIcon: DateRangeIcon }}
              desktopModeMediaQuery="@media (min-width: 320px)"
              classes={{ notchedOutline: styles.noBorder }}
              mask={mask}
              minDate={new Date()}
              value={timestamp}
              onChange={(date) => {
                setTimestamp(date);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={null}
                  sx={{
                    '& .MuiInputBase-input': {
                      color: '#000000;',
                      fontWeight: 'regular',
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <textarea
          className={styles.transactionComment}
          id="comment"
          name="comment"
          placeholder="Комментарий"
        ></textarea>
        <button className={styles.addTransactionBtn} type="submit">
          Добавить
        </button>
        <button className={styles.cancelTransactionBtn} type="button">
          Отмена
        </button>
      </form>
    </div>
  );
};

export default ModalAddTransactions;
