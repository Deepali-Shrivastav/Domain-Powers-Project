import React from 'react';
import { categorizedProducts, products } from '../../data/products';
import { motion } from 'framer-motion';
import './ProductsBand.css';

const ProductsBand = () => {
  // We'll specifically show APFC Solutions and Motor Control in this band
  const categoriesToShow = ["APFC Solutions", "Motor Control"];

  return (
    <section className="products-band section-dark">
      <div className="container">
        <div className="grid-2">
          {categoriesToShow.map((category, catIndex) => (
            <motion.div 
              key={category} 
              className="product-column"
              initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>{category.toUpperCase()}</h3>
              <div className="underline-left"></div>
              <ul className="product-list">
                {categorizedProducts[category]?.slice(0, 6).map((id, index) => {
                  const product = products.find(p => p.id === id);
                  return (
                    <motion.li 
                      key={id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span className="dot"></span> {product?.name}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsBand;
