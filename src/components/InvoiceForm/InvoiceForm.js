import React, { useState, useEffect } from 'react';

// بيانات المنتجات الوهمية
const mockProducts = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
  { id: 3, name: 'Product C', price: 200 },
];

const InvoiceForm = ({
  products = mockProducts, // استخدام المنتجات الوهمية كقيمة افتراضية
  addInvoice,
  editInvoice,
  invoiceToEdit = null,
  onCancel,
}) => {
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

  // **ملء الحقول عند تعديل الفاتورة**
  useEffect(() => {
    if (invoiceToEdit) {
      setCustomerName(invoiceToEdit.customerName || '');
      setPhoneNumber(invoiceToEdit.phoneNumber || '');
      setAddress(invoiceToEdit.address || '');
      setProductName(invoiceToEdit.productName || '');
      setQuantity(invoiceToEdit.quantity || 1);
      setPrice(invoiceToEdit.price || 0);
      setDeliveryFee(invoiceToEdit.deliveryFee || 0);
      setAmountPaid(invoiceToEdit.amountPaid || 0);
      setRemainingBalance(invoiceToEdit.remainingBalance || 0);
      setNotes(invoiceToEdit.notes || '');
      setFollowUpDate(invoiceToEdit.followUpDate || '');
      setDiscount(invoiceToEdit.discount || 0);
    }
  }, [invoiceToEdit]);

  // **تحديث السعر عند اختيار المنتج**
  const handleProductChange = (e) => {
    const selectedProduct = products.find((product) => product.name === e.target.value);
    setProductName(selectedProduct?.name || '');
    setPrice(selectedProduct?.price || 0);
  };

  // **حساب الرصيد المتبقي**
  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value || 0);
    setAmountPaid(amount);
    const total = quantity * price + parseFloat(deliveryFee || 0) - parseFloat(discount || 0);
    setRemainingBalance(total - amount);
  };

  // **إضافة/تحديث الفاتورة**
  const handleSubmit = (e) => {
    e.preventDefault();
    const tax = (0.14 * quantity * price).toFixed(2);
    const totalAmount = (
      quantity * price +
      parseFloat(tax) +
      parseFloat(deliveryFee || 0) - 
      parseFloat(discount || 0)
    ).toFixed(2);

    const invoice = {
      id: invoiceToEdit ? invoiceToEdit.id : Date.now(),
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
      createdAt: invoiceToEdit ? invoiceToEdit.createdAt : new Date().toLocaleString(),
      followUpDate,
    };

    if (invoiceToEdit) {
      editInvoice(invoice);
    } else {
      addInvoice(invoice);
    }

    alert(`Invoice ${invoiceToEdit ? 'updated' : 'added'} successfully!`);
    resetForm();
  };

  // **إعادة ضبط الحقول**
  const resetForm = () => {
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
      <h2>{invoiceToEdit ? 'Edit Invoice' : 'Add Invoice'}</h2>
      <div className="form-group">
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Product Name:</label>
        <select value={productName} onChange={handleProductChange} required>
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Units:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value || 1))}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Price per unit:</label>
        <input type="number" value={price} disabled />
      </div>
      <div className="form-group">
        <label>Delivery Fees:</label>
        <input
          type="number"
          value={deliveryFee}
          onChange={(e) => setDeliveryFee(parseFloat(e.target.value || 0))}
          min="0"
        />
      </div>
      <div className="form-group">
        <label>Amount Paid:</label>
        <input
          type="number"
          value={amountPaid}
          onChange={handleAmountChange}
          min="0"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {invoiceToEdit ? 'Update Invoice' : 'Add Invoice'}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onCancel || resetForm}
      >
        Cancel
      </button>
    </form>
  );
};

export default InvoiceForm;
