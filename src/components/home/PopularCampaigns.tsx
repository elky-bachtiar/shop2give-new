import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { CampaignCard } from '../campaigns/CampaignCard'
import { mockCampaigns } from '@/data/campaigns'

export const PopularCampaigns: React.FC = () => {
  const popularCampaigns = mockCampaigns.slice(0, 6) // Show first 6 campaigns

  return (
    <section className="py-20 lg:py-32 brand-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold brand-charcoal-text mb-6">
            Popular Campaigns
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover inspiring stories and meaningful causes that are making a real difference. 
            Every purchase helps these campaigns reach their goals.
          </p>
          <Link to="/campaigns">
            <Button variant="outline" size="lg">
              View All Campaigns
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {popularCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CampaignCard campaign={campaign} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}