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
import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // إدارة المنتجات
  const [products, setProducts] = useState([]);

  // إدارة الفواتير
  const [invoices, setInvoices] = useState([]);

  // تسجيل الدخول والخروج
  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  // إدارة المنتجات
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

  // إدارة الفواتير
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
                    onEditProduct={editProduct} // تصحيح التمرير
                    onDeleteProduct={deleteProduct} // تصحيح التمرير
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
