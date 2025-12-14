// About page telling the story of KCM Tools
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <h1>About KCM Tools</h1>
          <p>Your trusted destination for premium tools and equipment</p>
        </section>

        <section className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              KCM Tools started as a humble school project, sparked by a whim and the realization of just how essential quality tools are in our daily lives. As we built this platform, our mission crystallized: to provide top-tier equipment for both seasoned professionals and enthusiastic DIYers.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At KCM Tools, we believe that the right tool can make any project possible. We are committed to customer satisfaction and strive to offer the best products at competitive prices, turning our academic endeavor into a reliable resource for all your hardware needs.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <h3>Quality Products</h3>
                <p>Every product is carefully selected and tested to meet our high standards</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚚</div>
                <h3>Fast Shipping</h3>
                <p>Free shipping on orders over $100 with tracking on all deliveries</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payments</h3>
                <p>Your transactions are protected with industry-leading security</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💬</div>
                <h3>Expert Support</h3>
                <p>Our knowledgeable team is here to help with any questions</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Customer First:</strong> Your satisfaction is our top priority</li>
              <li><strong>Quality:</strong> We never compromise on product quality</li>
              <li><strong>Reliability:</strong> Tools you can trust for any job</li>
              <li><strong>Integrity:</strong> Honest pricing and transparent policies</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
