import React from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { InstructionsSection } from '../components/home/InstructionsSection'
import { PopularCampaigns } from '../components/home/PopularCampaigns'
import { FeaturedProducts } from '../components/home/FeaturedProducts'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InstructionsSection />
      <PopularCampaigns />
      <FeaturedProducts />
    </div>
  )
}