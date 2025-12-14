// Tests for page routing functionality
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Home from '../pages/Home';
import Products from '../pages/Products';

// Mock fetch for products
/* eslint-disable no-undef */
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, title: 'Test Product', price: 99.99, image: 'test.jpg', description: 'Test' }
    ]),
  })
);

describe('Routes', () => {
  it('renders home page', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Home />
        </CartProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to KCM/i)).toBeInTheDocument();
  });

  it('renders products page', async () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Products />
        </CartProvider>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
    });
  });
});
