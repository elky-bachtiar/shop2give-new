import React from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, Share2, CreditCard, Bot } from 'lucide-react'

interface StepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

function Step({ number, title, description, icon }: StepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: number * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-8 text-center md:items-start md:text-left bg-card rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal-mission">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-brand-charcoal">
        Step {number} – {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export const InstructionsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Create your fundraiser",
      description: "Click the 'Start a Shop2Give' button to begin. Our AI-powered system will guide you through setting up your fundraiser details and goals.",
      icon: <Bot className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Share your fundraiser link",
      description: "Share your unique fundraiser link with friends and family. Track progress and engage supporters through your Shop2Give dashboard.",
      icon: <Share2 className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Receive funds securely",
      description: "Add your bank details or invite your fundraiser beneficiary to receive donations directly and securely through our platform.",
      icon: <CreditCard className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-20 lg:py-32 brand-gold-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold brand-charcoal-text mb-6">
            How Shop2Give Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creating meaningful impact through everyday shopping has never been easier. 
            Follow these simple steps to start making a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}