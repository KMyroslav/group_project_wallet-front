import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './DesktopTable.module.scss';
import { format, isAfter } from 'date-fns';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
    format: (value) => format(new Date(value), 'dd.MM.yy'),
  },
  {
    id: 'typeTx',
    label: 'Тип',
    align: 'center',
    format: (value) => (value === 'income' ? '+' : '-'),
  },
  {
    id: 'categoryId',
    label: 'Категория',
    align: 'left',
  },
  {
    id: 'comment',
    label: 'Комментарий',
    align: 'left',
  },
  {
    id: 'sum',
    label: 'Сумма',
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'balance',
    label: 'Баланс',
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

export default function desktopTable({ data, categories }) {
  const sortedData = [...data].sort((a, b) =>
    isAfter(new Date(a.date), new Date(b.date)) ? -1 : 1,
  );
  const rows = sortedData.map(
    ({ _id, date, typeTx, categoryId, comment, sum, balance }) => {
      const { nameCategory } = categories.find((el) => el._id === categoryId);
      return {
        _id,
        date,
        typeTx,
        categoryId: nameCategory,
        comment,
        sum,
        balance,
      };
    },
  );

  return (
    <div sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 540, width: 688 }}>
        <Table stickyHeader aria-label="sticky table">
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
