import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import './Products.css';
import ltThyristorImg from '../assets/images/DP_LT THYRISTOR APFC PANEL 2.png';

const Products = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="products-page">
      <Helmet>
        <title>Technical Product Listing | Domain Powers APFC Systems</title>
        <meta name="description" content="Detailed technical specifications for our range of 22+ APFC and Power Quality solutions including LT/HT panels, soft starters, and PCC/MCC centers." />
      </Helmet>

      {/* Hero Section for Products */}
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${ltThyristorImg})` }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Engineering Catalogue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Precision-engineered solutions for industrial power excellence and harmonic mitigation.
          </motion.p>
        </div>
      </section>

      {/* Product List */}
      <section className="products-list-section">
        <div className="container">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              id={String(product.id)}
              className={`product-detail-item ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="product-image-side">
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                  <div className="product-id-overlay">0{index + 1}</div>
                </div>
              </div>
              <div className="product-text-side">
                <span className="category-label">{product.category}</span>
                <h2>{product.name}</h2>
                <div className="underline-left"></div>
                <p className="full-desc">{product.fullDescription}</p>
                
                <div className="specs-section">
                  <h4>Key Features & Compliance</h4>
                  <div className="specs-grid">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="spec-feature">
                        <span className="check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="actions" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                  <button className="btn btn-primary">Download Data Sheet</button>
                  <button className="btn btn-outline">Request Quote</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Bespoke Engineering Solutions</h2>
            <p>Our experts specialized in custom site-specific design for optimized Power Factor (0.99) and Harmonic filtration.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
               <button className="btn btn-primary">Schedule Site Audit</button>
               <button className="btn btn-outline-white">Technical Inquiry</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
