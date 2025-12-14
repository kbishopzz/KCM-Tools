// Tests for the checkout page functionality
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import { CartProvider } from '../context/CartContext';

// Mock cart with items for testing
const mockCartContext = {
  cartItems: [
    { id: 1, title: 'Test Product', price: 99.99, quantity: 1, image: 'test.jpg' }
  ],
  getCartTotal: () => 99.99,
  clearCart: vi.fn(),
};

vi.mock('../context/CartContext', async () => {
  const actual = await vi.importActual('../context/CartContext');
  return {
    ...actual,
    useCart: () => mockCartContext,
  };
});

describe('Checkout Page', () => {
  const renderCheckout = () => {
    return render(
      <MemoryRouter>
        <CartProvider>
          <Checkout />
        </CartProvider>
      </MemoryRouter>
    );
  };

  it('renders checkout form', () => {
    renderCheckout();
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Information/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', () => {
    renderCheckout();
    const submitButton = screen.getByText(/Place Order/i);
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
  });

  it('renders order summary with cart items', () => {
    renderCheckout();
    expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Place Order/i })).toBeInTheDocument();
  });
});
