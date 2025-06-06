import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Filter } from 'lucide-react'
import { stripeProducts } from '@/stripe-config'
import { CheckoutButton } from '@/components/checkout/CheckoutButton'

export const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold brand-charcoal-text mb-6">
            Shop with Purpose
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Every product purchase automatically supports a campaign of your choice. 
            Quality items that make a difference in the world.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter by Category
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stripeProducts.map((product) => (
            <Card key={product.priceId} className="h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-teal-light to-brand-teal-mission">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">✝</div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="line-clamp-2 font-serif text-lg font-semibold text-brand-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="line-clamp-3 text-sm text-brand-charcoal/80 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-brand-charcoal">
                      €15.00
                    </div>
                    <div className="text-xs text-brand-charcoal/60">
                      {product.mode === 'payment' ? 'One-time purchase' : 'Subscription'}
                    </div>
                  </div>
                  
                  <CheckoutButton 
                    priceId={product.priceId}
                    mode={product.mode}
                    variant="teal"
                    size="sm"
                  >
                    Buy Now
                  </CheckoutButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}