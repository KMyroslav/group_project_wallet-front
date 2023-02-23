import styles from './Currency.module.scss';
import { ReactComponent as Curve } from '../../icons/currencyCurve.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyData } from 'redux/currency/currencySelectors';
import { fetchCurrencyData } from 'redux/currency/currencyActions';

const fixValue = (value) => {
  if (value.indexOf(0) === 0) {
    return '0' + value.slice(0, 4);
  } else {
    return value.slice(0, 5);
  }
};

export default function Currency() {
  const dispatch = useDispatch();
  const currencyData = useSelector(getCurrencyData);

  useEffect(() => {
    const lastFetchTime = JSON.parse(localStorage.getItem('fetch time'));
    if (!currencyData.length && Date.now() - lastFetchTime > 1800000) {
      localStorage.setItem('fetch time', JSON.stringify(Date.now()));
      dispatch(fetchCurrencyData());
    }
  }, [currencyData.length, dispatch]);

  return (
    <div className={styles.tableWrapper}>
      {currencyData ? (
        <table className={styles.table}>
          <tbody>
            <tr>
              <th className={styles.tableHead}>Валюта</th>
              <th className={styles.tableHead}>Покупка</th>
              <th className={styles.tableHead}>Продажа</th>
            </tr>
            {currencyData.map((el) => (
              <tr className={styles.tableRow} key={el.ccy}>
                <td className={styles.tableData}>{el.ccy}</td>
                <td className={styles.tableData}>{fixValue(el.buy)}</td>
                <td className={styles.tableData}>{fixValue(el.sale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>LOADING...</p> // ADD LOADER
      )}
      <Curve className={styles.curve}></Curve>
    </div>
  );
}
