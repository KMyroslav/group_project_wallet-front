const getTransactionsStatisticsList = (state) =>
  state.transactions.transactionStatisticsList;
const getCategoriesList = (state) => state.transactions.categories;
const getMonth = (state) => state.transactions.month;
const getYear = (state) => state.transactions.year;

const transactionsSelectors = {
  getTransactionsStatisticsList,
  getCategoriesList,
  getMonth,
  getYear,
};

export default transactionsSelectors;
