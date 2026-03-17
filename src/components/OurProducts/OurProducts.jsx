import React from 'react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './OurProducts.css';

const OurProducts = () => {
  // Show only featured products on home page
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="our-products">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.h2>
          <div className="underline"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We provide a wide range of APFC solutions tailored for industrial and commercial needs.
          </motion.p>
        </div>
        <div className="grid-3">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="product-category-tag">{product.category}</div>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/products#${product.id}`} className="learn-more">Explore Details →</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/products" className="btn btn-outline">Show All 22+ Products</Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
