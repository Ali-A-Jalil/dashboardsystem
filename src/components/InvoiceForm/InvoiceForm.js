import React, { useState } from 'react';

const products = {
    "Product A": 100,
    "Product B": 150,
    "Product C": 200,
};

const InvoiceForm = ({ addInvoice }) => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [amountPaid, setAmountPaid] = useState(0);
    const [remainingBalance, setRemainingBalance] = useState(0);
    const [notes, setNotes] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        setProductName(selectedProduct);
        setPrice(products[selectedProduct] || 0);
    };

    const handleAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setAmountPaid(amount);
        setRemainingBalance((quantity * price + parseFloat(deliveryFee)) - amount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tax = (0.14 * quantity * price).toFixed(2);
        const totalAmount = (quantity * price + parseFloat(tax) + parseFloat(deliveryFee)).toFixed(2);

        const invoice = {
            id: Date.now(),
            customerName,
            phoneNumber,
            address,
            productName,
            quantity,
            price,
            tax,
            deliveryFee,
            totalAmount,
            amountPaid,
            remainingBalance,
            discount,
            notes,
            createdAt: new Date().toLocaleString(),
            followUpDate,
        };
        addInvoice(invoice);

        // Reset the form
        setCustomerName('');
        setPhoneNumber('');
        setAddress('');
        setProductName('');
        setQuantity(1);
        setPrice(0);
        setDeliveryFee(0);
        setAmountPaid(0);
        setRemainingBalance(0);
        setDiscount(0);
        setNotes('');
        setFollowUpDate('');
    };

    return (
        <form className="invoice-form" onSubmit={handleSubmit}>
            <div className="customerName">
                <label>Customer Name:</label>
                <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
            </div>
            <div className="phoneNumber">
                <label>Phone Number:</label>
                <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div className="address">
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="productName">
                <label>Product Name:</label>
                <select value={productName} onChange={handleProductChange} required>
                    <option value="">Select Product</option>
                    {Object.keys(products).map((product) => (
                        <option key={product} value={product}>
                            {product}
                        </option>
                    ))}
                </select>
            </div>
            <div className="quantity">
                <label>Units:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
            </div>
            <div className="price">
                <label>Price per unit:</label>
                <input type="number" value={price} disabled />
            </div>
            <div className="deliveryFee">
                <label>Delivery Fees:</label>
                <input type="number" value={deliveryFee} onChange={(e) => setDeliveryFee(e.target.value)} min="0" />
            </div>
            <div className="amountPaid">
                <label>Amount Paid:</label>
                <input type="number" value={amountPaid} onChange={handleAmountChange} min="0" />
            </div>
            <div className="remainingBalance">
                <label>Remaining Balance:</label>
                <input type="number" value={remainingBalance} disabled />
            </div>
            <div className="remainingBalance">
                <label>Discount:</label>
                <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} min="0" />
            </div>
            <div className="followUpDate">
                <label>Time And Date For Reminder:</label>
                <input type="date" value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} />
            </div>
            <div className="notes">
                <label>Notes:</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
            <button className="add-btn" type="submit">Add Invoice</button>
        </form>
    );
};

export default InvoiceForm;
