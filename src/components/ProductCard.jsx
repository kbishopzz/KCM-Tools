// Individual product card showing image, title, price, and add to cart button
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ id, title, description, image, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id, title, description, image, price });
    alert(`${title} added to cart!`);
  };

  return (
    <div className='product-card'>
      <Link to={`/product/${id}`}>
        {image && <img src={image} alt={title} className='product-image' />}
      </Link>
      <div className='product-content'>
        <div>
          <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className='product-price'>${price.toFixed(2)}</p>
          </Link>
        </div>
        <button 
          className='add-to-cart' 
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
