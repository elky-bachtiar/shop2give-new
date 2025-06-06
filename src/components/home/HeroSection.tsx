import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Heart, ShoppingBag, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-primary/5 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold brand-charcoal-text leading-tight"
            >
              Support causes by{' '}
              <span className="text-gradient">shopping online</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
            >
              Purchase goods where proceeds go directly to fundraising campaigns that you care about.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/sign-up">
                <Button size="lg" className="text-lg px-8 py-4 group">
                  Start a Shop2Give
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Browse Campaigns
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl font-bold brand-charcoal-text">$2.4M+</div>
                <div className="text-sm text-gray-600">Donated</div>
              </div>
              <div>
                <div className="text-2xl font-bold brand-charcoal-text">15K+</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div>
                <div className="text-2xl font-bold brand-charcoal-text">50K+</div>
                <div className="text-sm text-gray-600">Donors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Animation Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Central Heart */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute z-10"
              >
                <Heart className="w-20 h-20 text-primary fill-current" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 bg-white p-4 rounded-full shadow-soft"
              >
                <ShoppingBag className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 bg-white p-4 rounded-full shadow-soft"
              >
                <TrendingUp className="w-8 h-8 text-green-500" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 left-16 bg-white p-4 rounded-full shadow-soft"
              >
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </motion.div>

              <motion.div
                animate={{ y: [15, -5, 15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 right-16 bg-white p-4 rounded-full shadow-soft"
              >
                <Heart className="w-8 h-8 text-pink-500 fill-current" />
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M 100 100 Q 200 50 300 100"
                  stroke="rgba(75, 190, 182, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 100 300 Q 200 250 300 300"
                  stroke="rgba(75, 190, 182, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}