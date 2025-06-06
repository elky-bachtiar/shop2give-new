import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

// Layout components
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { AuthProvider } from './components/auth/AuthProvider'

// Pages
import { HomePage } from './pages/HomePage'
import { SignInPage } from './pages/auth/SignInPage'
import { SignUpPage } from './pages/auth/SignUpPage'
import { CampaignsPage } from './pages/campaigns/CampaignsPage'
import { CampaignDetailPage } from './pages/campaigns/CampaignDetailPage'
import { ProductsPage } from './pages/products/ProductsPage'
import { ProductDetailPage } from './pages/products/ProductDetailPage'
import { CartPage } from './pages/cart/CartPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { SuccessPage } from './pages/checkout/SuccessPage'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaigns/:slug" element={<CampaignDetailPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </AuthProvider>
  )
}

export default App