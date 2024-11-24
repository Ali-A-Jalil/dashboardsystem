import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const AddExpense = () => {
  const { expenses, setExpenses } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const editingExpense = location.state?.expense;

  const [expense, setExpense] = useState({
    serialNo: editingExpense?.serialNo || `SN${Date.now()}`,
    code: editingExpense?.code || `EXP${Date.now()}`,
    name: editingExpense?.name || '',
    amount: editingExpense?.amount || '',
    reason: editingExpense?.reason || '',
    date: editingExpense?.date || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingExpense) {
      setExpenses(
        expenses.map((exp) => (exp.code === expense.code ? expense : exp))
      );
    } else {
      setExpenses([...expenses, expense]);
    }
    navigate('/expense');
  };

  return (
    <div>
      <h2>{editingExpense ? 'Edit Expense' : 'Add Expense'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Expense Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={expense.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Control
            type="text"
            name="reason"
            value={expense.reason}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="success">
          {editingExpense ? 'Update' : 'Add'}
        </Button>
        <Button variant="secondary" onClick={() => navigate('/expense')}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddExpense;
