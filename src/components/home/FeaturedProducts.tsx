import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ProductCard } from '../products/ProductCard'
import { mockProducts } from '@/data/products'

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = mockProducts.slice(0, 6) // Show first 6 products

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold brand-charcoal-text mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Shop with purpose! Every product purchase automatically supports a campaign of your choice. 
            Quality items that make a difference.
          </p>
          <Link to="/products">
            <Button variant="outline" size="lg">
              Shop All Products
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}