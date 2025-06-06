import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Heart, Share2, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useAuthContext } from '@/components/auth/AuthProvider'

interface OrderData {
  order_id: number
  checkout_session_id: string
  amount_total: number
  currency: string
  payment_status: string
  order_date: string
}

export const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const { user } = useAuthContext()
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const fetchOrderData = async () => {
      if (!user || !sessionId) {
        setLoading(false)
        return
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('stripe_user_orders')
          .select('*')
          .eq('checkout_session_id', sessionId)
          .single()

        if (fetchError) {
          console.error('Error fetching order:', fetchError)
          setError('Failed to load order details')
          return
        }

        setOrderData(data)
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchOrderData()
  }, [user, sessionId])

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100) // Stripe amounts are in cents
  }

  if (loading) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Error Loading Order
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {error}
            </p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold brand-charcoal-text mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your order has been confirmed and your purchase will make a real difference.
          </p>
        </div>

        {orderData && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Order ID:</span>
                  <span className="font-medium">#{orderData.order_id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Total:</span>
                  <span className="font-medium">
                    {formatCurrency(orderData.amount_total, orderData.currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Status:</span>
                  <span className="font-medium capitalize text-green-600">
                    {orderData.payment_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span className="font-medium">
                    {new Date(orderData.order_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Share Your Impact
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5 mr-2" />
              Share on Social
            </Button>
          </div>
          
          <div className="pt-6">
            <Link to="/products">
              <Button variant="outline" className="mr-4">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}