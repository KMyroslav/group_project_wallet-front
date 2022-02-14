const ModalAddTransactions = () => {
  return (
    <div>
      <button></button>
      <p>Добавить транзакцию</p>
      <form>
        <label>
          Доход
          <input type="radio" name="transactionStatus" />
        </label>
        <label>
          Расход
          <input type="radio" name="transactionStatus" />
        </label>
        <select></select>
        <input type="number" />
        <input type="date" />
        <textarea></textarea>
        <button type="submit">Добавить</button>
        <button type="button">Отмена</button>
      </form>
    </div>
  );
};

export default ModalAddTransactions;
