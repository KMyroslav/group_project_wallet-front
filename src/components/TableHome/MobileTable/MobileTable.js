import style from './MobileTable.module.scss';

const formatDate = (value) => {
  const date = new Date(value);
  const [month, day, year] = [
    date.getMonth() >= 10 ? date.getMonth() : '0' + date.getMonth(),
    date.getDate(),
    `${date.getFullYear()}`.slice(-2),
  ];
  return `${month}.${day}.${year}`;
};

export default function MobileTable({ data }) {
  return data.map(({ _id, date, typeTx, comment, sum, balance }) => (
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
          <span className={style.listValue}>{formatDate(date)}</span>
        </li>
        <li className={style.listItem}>
          <span className={style.listKey}>Тип</span>
          <span className={style.listValue}>
            {typeTx === 'income' ? '+' : '-'}
          </span>
        </li>
        <li className={style.listItem}>
          <span className={style.listKey}>Категория</span>
          <span className={style.listValue}>smth</span>
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
  ));
}
