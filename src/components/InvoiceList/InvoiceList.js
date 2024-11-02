import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceList = ({ invoices, deleteInvoice, continuePayment }) => {
    const [actionInvoice, setActionInvoice] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({});
    const navigate = useNavigate();


    const handleDelete = (id) => deleteInvoice(id);
    const handleEdit = (invoice) => navigate('/create-invoice', { state: { invoice } });
    const handlePrint = (invoice) => navigate('/print-invoice', { state: { invoice } });

    const toggleActionMenu = (id) => setActionInvoice(actionInvoice === id ? null : id);
    const openPaymentModal = (invoice) => {
        setPaymentDetails(invoice);
        setShowPaymentModal(true);
    };


    const handlePayment = () => {
        // Handle payment logic here
        continuePayment(paymentDetails); 

        setShowPaymentModal(false);
    };

    return (
        <div className="invoice-list" >
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
                        <th>Tax</th>
                        <th>Delivery</th>
                        <th>Date</th>
                        <th>Notes</th>
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
                            <td>{invoice.remainingBalance}</td>
                            <td>{invoice.tax}</td>
                            <td>{invoice.deliveryFee}</td>
                            <td>{invoice.createdAt}</td>
                            <td>{invoice.notes}</td>
                            <td>
                                <button className="action-btn" onClick={() => toggleActionMenu(invoice.id)}>Action</button>
                                {actionInvoice === invoice.id && (
                                    <ul className="action-menu">
                                        <button onClick={() => handleEdit(invoice)}>Edit</button>
                                        <button onClick={() => handleDelete(invoice.id)}>Delete</button>
                                        <button onClick={() => handlePrint(invoice)}>Print</button>
                                        {invoice.remainingBalance > 0 && (
                                            <button onClick={() => openPaymentModal(invoice)}>Rest of Payment</button>
                                        )}
                                    </ul>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPaymentModal &&  (
            <>
            <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}></div>
            <div className="modal ">
                <h3>Rest of Payment</h3>
                <p>Product Name: {paymentDetails.productName}</p>
                <p>Price: {paymentDetails.price}</p>
                <p>Amount Paid: {paymentDetails.amountPaid}</p>
                <input type="number" placeholder="Enter remaining amount" onChange={(e) => setPaymentDetails({ ...paymentDetails, newAmount: e.target.value })} />
                <button onClick={handlePayment}>Submit Payment</button>
                <button onClick={() => setShowPaymentModal(false)}>Close</button>
            </div>
            </>
            )}

        </div>
    );
};

export default InvoiceList;
