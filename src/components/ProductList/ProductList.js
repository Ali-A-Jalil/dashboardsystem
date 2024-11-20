import React, { useState, useRef, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products = [], onDeleteProduct, onEditProduct }) => {
  const navigate = useNavigate();
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const actionMenuRef = useRef(null);

  useEffect(() => {
    // Close action menu when clicking outside
    const handleClickOutside = (event) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setShowActionMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleActionMenuToggle = (id) => {
    setShowActionMenu(showActionMenu === id ? null : id);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      onDeleteProduct(selectedProduct.id); // التأكد من تنفيذ الوظيفة
    }
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const name = product.name?.toLowerCase() || "";
    const code = product.code?.toLowerCase() || "";
    const price = product.price?.toString() || "";
    const serialNo = product.serialNo?.toString() || "";

    return (
      name.includes(searchTerm) ||
      code.includes(searchTerm) ||
      price.includes(searchTerm) ||
      serialNo.includes(searchTerm)
    );
  });

  return (
    <div className="product-list">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search by name, code, price, or serial no."
          className="form-control"
          style={{ maxWidth: "300px" }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button variant="secondary">Download Excel</Button>
        <Button variant="success" onClick={() => navigate("/add-product")}>
          Add Product
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Product Code</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Total Price</th>
            <th>Manufacturer</th>
            <th>Units in Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id || index}>
                <td>{product.serialNo || "N/A"}</td>
                <td>{product.code || "N/A"}</td>
                <td>
                  <img
                    src={product.image || "placeholder.png"}
                    alt={product.name || "No Image"}
                    width="50"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                </td>
                <td>{product.name || "Unnamed Product"}</td>
                <td>{product.price || "0.00"}</td>
                <td>{product.tax || "0.00"}</td>
                <td>{product.totalPrice || "0.00"}</td>
                <td>{product.manufacturer || "Unknown"}</td>
                <td>{product.stock || "0"}</td>
                <td ref={actionMenuRef}>
                  <div className="action-wrapper">
                    <Button
                      variant="link"
                      onClick={() => handleActionMenuToggle(product.id)}
                      className="action-button"
                    >
                      Action
                    </Button>
                    {showActionMenu === product.id && (
                      <div className="action-menu shadow">
                        <Button
                          variant="primary"
                          onClick={() => onEditProduct(product)} // التأكد من استدعاء الدالة
                          className="action-item"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteClick(product)}
                          className="action-item"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="info"
                          onClick={() => navigate("/create-invoice", { state: { product } })}
                          className="action-item"
                        >
                          Create Invoice
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => navigate(`/view-product/${product.id}`)}
                          className="action-item"
                        >
                          View
                        </Button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the product "{selectedProduct?.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
