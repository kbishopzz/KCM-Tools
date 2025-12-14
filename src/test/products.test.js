// Checks that products load correctly from the database
import { describe, it, expect, beforeAll } from 'vitest';

describe('Products Data', () => {
  let products = [];

  beforeAll(async () => {
    // Fetch products from JSON server or use static data
    try {
      const response = await fetch('http://localhost:3001/products');
      products = await response.json();
    } catch {
      // Fallback to local db.json if server not running
      const db = await import('../../db.json');
      products = db.products;
    }
  });

  it('all products have prices', () => {
    products.forEach((product) => {
      expect(product.price).toBeDefined();
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('all products have images', () => {
    products.forEach((product) => {
      expect(product.image).toBeDefined();
      expect(typeof product.image).toBe('string');
      expect(product.image.length).toBeGreaterThan(0);
    });
  });

  it('all products have required fields', () => {
    products.forEach((product) => {
      expect(product.id).toBeDefined();
      expect(product.title).toBeDefined();
      expect(product.description).toBeDefined();
    });
  });
});
