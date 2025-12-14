// Search bar with live suggestions that helps users find products
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../data/fetch';
import './SearchBar.css';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from JSON server
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Use useMemo to filter products instead of useEffect with setState
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  useEffect(() => {
    setShowResults(searchTerm.trim().length > 0);
  }, [searchTerm]);

  const handleProductClick = (productId) => {
    setSearchTerm('');
    setShowResults(false);
    navigate(`/product/${productId}`);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <div className="search-input-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      {showResults && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.title} className="search-result-image" />
              <div className="search-result-info">
                <div className="search-result-title">{product.title}</div>
                <div className="search-result-category">{product.category}</div>
                <div className="search-result-price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showResults && filteredProducts.length === 0 && searchTerm.trim() && (
        <div className="search-results">
          <div className="search-no-results">No products found</div>
        </div>
      )}
    </div>
  );
}
