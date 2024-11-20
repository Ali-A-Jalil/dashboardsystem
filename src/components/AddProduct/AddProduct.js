import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    code: '',
    images: [],
    name: '',
    price: 0,
    tax: 0,
    manufacturer: '',
    stock: 0,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddProductSubmit = (e) => {
    e.preventDefault();

    // **التحقق من صحة الإدخال**
    if (!newProduct.name || newProduct.price <= 0 || newProduct.tax < 0 || !newProduct.manufacturer) {
      setError('Please fill in all required fields correctly.');
      return;
    }

    // **حساب التفاصيل**
    const newCode = `P${Date.now().toString().slice(-5)}`;
    const taxAmount = (newProduct.price * newProduct.tax) / 100;
    const totalPrice = newProduct.price + taxAmount;

    const productToAdd = {
      id: Date.now(),
      serialNo: Date.now().toString().slice(-5),
      code: newCode,
      images: newProduct.images,
      name: newProduct.name,
      price: newProduct.price,
      tax: `${newProduct.tax}%`,
      totalPrice,
      manufacturer: newProduct.manufacturer,
      stock: newProduct.stock,
    };

    onAddProduct(productToAdd);
    navigate('/product-list');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      images: [...prevProduct.images, ...imageURLs],
    }));
  };

  const resetForm = () => {
    setNewProduct({
      code: '',
      images: [],
      name: '',
      price: 0,
      tax: 0,
      manufacturer: '',
      stock: 0,
    });
    setError('');
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleAddProductSubmit}>
        {/* **إضافة صور المنتج** */}
        <Form.Group controlId="productImages">
          <Form.Label>Product Images</Form.Label>
          <Form.Control
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="image-preview">
            {newProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index}`}
                style={{ width: '100px', marginRight: '10px', borderRadius: '5px' }}
              />
            ))}
          </div>
        </Form.Group>

        {/* **إدخال اسم المنتج** */}
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
        </Form.Group>

        {/* **إدخال السعر** */}
        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            required
            min="0"
          />
        </Form.Group>

        {/* **إدخال الضريبة** */}
        <Form.Group controlId="productTax">
          <Form.Label>Tax (%)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter tax percentage"
            value={newProduct.tax}
            onChange={(e) => setNewProduct({ ...newProduct, tax: parseFloat(e.target.value) })}
            required
            min="0"
          />
        </Form.Group>

        {/* **اسم الشركة المصنعة** */}
        <Form.Group controlId="manufacturerName">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control
            as="select"
            value={newProduct.manufacturer}
            onChange={(e) => setNewProduct({ ...newProduct, manufacturer: e.target.value })}
            required
          >
            <option value="">Select Manufacturer</option>
            <option value="Manufacturer A">Manufacturer A</option>
            <option value="Manufacturer B">Manufacturer B</option>
            <option value="Manufacturer C">Manufacturer C</option>
          </Form.Control>
        </Form.Group>

        {/* **إدخال المخزون** */}
        <Form.Group controlId="unitsInStock">
          <Form.Label>Units in Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter units in stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
            required
            min="0"
          />
        </Form.Group>

        {/* **الأزرار** */}
        <div className="form-actions">
          <Button variant="success" type="submit">
            Add Product
          </Button>
          <Button variant="secondary" onClick={resetForm} className="ms-2">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
