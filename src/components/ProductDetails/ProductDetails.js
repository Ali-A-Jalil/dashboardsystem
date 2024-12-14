import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGlobe, FaPlus, FaMinus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ fetchProductById }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  
  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setMainImage(fetchedProduct.images?.[0] || '');
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [fetchProductById, productId]);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setQuantity(1);
  };

    const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    if (quantity === 1) {
      setIsAddedToCart(false);
    }
  };


  // Loading state
  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  // Error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Empty product state
  if (!product) {
    return <div className="no-product">No product details available</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-wrapper d-flex">
        {/* Left Section: Main Image and Thumbnails */}
        <div className="product-details-left">
          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>
          <div className="thumbnails">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(image)}
                className={mainImage === image ? 'active-thumbnail' : ''}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="product-details-right">
          <h2>{product.name}</h2>
          <p>
            <strong>Manufacturer:</strong> {product.manufacturer || 'N/A'}
          </p>
          <p>
            <strong>Units in Stock:</strong> {product.stock || 0}
          </p>
          <p>
            <strong>Units Sold:</strong> {product.unitsSold || 0}
          </p>
          <p>
            <strong>Units Returned:</strong> {product.unitsReturned || 0}
          </p>
          <p>
            <strong>Price per Unit:</strong> ${product.price || '0.00'}
          </p>
          <p>
            <strong>Total Sales:</strong> $
            {product.unitsSold ? product.unitsSold * product.price : '0.00'}
          </p>
          <p>
            <strong>Defective Units:</strong> {product.defectiveUnits || 0}
          </p>
          <p>
            <strong>Total Loss (Defective):</strong> $
            {product.defectiveUnits
              ? product.defectiveUnits * product.price
              : '0.00'}
          </p>
          <p>
            <strong>Details:</strong> {product.details || 'No details available'}
          </p>

          {/* Add to Cart Section */}
          <div className="add-to-cart-section">
            {!isAddedToCart ? (
              <Button
                variant="primary"
                onClick={handleAddToCart}
                className="add-to-cart-btn"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="quantity-control">
                <Button
                  variant="outline-danger"
                  onClick={handleDecreaseQuantity}
                  className="quantity-btn"
                >
                  <FaMinus />
                </Button>
                <span className="quantity-display">{quantity}</span>
                <Button
                  variant="outline-success"
                  onClick={handleIncreaseQuantity}
                  className="quantity-btn"
                >
                  <FaPlus />
                </Button>
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            {product.facebook && (
              <Button
                variant="link"
                onClick={() => window.open(product.facebook, '_blank')}
                className="social-btn"
              >
                <FaFacebook />
              </Button>
            )}
            {product.instagram && (
              <Button
                variant="link"
                onClick={() => window.open(product.instagram, '_blank')}
                className="social-btn"
              >
                <FaInstagram />
              </Button>
            )}
            {product.website && (
              <Button
                variant="link"
                onClick={() => window.open(product.website, '_blank')}
                className="social-btn"
              >
                <FaGlobe />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
