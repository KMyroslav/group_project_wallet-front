const getTransactionsStatisticsList = (state) =>
  state.transactions.transactionStatisticsList;
const getCategoriesList = (state) => state.transactions.categories;
const getMonth = (state) => state.transactions.month;
const getYear = (state) => state.transactions.year;
const getToken = (state) => state.transactions.token;

const transactionsSelectors = {
  getTransactionsStatisticsList,
  getCategoriesList,
  getMonth,
  getYear,
  getToken,
};

export default transactionsSelectors;
