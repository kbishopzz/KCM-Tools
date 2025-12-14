// Handles loading product and safety information from the database
const API_URL = 'http://localhost:3001/products';

// Fetch all products from JSON Server
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// Fetch Safety Info
export const fetchSafetyInfo = async () => {
  try {
    const response = await fetch('http://localhost:3001/Safety%20Info');
    if (!response.ok) {
      throw new Error('Failed to fetch safety info');
    }
    const data = await response.json();
    return data[0]; // Return first item
  } catch (error) {
    console.error('Error fetching safety info:', error);
    return null;
  }
};

// Legacy export for backward compatibility (deprecated)
export const products = [];
