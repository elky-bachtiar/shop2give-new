import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProgressBar } from '@/components/ui/progress'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Heart, Share2, MapPin, Calendar, User } from 'lucide-react'
import { mockCampaigns } from '@/data/campaigns'
import { calculateProgress, formatCurrency, formatDate } from '@/lib/utils'

export const CampaignDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const campaign = mockCampaigns.find(c => c.slug === slug)

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Campaign not found</h1>
          <p className="text-gray-600">The campaign you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const progress = calculateProgress(campaign.amountRaised, campaign.goal)
  const isFullyFunded = progress >= 100

  const getCategoryType = (category: string) => {
    switch (category.toLowerCase()) {
      case 'medical': return 'medical'
      case 'education': return 'education'
      case 'mission': return 'mission'
      case 'community': return 'community'
      default: return 'mission'
    }
  }

  const categoryType = getCategoryType(campaign.category)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
          {isFullyFunded && (
            <div className="absolute top-4 right-4">
              <Badge variant="success\" showIcon className="text-base px-4 py-2">
                Fully Funded
              </Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Info */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{campaign.location}</span>
                <span>•</span>
                <span>{campaign.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold brand-charcoal-text mb-4">
                {campaign.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Campaign Owner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Created {formatDate(campaign.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold brand-charcoal-text mb-4">About this campaign</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {campaign.description}
                </p>
                {/* Additional campaign details would go here */}
                <p className="text-gray-700 leading-relaxed mt-4">
                  Your support makes a real difference. Every purchase through Shop2Give helps us get closer to our goal and creates meaningful impact in our community.
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div>
              <h3 className="text-xl font-semibold brand-charcoal-text mb-4">Share this campaign</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <CircularProgress
                    value={progress}
                    size={80}
                    category={categoryType}
                  />
                </div>
                
                <div className="space-y-4">
                  <ProgressBar value={progress} category={categoryType} />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Raised</span>
                      <span className="font-semibold">{formatCurrency(campaign.amountRaised)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Goal</span>
                      <span className="font-semibold">{formatCurrency(campaign.goal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="font-semibold">{progress}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <Button className="w-full" size="lg">
                    <Heart className="h-5 w-5 mr-2" />
                    Donate Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Shop Products for This Cause
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Donor List */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Recent Donors</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Anonymous Donor</span>
                    <span className="text-sm font-medium">$50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">John S.</span>
                    <span className="text-sm font-medium">$100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sarah M.</span>
                    <span className="text-sm font-medium">$25</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Donors
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}