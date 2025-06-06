import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function calculateProgress(current: number, goal: number): number {
  if (goal <= 0) return 0
  return Math.min(Math.round((current / goal) * 100), 100)
}

export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function generateUniqueCartId(productId: string, campaignId: string): string {
  return `${productId}_${campaignId}`
}

export function parseCartId(cartId: string): { productId: string; campaignId: string } {
  const [productId, campaignId] = cartId.split('_')
  return { productId, campaignId }
}

export function validateDonationPercentage(percentage: number): boolean {
  return percentage >= 0 && percentage <= 100
}

export function calculateDonationAmount(price: number, quantity: number, percentage: number): number {
  if (!validateDonationPercentage(percentage)) {
    throw new Error('Invalid donation percentage')
  }
  return Math.round((price * quantity * (percentage / 100)) * 100) / 100
}