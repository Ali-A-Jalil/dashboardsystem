import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header'; // Adjust the import path as necessary
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/Img/8.webp';
const InvoicePrint = () => {
  const { state: { invoice } } = useLocation();

  return (
    <div className="app-container">
      <Header /> {/* Display Header */}
      <div className="main d-flex">
        <Sidebar /> {/* Display Sidebar */}
        <div className="content">
          <div className="invoice-print">
            <div className="invoice-logo">
              <img src={logo} alt="Company Logo" />
              <h1>Trust Group</h1>
            </div>
            <h2>Invoice Details</h2>
            <p><strong>Client Name:</strong> {invoice.customerName}</p>
            <p><strong>Phone:</strong> {invoice.phoneNumber}</p>
            <p><strong>Address:</strong> {invoice.address}</p>
            <p><strong>Product Name:</strong> {invoice.productName}</p>
            <p><strong>Quantity:</strong> {invoice.quantity}</p>
            <p><strong>Order Price:</strong> ${invoice.price}</p>
            <p><strong>Tax:</strong> ${invoice.tax}</p>
            <p><strong>Delivery Fee:</strong> ${invoice.deliveryFee}</p>
            <p><strong>Amount Paid:</strong> ${invoice.amountPaid}</p>
            <p><strong>Remaining Balance:</strong> ${invoice.remainingBalance}</p>
            <p><strong>Discount:</strong> ${invoice.discount}</p>
            <p><strong>Total Price:</strong> ${invoice.totalAmount}</p>
            <button onClick={() => window.print()}>Print</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePrint;
