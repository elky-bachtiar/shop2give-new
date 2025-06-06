import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/types'
import { formatCurrency } from '@/lib/utils'

type ProductCardProps = {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product.id)
  }

  return (
    <div className="group block transform transition-all duration-300 hover:-translate-y-1">
      <Card className="h-full overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.inventory <= 5 && product.inventory > 0 && (
              <div className="absolute right-4 top-4">
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  Low Stock
                </span>
              </div>
            )}
            {product.inventory === 0 && (
              <div className="absolute right-4 top-4">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </Link>
        
        <div className="p-6 bg-white">
          <Link to={`/products/${product.id}`}>
            <h3 className="line-clamp-2 font-serif text-lg font-semibold text-brand-charcoal mb-2">
              {product.name}
            </h3>
            <p className="line-clamp-3 text-sm text-brand-charcoal/80 mb-4">
              {product.description}
            </p>
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-brand-charcoal">
                {formatCurrency(product.price)}
              </div>
              <div className="text-xs text-brand-charcoal/60">
                50% goes to donation
              </div>
            </div>
            
            <Button 
              variant="teal" 
              size="sm" 
              onClick={handleAddToCart}
              disabled={product.inventory === 0}
              className="flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}