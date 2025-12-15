# 🛠️ KCM Tools

### Your One-Stop Shop for Quality Tools and Equipment

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)![React Router](https://img.shields.io/badge/React_Router-7.10.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0--beta.3-000000?style=for-the-badge&logo=json&logoColor=white)

---

## 📖 About

KCM Tools is a modern e-commerce website for browsing and purchasing quality tools and equipment. Built as a school project, it provides a complete online shopping experience from product browsing to checkout.

## ✨ Features

- 🏠 **Homepage** - Welcome page with featured content
- 🛍️ **Product Catalog** - Browse all available tools and equipment
- 🔍 **Smart Search** - Find products quickly with live suggestions
- 📂 **Category Filters** - Filter products by category
- 🛒 **Shopping Cart** - Add items and manage your cart
- 💳 **Checkout** - Complete your purchase with a simple form
- ℹ️ **About Us** - Learn about KCM Tools
- 📞 **Contact** - Get in touch with customer support
- ⚠️ **Safety Info** - Important safety guidelines

## 🚀 Technology Stack

### Frontend

- **React 19** - Modern UI framework
- **React Router** - Page navigation and routing
- **Vite** - Fast development and build tool
- **CSS3** - Responsive styling with custom properties

### Backend

- **JSON Server** - Mock REST API for product data

### Testing

- **Vitest** - Fast unit testing framework
- **Testing Library** - Component testing utilities

### Development Tools

- **ESLint** - Code quality and consistency
- **Stylelint** - CSS linting
- **Concurrently** - Run multiple scripts together

## 🎨 Design Features

- 🎨 Custom color scheme with blue, yellow, and red accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible with proper ARIA labels
- 🎯 Clean and intuitive user interface
- 🔄 Smooth animations and transitions

## 🏃 Getting Started

### Prerequisites

- Node.js installed on your computer
- npm (comes with Node.js)

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>cd T2-finalSprint-Group
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm run dev:all
    ```

    This runs both the React app and the JSON Server:
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - API: [http://localhost:3001](http://localhost:3001)

### Available Scripts

- `npm run dev` - Start the React development server
- `npm run api` - Start the JSON Server
- `npm run dev:all` - Run both servers together
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Check code quality
- `npm run lint:css` - Check CSS quality

## 📁 Project Structure

```
src/├── components/     # Reusable UI components (Navbar, Cards, etc.)├── pages/          # Main page components (Home, Products, Cart, etc.)├── context/        # Shopping cart state management├── hooks/          # Custom React hooks (responsive design)├── styles/         # Global styles and variables├── data/           # API data fetching functions└── test/           # Test files
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

All tests check:

- Product data loading
- Category filtering
- Checkout form validation`​`
- Page routing

## 👥 Team

This project was created as a group assignment for Keyin College's Software Development program.

<table>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/👨‍💻-Charles_Rubia-blue?style=for-the-badge" alt="Charles Rubia"/><br/>
      <strong>Charles Rubia</strong><br/>
      <sub>Data Integration & Database</sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/👨‍💻-Matt_Reid-green?style=for-the-badge" alt="Matt Reid"/><br/>
      <strong>Matt Reid</strong><br/>
      <sub>Visual Design & UX/UI</sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/👨‍💻-Keith_Bishop-orange?style=for-the-badge" alt="Keith Bishop"/><br/>
      <strong>Keith Bishop</strong><br/>
      <sub>Development & Implementation</sub>
    </td>
  </tr>
</table>

For detailed team responsibilities, see [PROJECT-INFO.md](PROJECT-INFO.md).

## 📝 License

This is a school project created for educational purposes.

---

**Made with ❤️ by the KCM Tools Team**
