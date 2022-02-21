import Media from 'react-media';
import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactionsTable/transactionsTableOperations';
import getTransactionsTable from 'redux/transactionsTable/transactionsTableSelectors';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import categoriesActions from 'redux/categories/categoriesSelectors';
import { useEffect } from 'react';

export default function TableHome() {
  const dispatch = useDispatch();
  const data = useSelector(getTransactionsTable);
  const categories = useSelector(categoriesActions.getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
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
