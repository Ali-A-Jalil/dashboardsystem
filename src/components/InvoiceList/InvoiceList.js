import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const InvoiceList = ({ invoices, deleteInvoice, continuePayment }) => {
  const [actionInvoice, setActionInvoice] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [amountToPay, setAmountToPay] = useState(''); // مبلغ يتم إدخاله
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      deleteInvoice(id);
    }
  };

  const handleEdit = (invoice) => navigate('/create-invoice', { state: { invoice } });
  const handlePrint = (invoice) => navigate('/print-invoice', { state: { invoice } });

  const toggleActionMenu = (id) => setActionInvoice(actionInvoice === id ? null : id);

  const openPaymentModal = (invoice) => {
    setPaymentDetails(invoice);
    setAmountToPay(''); // إعادة تعيين القيمة
    setShowPaymentModal(true);
  };

  const handleSavePayment = () => {
    const updatedAmountPaid = parseFloat(paymentDetails.amountPaid) + parseFloat(amountToPay || 0);
    const updatedInvoice = { ...paymentDetails, amountPaid: updatedAmountPaid };

    continuePayment(paymentDetails.id, updatedAmountPaid);
    setShowPaymentModal(false);
    setPaymentDetails({});
  };

  return (
    <div className="invoice-list">
      <h2>Invoice List</h2>
      <div className="content-section">
        <table className="invoice-table">
          <thead className="table-header">
            <tr>
              <th>Serial Number</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Product Name</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Amount Paid</th>
              <th>Remaining Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.phoneNumber}</td>
                <td>{invoice.address}</td>
                <td>{invoice.productName}</td>
                <td>{invoice.quantity}</td>
                <td>{invoice.price}</td>
                <td>{invoice.amountPaid}</td>
                <td>{invoice.price * invoice.quantity + invoice.deliveryFee - invoice.amountPaid}</td>
                <td>
                  <button className="action-btn" onClick={() => toggleActionMenu(invoice.id)}>
                    Action
                  </button>
                  {actionInvoice === invoice.id && (
                    <ul className="action-menu">
                      <li onClick={() => handleEdit(invoice)}>Edit</li>
                      <li onClick={() => handleDelete(invoice.id)}>Delete</li>
                      <li onClick={() => handlePrint(invoice)}>Print</li>
                      <li onClick={() => openPaymentModal(invoice)}>Rest of Payment</li>
                      <li onClick={() => navigate('/refund', { state: {invoice } })}>Refund</li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Rest of Payment */}
      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Rest of Payment</h3>
            <p>
              <strong>Paid Amount:</strong> ${paymentDetails.amountPaid}
            </p>
            <p>
              <strong>Total Price:</strong> ${paymentDetails.price * paymentDetails.quantity}
            </p>
            <p>
              <strong>Remaining Balance:</strong>{' '}
              ${paymentDetails.price * paymentDetails.quantity + paymentDetails.deliveryFee - paymentDetails.amountPaid}
            </p>
            <div className="input-group">
              <label htmlFor="amountToPay">Enter Amount to Pay:</label>
              <input
                type="number"
                id="amountToPay"
                placeholder="Amount to pay"
                value={amountToPay}
                onChange={(e) => setAmountToPay(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button className="save-btn" onClick={handleSavePayment}>
                Save
              </button>
              <button className="close-btn" onClick={() => setShowPaymentModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceList;
