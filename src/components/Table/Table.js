import { useWindowWidth } from '@react-hook/window-size';
import MaterialTable from '@material-table/core';
import { tableIcons } from './icons';

export const Table = ({ transactions }) => {
  const width = useWindowWidth();

  if (width < 768) {
    return (
      <ul style={{ maxWidth: '100%', flexDirection: 'column' }}>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            style={{
              marginBottom: 20,
              backgroundColor: 'yellow',
              flexDirection: 'row',
              display: 'flex',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: 5,
                height: 282,
                backgroundColor:
                  transaction.type === '+' ? '#24CCA7' : '#FF6596',
              }}
            />
            <ul
              style={{
                padding: 20,
                width: '100%',
              }}
            >
              {Object.keys(transaction).map((key) => (
                <li
                  key={key}
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <p>{key}</p>
                  <span
                    style={{
                      color:
                        key === 'sum'
                          ? transaction.type === '+'
                            ? '#24CCA7'
                            : '#FF6596'
                          : '#000000',
                    }}
                  >
                    {transaction[key]}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        icons={tableIcons}
        style={{ borderRadius: 0, boxShadow: 'none' }}
        columns={[
          {
            title: 'Дата',
            field: 'date',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingLeft: 20,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
            },
          },
          {
            title: 'Тип',
            field: 'type',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingBottom: 20,
            },
          },
          {
            title: 'Категория',
            field: 'category',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingBottom: 20,
            },
          },
          {
            title: 'Комментарий',
            field: 'comment',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingBottom: 20,
            },
          },
          {
            title: 'Сумма',
            field: 'sum',
            type: 'numeric',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingBottom: 20,
            },
            cellStyle: (_, row) => {
              if (row.type === '-') {
                return { color: '#FF6596' };
              } else {
                return { color: '#24CCA7' };
              }
            },
          },
          {
            title: 'Баланс',
            field: 'balance',
            type: 'numeric',
            headerStyle: {
              backgroundColor: 'yellow',
              paddingTop: 20,
              paddingRight: 20,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
            },
          },
        ]}
        data={transactions}
        options={{
          search: false,
          toolbar: false,
          showTitle: false,
          paging: false,
        }}
      />
    </div>
  );
};
