import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import ChangePassword from './components/ChangePassword/ChangePassword';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import InvoiceList from './components/InvoiceList/InvoiceList';
import InvoicePrint from './components/InvoicePrint/InvoicePrint';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [invoices, setInvoices] = useState([]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  const editInvoice = (updatedInvoice) => {
    setInvoices(invoices.map(invoice => invoice.id === updatedInvoice.id ? updatedInvoice : invoice));
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Header user={loggedInUser} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} onLogout={handleLogout} />}
      <div className='main d-flex'>
        {isLoggedIn && (
          <div className='sidebarWrapper'>
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
        )}
        <div className='content'>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/change-password" element={isLoggedIn ? <ChangePassword /> : <Navigate to="/" />} />
            <Route path="/create-invoice" element={isLoggedIn ? <InvoiceForm addInvoice={addInvoice} /> : <Navigate to="/" />} />
            <Route path="/invoices-list" element={isLoggedIn ? <InvoiceList invoices={invoices} deleteInvoice={deleteInvoice} editInvoice={editInvoice} /> : <Navigate to="/" />} />
            <Route path="/print-invoice" element={isLoggedIn ? <InvoicePrint /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
