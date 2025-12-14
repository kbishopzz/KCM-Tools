// Slide-out menu for filtering products by category
import React, { useState } from 'react';
import './CategoryMenu.css';

export default function CategoryMenu({ categories = [], selected, onSelect, onSafetyInfoClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`category-menu-wrapper ${open ? 'open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div className="category-tab" aria-hidden>
        <span>Categories</span>
      </div>

      <nav className="category-menu" aria-label="Product categories">
        <ul>
          <li>
            <button
              className={`category-button ${selected === 'All' ? 'active' : ''}`}
              onClick={() => onSelect('All')}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`category-button ${selected === cat ? 'active' : ''}`}
                onClick={() => onSelect(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
          <li>
            <button
              className="category-button safety-info-button"
              onClick={onSafetyInfoClick}
            >
              Safety Info
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
