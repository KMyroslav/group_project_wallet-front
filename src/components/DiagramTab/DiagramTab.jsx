import styles from './DiagramTab.module.css';
import Table from '../Table';
import Selector from '../Selector/Selector';
import Chart from '../Chart/Chart';
// import sumToString from '../../helpers/numberToStringCurrency';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//   monthChange,
//   yearChange,
// } from '../../redux/transactions/transactionsSlice';

// import selectors from '../../redux/transactions/transactionsSelectors';
// import categoriesSelectors from '../../redux/categories/categoriesSelectors';
// import transactionsOperations from '../../redux/transactions/transactionsOperations';
// import categoriesOperations from '../../redux/categories/categoriesOperations';

import transactions from '../Table/mock';

const DiagramTab = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(transactionsOperations.getTransactions());
  //   dispatch(categoriesOperations.getCategories());
  // }, [dispatch]);

  // const transactions = useSelector(selectors.getAllTransactions);
  // const monthFilter = useSelector(selectors.getMonthFilter);
  // const yearFilter = useSelector(selectors.getYearFilter);
  // const categories = useSelector(categoriesSelectors.getCategories);

  // const filteredTransactions = transactions.filter(
  //   ({ month, year }) => month === monthFilter && year === yearFilter,
  // );

  // const yearsList = transactions
  //   .reduce((acc, item) => {
  //     if (acc.includes(item.year)) return acc;
  //     return [...acc, item.year];
  //   }, [])
  //   .map((item) => {
  //     return { value: item, label: item };
  //   });

  // const labels = filteredTransactions.reduce((acc, item) => {
  //   if (acc.includes(item.category.name) || item.type === '+') return acc;
  //   return [...acc, item.category.name];
  // }, []);

  const labels = transactions.map((item) => item.category);

  // const colors = labels.reduce((acc, item) => {
  //   const color = categories.find(({ name }) => name === item)?.color;
  //   return [...acc, color];
  // }, []);

  const colors = transactions.map((item) => item.color);

  // const totals = labels.reduce((acc, item) => {
  //   const total = filteredTransactions.reduce((sum, transaction) => {
  //     if (transaction.category.name === item) return sum + transaction.sum;
  //     return sum;
  //   }, 0);
  //   return [...acc, total];
  // }, []);

  // const data = labels.map((item, index) => {
  //   return { category: item, total: totals[index], color: colors[index] };
  // });

  // const onMonthSelect = (e) => {
  //   dispatch(monthChange(e.value));
  // };

  // const onYearSelect = (e) => {
  //   dispatch(yearChange(e.value));
  // };

  // const { totalProfit, totalLoose } = filteredTransactions.reduce(
  //   (acc, item) => {
  //     if (item.type === '-') {
  //       const sum = acc.totalLoose + Number(item.sum);
  //       acc.totalLoose = sum;
  //     }
  //     if (item.type === '+') {
  //       const sum = acc.totalProfit + Number(item.sum);
  //       acc.totalProfit = sum;
  //     }

  //     return acc;
  //   },
  //   { totalProfit: 0, totalLoose: 0 },
  // );

  const months = [
    { value: '01', label: 'Январь' },
    { value: '02', label: 'Февраль' },
    { value: '03', label: 'Март' },
    { value: '04', label: 'Апрель' },
    { value: '05', label: 'Май' },
    { value: '06', label: 'Июнь' },
    { value: '07', label: 'Июль' },
    { value: '08', label: 'Август' },
    { value: '09', label: 'Сентябрь' },
    { value: '10', label: 'Октябрь' },
    { value: '11', label: 'Ноябрь' },
    { value: '12', label: 'Декабрь' },
  ];

  const years = [
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
  ];

  // const total = totalProfit - totalLoose;
  // const selectedMonth = months.filter(({ value }) => value === monthFilter);
  // const selectedYear = { value: yearFilter, label: yearFilter };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.stat_wrapper}>
        <div className={styles.chart_wrapper}>
          <span className={styles.balance}>24000</span>
          {/* <span className={styles.balance}>{strBalance}</span> */}
          {/* <Chart labels={labels} colors={colors} totals={totals} /> */}
          <Chart
            labels={labels}
            colors={colors}
            totals={[10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120]}
          />
        </div>
        <div className={styles.table_wrapper}>
          <div className={styles.selects_wrapper}>
            <Selector
              options={months}
              // selected={selectedMonth}
              selected={[{ value: '02', label: 'Февраль' }]}
              className="react-select-container"
              classNamePrefix="react-select"
              // onChange={onMonthSelect}
            />
            <Selector
              options={years}
              // selected={selectedYear}
              selected={{ value: '2022', label: '2022' }}
              className="react-select-container"
              classNamePrefix="react-select"
              // onChange={onYearSelect}
            />
          </div>
          <Table
            transactions={transactions}
            // totalProfit={totalProfit}
            totalProfit={0}
            // totalLoose={totalLoose}
            totalLoose={0}
          />
        </div>
      </div>
    </section>
  );
};

export default DiagramTab;
