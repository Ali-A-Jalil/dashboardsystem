import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DailyDashboard from './pages/placeholders/DailyDashboard';
import MonthlyDashboard from './pages/placeholders/MonthlyDashboard';
import ChartDashboard from './pages/placeholders/ChartDashboard';
import Forecasts from './pages/placeholders/Forecasts';
import ProductView from './pages/placeholders/ProductView';
import OrderList from './pages/placeholders/OrderList';
import NewMessages from './pages/placeholders/NewMessages';
import OldMessages from './pages/placeholders/OldMessages';
import TodayReminders from './pages/placeholders/TodayReminders';
import UpcomingReminders from './pages/placeholders/UpcomingReminders';
import InvoicesList from './pages/placeholders/InvoicesList';
import CreateInvoice from './pages/placeholders/CreateInvoice';
import Employee from './pages/placeholders/Employee';
import Payroll from './pages/placeholders/Payroll';
import Calendar from './pages/placeholders/Calendar';
import Task from './pages/placeholders/Task';
import ExpenseManager from './components/ExpenseManager/ExpenseManager'; // Import ExpenseManager
import RecurringExpenseManager from "./components/RecurringExpenseManager/RecurringExpenseManager"; // Import the component
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
import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const fetchProductById = async (id) => {
    return {
      id,
      name: "Sample Product",
      manufacturer: "Sample Manufacturer",
      stock: 100,
      unitsSold: 50,
      unitsReturned: 5,
      price: 20,
      defectiveUnits: 2,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/100"],
      details: "This is a sample product description.",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    };
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Products Management
  const [products, setProducts] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const addInvoice = (invoice) => {
    setInvoices((prev) => [...prev, { ...invoice, id: Date.now() }]);
  };

  const editInvoice = (updatedInvoice) => {
    setInvoices((prev) =>
      prev.map((invoice) => (invoice.id === updatedInvoice.id ? updatedInvoice : invoice))
    );
  };

  const deleteInvoice = (id) => {
    setInvoices((prev) => prev.filter((invoice) => invoice.id !== id));
  };

  const continuePayment = (invoiceId, amount) => {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === invoiceId
          ? { ...invoice, amountPaid: invoice.amountPaid + amount }
          : invoice
      )
    );
  };

  return (
    <BrowserRouter>
      {isLoggedIn && (
        <Header
          user={loggedInUser}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onLogout={handleLogout}
        />
      )}
      <div className="main d-flex">
        {isLoggedIn && (
          <div className="sidebarWrapper">
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
        )}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/change-password"
              element={isLoggedIn ? <ChangePassword /> : <Navigate to="/" />}
            />
            <Route
              path="/create-invoice"
              element={
                isLoggedIn ? (
                  <InvoiceForm addInvoice={addInvoice} editInvoice={editInvoice} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/invoices-list"
              element={
                isLoggedIn ? (
                  <InvoiceList
                    invoices={invoices}
                    deleteInvoice={deleteInvoice}
                    continuePayment={continuePayment}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/print-invoice/:invoiceId"
              element={isLoggedIn ? <InvoicePrint /> : <Navigate to="/" />}
            />
            <Route
              path="/product-list"
              element={
                isLoggedIn ? (
                  <ProductList
                    products={products}
                    onEditProduct={editProduct}
                    onDeleteProduct={deleteProduct}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/add-product"
              element={isLoggedIn ? <AddProduct onAddProduct={addProduct} /> : <Navigate to="/" />}
            />
            <Route
              path="/view-product/:productId"
              element={isLoggedIn ? <ProductDetails products={products} /> : <Navigate to="/" />}
            />
            <Route
              path="/product-details/:productId"
              element={<ProductDetails fetchProductById={fetchProductById} />}
            />
            <Route path="/expense-manager" element={<ExpenseManager />} /> {/* Expense Manager Route */}
            <Route
              path="/recurring-expense"
              element={<RecurringExpenseManager />} // Navigate to Recurring Expense Manager
            />
            <Route path="/dailydashboard" element={<DailyDashboard />} />
            <Route path="/monthlydashboard" element={<MonthlyDashboard />} />
            <Route path="/chartdashboard" element={<ChartDashboard />} />
            <Route path="/forecasts" element={<Forecasts />} />
            <Route path="/productview" element={<ProductView />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/newmessages" element={<NewMessages />} />
            <Route path="/oldmessages" element={<OldMessages />} />
            <Route path="/todayreminders" element={<TodayReminders />} />
            <Route path="/upcomingreminders" element={<UpcomingReminders />} />
            <Route path="/invoiceslist" element={<InvoicesList />} />
            <Route path="/createinvoice" element={<CreateInvoice />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
