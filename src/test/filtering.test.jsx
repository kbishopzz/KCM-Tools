// Tests for category filtering functionality
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Products from '../pages/Products';

// Mock fetch to return two categories
/* eslint-disable no-undef */
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, title: 'Headphones', price: 199.99, image: 'h.jpg', category: 'Electronics', description: 'x' },
      { id: 2, title: 'Backpack', price: 79.99, image: 'b.jpg', category: 'Accessories', description: 'y' }
    ]),
  })
);

describe('Category filtering', () => {
  it('shows all products initially and filters when category clicked', async () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Products />
        </CartProvider>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText(/Our Products/i)).toBeInTheDocument());

    // Both product titles should be visible
    expect(screen.getByText(/Headphones/i)).toBeInTheDocument();
    expect(screen.getByText(/Backpack/i)).toBeInTheDocument();

    // Click on Electronics category
    const electronicsBtn = screen.getByText('Electronics');
    fireEvent.click(electronicsBtn);

    // Now only Headphones should be visible
    expect(screen.getByText(/Headphones/i)).toBeInTheDocument();
    expect(screen.queryByText(/Backpack/i)).toBeNull();
  });
});
