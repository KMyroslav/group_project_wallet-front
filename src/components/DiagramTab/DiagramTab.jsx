import styles from './DiagramTab.module.css';
import Table from '../Table';
import Selector from '../Selector/Selector';
import Chart from '../Chart/Chart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMonth, setYear } from '../../redux/transactions/transactionsSlice';

import selectors from '../../redux/transactions/transactionsSelectors';
import {
  getStatistics,
  getCategories,
} from '../../redux/transactions/transactionsOperations';
import { months, years, colorSheme } from './constants';

const DiagramTab = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectors.getTransactionsStatisticsList);
  const month = useSelector(selectors.getMonth);
  const year = useSelector(selectors.getYear);
  const categories = useSelector(selectors.getCategoriesList);
  const balance = transactions[transactions.length - 1]?.balance;

  const transactionsDetails = transactions?.reduce((acc, transaction) => {
    if (
      !colorSheme[transaction.categoryId] ||
      transaction.typeTx === 'income'
    ) {
      return acc;
    }

    const color = colorSheme[transaction.categoryId];
    const category = categories.find((el) => el._id === transaction.categoryId);

    const isNotUnique = acc.some(
      (elem) => elem.category === category.nameCategory,
    );

    if (isNotUnique) {
      const idx = acc.findIndex(
        (elem) => elem.category === category.nameCategory,
      );
      const total = acc[idx].total + transaction.sum;
      acc[idx].total = total;
      return acc;
    }

    const field = {
      color,
      category: category.nameCategory,
      total: transaction.sum,
    };
    return [...acc, field];
  }, []);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStatistics({ month, year }));
  }, [dispatch, month, year]);

  const onMonthSelect = (e) => {
    dispatch(setMonth(e.value));
    dispatch(getStatistics({ month: e.value, year }));
  };

  const onYearSelect = (e) => {
    dispatch(setYear(e.value));
    dispatch(getStatistics({ month, year: e.value }));
  };

  const income = transactions.reduce((acc, transaction) => {
    if (transaction.typeTx === 'income') {
      return acc + transaction.sum;
    }
    return acc;
  }, 0);

  const expense = transactions.reduce((acc, transaction) => {
    if (transaction.typeTx === 'expense') {
      return acc + transaction.sum;
    }
    return acc;
  }, 0);

  const labels = transactionsDetails.map((item) => item.category);

  const colors = transactionsDetails.map((elem) => elem.color);

  const totals = transactionsDetails.map((elem) => elem.total);

  const selectedMonth = months.filter(({ value }) => value === month);
  const selectedYear = { value: year, label: year };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.stat_wrapper}>
        <div className={styles.chart_wrapper}>
          <span className={styles.balance}>
            {transactions.length > 0 ? balance : 0}
          </span>
          <Chart labels={labels} colors={colors} totals={totals} />
        </div>
        <div className={styles.table_wrapper}>
          <div className={styles.selects_wrapper}>
            <Selector
              options={months}
              selected={selectedMonth}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={onMonthSelect}
            />
            <Selector
              options={years}
              selected={selectedYear}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={onYearSelect}
            />
          </div>
          <Table
            transactions={transactionsDetails}
            income={income}
            expense={expense}
          />
        </div>
      </div>
    </section>
  );
};

export default DiagramTab;
