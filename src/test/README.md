# Test Suite

## Overview

Simple test suite for the TechShop e-commerce application to ensure core functionality works as expected.

## What We Test

Our tests verify three critical areas of the application:

### **Navigation & Pages**

We check that users can successfully navigate to different pages and that each page displays the correct content. This ensures customers can browse the site without encountering broken pages or missing information.

### **Product Data Quality**

We verify that every product in our catalog has essential information like pricing and images. This prevents customers from seeing incomplete product listings that could harm their shopping experience.

### **Checkout Process**

We test that the checkout form works properly, including form validation to catch errors like missing information or invalid email addresses. This ensures customers can complete their purchases without frustration.

## Running Tests

```bash
# Run tests once
npm run test:run

# Run tests in watch mode
npm test
```

## Test Files

### `routes.test.jsx`

**What it checks:** Can users access the main pages of the site?

- Home page displays the welcome message
- Products page shows the product catalog

### `products.test.js`

**What it checks:** Is our product data complete and valid?

- Every product has a price listed
- Every product has an image to display
- All products include basic information customers need

### `checkout.test.jsx`

**What it checks:** Can customers complete their purchase?

- Checkout form appears when there are items in the cart
- Form validation catches missing required information
- Order summary accurately reflects cart contents

## Configuration

- **vitest.config.js** - Vitest configuration with jsdom environment
- **src/test/setup.js** - Test setup with @testing-library/jest-dom
- **package.json** - Scripts: `test` (watch mode), `test:run` (single run)
