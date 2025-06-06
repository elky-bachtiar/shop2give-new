import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react'

export const CartPage: React.FC = () => {
  // Mock cart data - this will be replaced with actual cart state
  const cartItems = []

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold brand-charcoal-text mb-8">Shopping Cart</h1>
          
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start shopping to add items to your cart and support amazing campaigns.
            </p>
            <div className="space-y-4">
              <Link to="/products">
                <Button size="lg" className="mr-4">
                  Shop Products
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" size="lg">
                  Browse Campaigns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold brand-charcoal-text mb-8">Shopping Cart</h1>
        
        {/* Cart implementation will go here */}
        <div className="text-center py-8">
          <p className="text-gray-600">Cart functionality will be implemented with Zustand state management.</p>
        </div>
      </div>
    </div>
  )
}