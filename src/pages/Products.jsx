// Displays all products with filtering and pagination options
import React, { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchSafetyInfo } from '../data/fetch';
import ProductCard from '../components/ProductCard';
import Grid from '../components/Grid';
import CategoryMenu from '../components/CategoryMenu';
import { getItemsPerPage } from '../hooks/useResponsive';
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => 
    getItemsPerPage(typeof window !== 'undefined' ? window.innerWidth : 1200)
  );

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage(window.innerWidth);
      if (newItemsPerPage !== itemsPerPage) {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  // --- category filtering ---
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const setCats = new Set(products.map((p) => p.category).filter(Boolean));
    return Array.from(setCats).sort();
  }, [products]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const totalFilteredPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startFilteredIndex = (currentPage - 1) * itemsPerPage;
  const endFilteredIndex = startFilteredIndex + itemsPerPage;
  const currentFilteredProducts = filteredProducts.slice(startFilteredIndex, endFilteredIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add JSON-LD structured data for ItemList
    if (products.length > 0) {
      const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": product.title
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(itemListSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [products]);

  if (loading) {
    return (
      <div className="products-page">
        <div className="products-header">
          <h1>Loading Products...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our collection of premium tech products</p>
      </div>

      <CategoryMenu
        categories={categories}
        selected={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
        onSafetyInfoClick={async () => {
          const safetyInfo = await fetchSafetyInfo();
          if (safetyInfo && safetyInfo.fullDescription) {
            alert(safetyInfo.fullDescription);
          } else {
            alert('Safety information is currently unavailable.');
          }
        }}
      />

      <Grid>
        {currentFilteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <div className="pagination-numbers">
          {[...Array(totalFilteredPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-number ${
                currentPage === index + 1 ? 'active' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalFilteredPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
