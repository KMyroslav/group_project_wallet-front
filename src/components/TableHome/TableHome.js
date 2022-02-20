import Media from 'react-media';
import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactionsTable/transactionsTableOperations';
import getTransactionsTable from 'redux/transactionsTable/transactionsTableSelectors';
import { useEffect } from 'react';

const categories = [
  {
    _id: '62091748b71f06d6de2cfcf8',
    nameCategory: 'Разное',
    createdAt: '2022-02-13T14:35:52.388Z',
    updatedAt: '2022-02-13T14:35:52.388Z',
  },
  {
    _id: '62091b80a2ad0a81fada8587',
    nameCategory: 'Регулярный доход',
    createdAt: '2022-02-13T14:53:52.627Z',
    updatedAt: '2022-02-13T14:53:52.627Z',
  },
  {
    _id: '62091cfea2ad0a81fada8589',
    nameCategory: 'Машина',
    createdAt: '2022-02-13T15:00:14.366Z',
    updatedAt: '2022-02-13T15:00:14.366Z',
  },
  {
    _id: '62091d56a2ad0a81fada858b',
    nameCategory: 'Продукты',
    createdAt: '2022-02-13T15:01:42.727Z',
    updatedAt: '2022-02-13T15:01:42.727Z',
  },
  {
    _id: '62091da3a2ad0a81fada858d',
    nameCategory: 'Нерегулярный доход',
    createdAt: '2022-02-13T15:02:59.963Z',
    updatedAt: '2022-02-13T15:02:59.963Z',
  },
];

export default function TableHome() {
  const dispatch = useDispatch();
  const data = useSelector(getTransactionsTable);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <Media query="(max-width: 768px)">
      {(matches) =>
        matches ? (
          <MobileTable data={data} categories={categories} />
        ) : (
          <DesktopTable data={data} categories={categories} />
        )
      }
    </Media>
  );
}
