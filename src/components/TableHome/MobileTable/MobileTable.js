import { isAfter, format } from 'date-fns/esm';
import style from './MobileTable.module.scss';

export default function MobileTable({ data, categories }) {
  const sortedData = [...data].sort((a, b) =>
    isAfter(new Date(a.date), new Date(b.date)) ? -1 : 1,
  );
  return sortedData.map(
    ({ _id, date, typeTx, categoryId, comment, sum, balance }) => {
      const { nameCategory } = categories.find((el) => el._id === categoryId);
      return (
        <div
          className={
            typeTx === 'income'
              ? `${style.tableWrapper} ${style.wrapperIncome}`
              : `${style.tableWrapper}`
          }
          key={_id}
        >
          <ul className={style.list}>
            <li className={style.listItem}>
              <span className={style.listKey}>Дата</span>
              <span className={style.listValue}>
                {format(new Date(date), 'dd.MM.yy')}
              </span>
            </li>
            <li className={style.listItem}>
              <span className={style.listKey}>Тип</span>
              <span className={style.listValue}>
                {typeTx === 'income' ? '+' : '-'}
              </span>
            </li>
            <li className={style.listItem}>
              <span className={style.listKey}>Категория</span>
              <span className={style.listValue}>{nameCategory}</span>
            </li>
            <li className={style.listItem}>
              <span className={style.listKey}>Комментарий</span>
              <span className={style.listValue}>{comment}</span>
            </li>
            <li className={style.listItem}>
              <span className={style.listKey}>Сумма</span>
              <span
                className={
                  typeTx === 'income'
                    ? `${style.listValue} ${style.income}`
                    : `${style.listValue} ${style.outcome}`
                }
              >
                {sum.toFixed(2)}
              </span>
            </li>
            <li className={style.listItem}>
              <span className={style.listKey}>Баланс</span>
              <span className={style.listValue}>{balance.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      );
    },
  );
}
