import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { mockProducts } from '@/data/products'
import { mockCampaigns } from '@/data/campaigns'
import { formatCurrency } from '@/lib/utils'

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = mockProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const relatedCampaigns = mockCampaigns.slice(0, 3) // Show first 3 campaigns

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.inventory <= 5 && product.inventory > 0 && (
                  <Badge variant="destructive">Low Stock</Badge>
                )}
                {product.inventory === 0 && (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold brand-charcoal-text mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.8 (24 reviews)</span>
                </div>
              </div>

              <div className="text-3xl font-bold brand-charcoal-text mb-2">
                {formatCurrency(product.price)}
              </div>
              <p className="text-brand-teal-mission font-medium mb-6">
                50% of your purchase supports a campaign of your choice
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold brand-charcoal-text mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Campaign Selection */}
            <div>
              <h3 className="text-lg font-semibold brand-charcoal-text mb-3">
                Choose a campaign to support
              </h3>
              <div className="space-y-2">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select a campaign...</option>
                  {relatedCampaigns.map((campaign) => (
                    <option key={campaign.id} value={campaign.id}>
                      {campaign.title}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-600">
                  50% of the purchase price ({formatCurrency(product.price * 0.5)}) will be donated to your selected campaign.
                </p>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <select className="border border-gray-300 rounded-md px-3 py-1">
                  {[...Array(Math.min(10, product.inventory))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  size="lg"
                  disabled={product.inventory === 0}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {product.inventory === 0 && (
                <p className="text-red-600 text-sm">This product is currently out of stock.</p>
              )}
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SKU:</span>
                    <span>{product.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock:</span>
                    <span>{product.inventory} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="capitalize">{product.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Campaigns */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold brand-charcoal-text mb-8">
            Campaigns you can support with this purchase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={campaign.imageUrl}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{campaign.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{campaign.description}</p>
                  <div className="mt-3 text-sm">
                    <span className="font-medium">
                      {formatCurrency(campaign.amountRaised)} raised
                    </span>
                    <span className="text-gray-600"> of {formatCurrency(campaign.goal)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}