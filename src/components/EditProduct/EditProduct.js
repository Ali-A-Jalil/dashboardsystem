import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const EditProduct = ({ product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [error, setError] = useState(''); // للتحقق من الأخطاء
  const [successMessage, setSuccessMessage] = useState(''); // لعرض رسالة نجاح

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setEditedProduct({
      ...editedProduct,
      images: [...(editedProduct.images || []), ...imageURLs],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من صحة البيانات المدخلة
    if (!editedProduct.name || editedProduct.price <= 0) {
      setError('Product name and price are required, and price must be greater than 0.');
      return;
    }

    setError('');
    onSave(editedProduct); // استدعاء دالة الحفظ
    setSuccessMessage('Product updated successfully!');

    // إعادة تعيين رسالة النجاح بعد 3 ثوانٍ
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={editedProduct.name || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={editedProduct.price || ''}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })
            }
            min="0.01"
            step="0.01"
            required
          />
        </Form.Group>

        <Form.Group controlId="productImages">
          <Form.Label>Product Images</Form.Label>
          <Form.Control type="file" multiple onChange={handleImageChange} />
          <div className="image-preview mt-3">
            {editedProduct.images &&
              editedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  style={{ width: '100px', marginRight: '10px' }}
                />
              ))}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
