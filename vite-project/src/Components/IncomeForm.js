// IncomeForm.js
import React, { useState } from 'react';

const IncomeForm = () => {
  const [income, setIncome] = useState('');
  // You can add more fields as needed (e.g., date, description, etc.)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update the income transactions in the state
    console.log('Submitted income:', income);
    setIncome('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Income</h2>
      <label htmlFor="income">Income Amount:</label>
      <input
        type="number"
        id="income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
