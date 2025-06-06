import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, ShoppingCart, Menu, User, LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useAuthContext } from '@/components/auth/AuthProvider'
import { useSubscription } from '@/hooks/useSubscription'
import { toast } from 'sonner'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Campaigns', href: '/campaigns' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
]

export const Navbar: React.FC = () => {
  const location = useLocation()
  const { user, signOut } = useAuthContext()
  const { getSubscriptionPlanName } = useSubscription()

  const handleSignOut = async () => {
    const { error } = await signOut()
    if (error) {
      toast.error('Failed to sign out')
    } else {
      toast.success('Signed out successfully')
    }
  }

  return (
    <nav className="bg-brand-teal-mission shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-white fill-current" />
            <span className="text-white font-bold text-xl">Shop2Give</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-white hover:text-brand-pink transition-colors duration-200",
                  location.pathname === item.href && "text-brand-pink font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-white text-sm">🇺🇸</span>
              <span className="text-white text-sm">EN</span>
              <span className="text-white/60">|</span>
              <span className="text-white/60 text-sm">🇳🇱</span>
              <span className="text-white/60 text-sm">NL</span>
            </div>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-pink hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>

            {/* Auth section */}
            {user ? (
              <div className="flex items-center space-x-2">
                {/* Subscription Plan Display */}
                <div className="hidden sm:block text-white text-sm">
                  {getSubscriptionPlanName()}
                </div>
                
                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-white hover:text-brand-pink hover:bg-white/10">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-brand-pink hover:bg-white/10"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link to="/sign-in">
                  <Button variant="ghost" className="text-white hover:text-brand-pink hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="bg-white text-brand-teal-mission hover:bg-brand-pink hover:text-brand-charcoal">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}