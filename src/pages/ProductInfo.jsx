// Detailed product page showing full information and reviews
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../data/fetch';
import { useCart } from '../context/CartContext';
import './ProductInfo.css';

export default function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  useEffect(() => {
    // Add JSON-LD structured data for Product
    if (product) {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(productSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  if (loading) {
    return (
      <div className="product-info-page">
        <div className="not-found">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-info-page">
        <div className="not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/products')} className="back-button">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-info-page">
      <button onClick={() => navigate('/products')} className="back-button">
        ← Back to Products
      </button>

      <div className="product-info-container">
        <div className="product-info-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info-details">
          <h1>{product.title}</h1>
          <div className="product-category">{product.category}</div>
          <p className="product-full-description">{product.fullDescription}</p>

          <div className="product-info-meta">
            <div className="product-info-price">${product.price.toFixed(2)}</div>
            <div className={`product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="add-to-cart-button"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <div className="product-features">
            <h3>Features:</h3>
            <ul>
              <li>Premium quality materials</li>
              <li>1-year warranty included</li>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
