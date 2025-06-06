import React from 'react'

type Category = "medical" | "education" | "mission" | "community" | "default"

const categoryColors: Record<Category, string> = {
  medical: "#4ECDC4",
  education: "#4CB8C4", 
  mission: "#4CBEB6",
  community: "#3CBCB5",
  default: "hsl(var(--primary))"
}

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  category?: Category
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 60,
  strokeWidth = 4,
  category = "default"
}) => {
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={categoryColors[category]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-700">
          {Math.round(value)}%
        </span>
      </div>
    </div>
  )
}