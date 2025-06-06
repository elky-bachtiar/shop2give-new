import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/components/auth/AuthProvider'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'
import { ShoppingCart, Loader2 } from 'lucide-react'

interface CheckoutButtonProps {
  priceId: string
  mode: 'payment' | 'subscription'
  children?: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive' | 'teal'
}

export function CheckoutButton({ 
  priceId, 
  mode, 
  children, 
  className,
  size = 'default',
  variant = 'default'
}: CheckoutButtonProps) {
  const { user } = useAuthContext()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (!user) {
      toast.error('Please sign in to continue')
      return
    }

    setLoading(true)

    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        toast.error('Please sign in to continue')
        return
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/products`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      toast.error(error.message || 'Failed to start checkout process')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
      size={size}
      variant={variant}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
      ) : (
        <ShoppingCart className="h-4 w-4 mr-2" />
      )}
      {loading ? 'Processing...' : (children || 'Buy Now')}
    </Button>
  )
}