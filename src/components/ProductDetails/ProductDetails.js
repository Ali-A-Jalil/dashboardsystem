import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ fetchProductById }) => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch product by ID when the component mounts
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          if (fetchedProduct.images && fetchedProduct.images.length > 0) {
            setMainImage(fetchedProduct.images[0]); // Set the first image as the default
          }
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

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-left">
        <div className="main-image">
          <img src={mainImage} alt="Product" />
        </div>
        <div className="thumbnails">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setMainImage(image)}
              className={mainImage === image ? 'active-thumbnail' : ''}
            />
          ))}
        </div>
      </div>
      <div className="product-details-right">
        <h2>{product.name}</h2>
        <p><strong>Manufacturer:</strong> {product.manufacturer || 'N/A'}</p>
        <p><strong>Units in Stock:</strong> {product.stock || 0}</p>
        <p><strong>Units Sold:</strong> {product.unitsSold || 0}</p>
        <p><strong>Units Returned:</strong> {product.unitsReturned || 0}</p>
        <p><strong>Price per Unit:</strong> ${product.price || '0.00'}</p>
        <p><strong>Total Sales:</strong> ${product.unitsSold ? product.unitsSold * product.price : '0.00'}</p>
        <p><strong>Defective Units:</strong> {product.defectiveUnits || 0}</p>
        <p><strong>Total Loss (Defective):</strong> ${product.defectiveUnits ? product.defectiveUnits * product.price : '0.00'}</p>
        <p><strong>Details:</strong> {product.details || 'No details available'}</p>
        <div className="social-icons">
          {product.facebook && (
            <Button variant="link" onClick={() => window.open(product.facebook, '_blank')}>
              <FaFacebook />
            </Button>
          )}
          {product.instagram && (
            <Button variant="link" onClick={() => window.open(product.instagram, '_blank')}>
              <FaInstagram />
            </Button>
          )}
          {product.website && (
            <Button variant="link" onClick={() => window.open(product.website, '_blank')}>
              <FaGlobe />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
