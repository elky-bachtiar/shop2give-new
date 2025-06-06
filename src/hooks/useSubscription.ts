import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from './useAuth'

interface SubscriptionData {
  customer_id: string | null
  subscription_id: string | null
  subscription_status: string | null
  price_id: string | null
  current_period_start: number | null
  current_period_end: number | null
  cancel_at_period_end: boolean | null
  payment_method_brand: string | null
  payment_method_last4: string | null
}

export function useSubscription() {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      setSubscription(null)
      setLoading(false)
      return
    }

    const fetchSubscription = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error: fetchError } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle()

        if (fetchError) {
          console.error('Error fetching subscription:', fetchError)
          setError('Failed to fetch subscription data')
          return
        }

        setSubscription(data)
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSubscription()
  }, [user])

  const getSubscriptionPlanName = () => {
    if (!subscription?.subscription_status) return 'Free Plan'
    
    switch (subscription.subscription_status) {
      case 'active':
        return 'Premium Plan'
      case 'trialing':
        return 'Premium Plan (Trial)'
      case 'past_due':
        return 'Premium Plan (Payment Due)'
      case 'canceled':
        return 'Premium Plan (Canceled)'
      default:
        return 'Free Plan'
    }
  }

  return {
    subscription,
    loading,
    error,
    getSubscriptionPlanName,
  }
}