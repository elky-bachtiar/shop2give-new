export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role: UserRole
  created_at: string
  updated_at: string
}

export type UserRole = 'platform_admin' | 'store_manager' | 'campaign_owner' | 'donor'

export interface Campaign {
  id: string
  title: string
  slug: string
  description: string
  goal: number
  amountRaised: number
  imageUrl: string
  location: string
  category: string
  ownerId: string
  status: 'active' | 'paused' | 'completed' | 'archived'
  created_at: string
  updated_at: string
  end_date?: string
  verification_status?: 'pending' | 'verified' | 'rejected'
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  inventory: number
  storeManagerId: string
  stripeProductId?: string
  stripePriceId?: string
  status: 'active' | 'inactive' | 'out_of_stock'
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string // product_id + campaign_id
  productId: string
  campaignId: string
  product: Product
  campaign: Campaign
  quantity: number
  donationPercentage: number
  unitPrice: number
  totalPrice: number
  donationAmount: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  totalDonation: number
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  parentId?: string
  isActive: boolean
  created_at: string
}

export interface Donation {
  id: string
  userId: string
  campaignId: string
  productId?: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  stripePaymentIntentId?: string
  isAnonymous: boolean
  created_at: string
}

export interface Order {
  id: string
  userId: string
  totalAmount: number
  totalDonation: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  stripeSessionId?: string
  created_at: string
  updated_at: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  campaignId: string
  quantity: number
  unitPrice: number
  totalPrice: number
  donationAmount: number
  donationPercentage: number
}

// Language support
export type Language = 'en' | 'nl'

export interface LanguageContent {
  en: string
  nl: string
}

// Stripe Integration
export interface StripeMetadata {
  product_id: string
  campaign_id: string
  donationPercentage: string
  user_id: string
  order_id?: string
}

// Pica Integration types
export interface PicaIntegration {
  apiKey: string
  webhookUrl: string
  features: PicaFeature[]
}

export interface PicaFeature {
  type: 'chat_ai' | 'notifications' | 'analytics'
  enabled: boolean
  configuration: Record<string, any>
}

// RevenueCat types
export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  currency: string
  interval: 'month' | 'year'
  features: string[]
  revenueCatProductId: string
}

export interface StoreManagerSubscription {
  id: string
  storeManagerId: string
  planId: string
  status: 'active' | 'cancelled' | 'past_due' | 'unpaid'
  currentPeriodStart: string
  currentPeriodEnd: string
  revenueCatSubscriptionId: string
}

// Algorand crypto donations
export interface CryptoDonation {
  id: string
  campaignId: string
  userId?: string
  algorandTxId: string
  amount: number
  currency: 'ALGO'
  walletAddress: string
  status: 'pending' | 'confirmed' | 'failed'
  created_at: string
}