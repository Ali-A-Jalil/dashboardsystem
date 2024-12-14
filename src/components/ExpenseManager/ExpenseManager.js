import React, { useState } from 'react';
import { FaDownload, FaFilter, FaPlus } from 'react-icons/fa';

const ExpenseManager = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState('');

  // Handle adding a new expense
  const handleAddExpense = () => {
    if (description && amount && date) {
      const newExpense = {
        id: expenses.length + 1,
        category: 'General', // Default category
        description,
        type: 'One Time', // Default type
        date,
        account: 'Cash', // Default account
        amount: parseFloat(amount),
        createdBy: 'User', // Default user
      };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
      setDate('');
    }
  };

  // Handle deleting an expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Download as CSV
  const handleDownloadCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['ID,Category,Description,Type,Date,Account,Amount,Created By']
        .concat(
          expenses.map(
            (expense) =>
              `${expense.id},${expense.category},${expense.description},${expense.type},${expense.date},${expense.account},${expense.amount},${expense.createdBy}`
          )
        )
        .join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'expenses.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Filtered expenses
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="expense-manager">
      <h1>Expense Manager</h1>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <strong>Expense:</strong> {expenses.length}
        </div>
        <div>
          <strong>Amount:</strong> ${totalExpenses.toFixed(2)}
        </div>
      </div>

      {/* Buttons */}
      <div className="action-buttons">
        <button onClick={handleAddExpense} className="add-expense-btn">
          <FaPlus /> Add Expense
        </button>
        <button onClick={handleDownloadCSV} className="csv-download-btn">
          <FaDownload /> CSV Export
        </button>
        <button className="filter-btn">
          <FaFilter /> Filter
        </button>
      </div>

      {/* Add Expense Form */}
      <div className="expense-form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddExpense} className="add-expense-btn">
          Add
        </button>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Expense Table */}
      <div className="expense-table">
        <h2>Expense List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Expenses Category</th>
              <th>Description</th>
              <th>Type</th>
              <th>Date</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.type}</td>
                <td>{expense.date}</td>
                <td>{expense.account}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.createdBy}</td>
                <td>
                  <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseManager;
