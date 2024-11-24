import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Expense = () => {
  const { expenses, setExpenses } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.code.includes(searchTerm) ||
      expense.serialNo.includes(searchTerm) ||
      expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (code) => {
    setExpenses(expenses.filter((expense) => expense.code !== code));
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Form.Control
          type="text"
          placeholder="Search by Code or Name"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px' }}
        />
        <Button onClick={() => navigate('/add-expense')} variant="primary">
          Add Expense
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Code</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.code}>
              <td>{expense.serialNo}</td>
              <td>{expense.code}</td>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.reason}</td>
              <td>{expense.date}</td>
              <td>
                <Button
                  size="sm"
                  onClick={() => navigate('/add-expense', { state: { expense } })}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(expense.code)}
                >
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

export default Expense;
