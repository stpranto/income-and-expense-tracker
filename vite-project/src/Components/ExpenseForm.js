// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expense, setExpense] = useState('');
  // You can add more fields as needed (e.g., date, description, etc.)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update the expense transactions in the state
    console.log('Submitted expense:', expense);
    setExpense('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expense</h2>
      <label htmlFor="expense">Expense Amount:</label>
      <input
        type="number"
        id="expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
