import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaFilter, FaFileExcel } from "react-icons/fa";

const RecurringExpenseManager = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [dateDay, setDateDay] = useState("");
  const [account, setAccount] = useState("");

  // Add new recurring expense
  const handleAddExpense = () => {
    if (description && amount && dateDay && account) {
      const newExpense = {
        id: expenses.length + 1,
        category: "Recurring",
        description,
        dateDay,
        account,
        amount: parseFloat(amount),
        createdBy: "Ali Abdel Galil", // Example creator
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
      setDateDay("");
      setAccount("");
    }
  };

  // Calculate total recurring expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="recurring-expense-manager">
      {/* Top Section */}
      <div className="header-section d-flex justify-content-between align-items-center mb-3">
        <h1>Recurring Expense Manager</h1>
        <div className="summary-boxes d-flex">
          <div className="summary-box bg-primary text-white p-3 me-3">
            <h5>Recurring Expense</h5>
            <h3>{expenses.length}</h3>
          </div>
          <div className="summary-box bg-success text-white p-3 m-3 me-3">
            <h5>Amount</h5>
            <h3>${totalExpenses.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="action-buttons d-flex mb-3">
        <Button variant="success" className="me-2" onClick={handleAddExpense}>
          Add Recurring Expense
        </Button>
        <Button variant="warning" className="me-2">
          <FaFileExcel /> Export to Excel
        </Button>
        <Button variant="primary">
          <FaFilter /> Filter
        </Button>
      </div>

      {/* Expense Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expenses Category</th>
            <th>Description</th>
            <th>Date Day</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.dateDay}</td>
              <td>{expense.account}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.createdBy}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => setExpenses(expenses.filter((e) => e.id !== expense.id))}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecurringExpenseManager;
