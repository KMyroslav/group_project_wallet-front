import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './DesktopTable.module.scss';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    '&:nth-of-type(6n-5)': {
      paddingLeft: 20,
    },
    '&:nth-of-type(6n)': {
      paddingRight: 20,
    },
    '&:nth-of-type(6n-4)': {
      paddingRight: 45,
    },
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffffff',
    borderColor: 'transparent',
    fontSize: 18,
    fontWeight: 700,
    color: '#000000',
    '&:first-of-type': {
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
    },
    '&:last-child': {
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:not(:last-child)': {
    td: {
      borderBottom: 1,
      borderStyle: 'solid',
      borderColor: '#dcdcdf',
    },
  },
}));

const columns = [
  {
    id: 'date',
    label: 'Дата',
    align: 'left',
    pl: 20,
    minWidth: 55,
    format: (value) => {
      const date = new Date(value);
      const [month, day, year] = [
        date.getMonth() >= 10 ? date.getMonth() : '0' + date.getMonth(),
        date.getDate(),
        `${date.getFullYear()}`.slice(-2),
      ];
      return `${month}.${day}.${year}`;
    },
  },
  {
    id: 'typeTx',
    label: 'Тип',
    align: 'center',
    minWidth: 35,
    format: (value) => (value === 'income' ? '+' : '-'),
  },
  {
    id: 'category',
    label: 'Категория',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'comment',
    label: 'Комментарий',
    minWidth: 115,
    align: 'left',
  },
  {
    id: 'sum',
    label: 'Сумма',
    // minWidth: 65,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'balance',
    label: 'Баланс',
    // minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

export default function desktopTable({ data }) {
  const rows = data.map(({ _id, date, typeTx, comment, sum, balance }) => ({
    _id,
    date,
    typeTx,
    category: 'категория',
    comment,
    sum,
    balance,
  }));

  return (
    <div sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        {/* sx={{ maxHeight: 420 }} */}
        <Table stickyHeader aria-label="sticky table">
          {/* <Table aria-label="table"> */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={styles.tableHeaderCell}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <StyledTableRow
                  hover //hover?
                  tabIndex={-1}
                  key={row._id}
                  className={styles.tableRow}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === 'sum') {
                      return (
                        <StyledTableCell
                          key={column.id}
                          align={column.align}
                          sx={
                            row.typeTx === 'income'
                              ? `color: #24cca7`
                              : `color: #ff6596`
                          }
                        >
                          {column.format ? column.format(value) : value}
                        </StyledTableCell>
                      );
                    }
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
