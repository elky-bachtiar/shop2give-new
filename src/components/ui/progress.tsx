import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

type Category = "medical" | "education" | "mission" | "community" | "default"

const categoryColors: Record<Category, string> = {
  medical: "bg-brand-teal-medical",
  education: "bg-brand-teal-education", 
  mission: "bg-brand-teal-mission",
  community: "bg-brand-teal-community",
  default: "bg-primary"
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    category?: Category
  }
>(({ className, value, category = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all",
        categoryColors[category]
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

const ProgressBar: React.FC<{ value: number; category?: Category }> = ({ 
  value, 
  category = "default" 
}) => {
  return <Progress value={value} category={category} className="h-2" />
}

export { Progress, ProgressBar }