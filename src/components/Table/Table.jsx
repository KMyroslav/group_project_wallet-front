import styles from './Table.module.css';

const headers = ['Категория', 'Сумма'];

const Table = ({ transactions = [], income = 0, expense = 0 }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tableHeader}>
            {headers.map((item, index) => {
              if (index === 0) {
                return (
                  <th key={item} className={styles.th} colSpan="2">
                    {item}
                  </th>
                );
              }
              return (
                <th key={item} className={styles.th}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ color, category, total = 0 }) => (
            <tr key={category} className={styles.tr}>
              <td className={styles.td}>
                <div
                  className={styles.colorBlock}
                  style={{ backgroundColor: color }}
                ></div>
              </td>
              <td className={styles.td}>{category}</td>
              <td className={styles.td}>{total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className={styles.tfoot}>
          <tr className={styles.tfoot_tr}>
            <th className={styles.tfoot_th} colSpan="2">
              Расходы:
            </th>
            <td className={styles.tfoot_td}>{income}</td>
          </tr>
          <tr className={styles.tfoot_tr}>
            <th className={styles.tfoot_th} colSpan="2">
              Доходы:
            </th>
            <td className={styles.tfoot_td}>{expense}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
