import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { ProgressBar } from '../ui/progress'
import { CircularProgress } from '../ui/circular-progress'
import { MapPin } from 'lucide-react'
import { Campaign } from '@/types'
import { calculateProgress, formatCurrency } from '@/lib/utils'

type CampaignCardProps = {
  campaign: Campaign
}

const getCategoryType = (category: string) => {
  switch (category.toLowerCase()) {
    case 'medical': return 'medical'
    case 'education': return 'education'
    case 'mission': return 'mission'
    case 'community': return 'community'
    default: return 'mission'
  }
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const progress = calculateProgress(campaign.amountRaised, campaign.goal)
  const isFullyFunded = progress >= 100
  const categoryType = getCategoryType(campaign.category)

  return (
    <Link 
      to={`/campaigns/${campaign.slug}`} 
      className="group block transform transition-all duration-300 hover:-translate-y-1"
    >
      <Card className="h-full overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isFullyFunded && (
            <div className="absolute right-4 top-4">
              <Badge variant="success\" showIcon>Fully Funded</Badge>
            </div>
          )}
        </div>
        <div className="bg-brand-pink/30 p-6">
          <div className="flex items-center gap-1 text-sm text-brand-charcoal/70">
            <MapPin className="h-3 w-3" />
            <span>{campaign.location}</span>
          </div>
          <h3 className="line-clamp-2 font-serif text-lg font-semibold text-brand-charcoal mt-2">
            {campaign.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-brand-charcoal/80">
            {campaign.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <CircularProgress
              value={progress}
              size={40}
              category={categoryType}
            />
            <div className="flex-1">
              <ProgressBar value={progress} category={categoryType} />
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-brand-charcoal/70">Raised</span>
            <span className="font-bold text-brand-charcoal">
              {formatCurrency(campaign.amountRaised)}
            </span>
          </div>
          <div className="mt-1 flex justify-between text-sm">
            <span className="text-brand-charcoal/70">Goal</span>
            <span className="text-brand-charcoal">
              {formatCurrency(campaign.goal)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}