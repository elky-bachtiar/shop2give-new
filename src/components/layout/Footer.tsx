import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Zap } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-brand-teal-mission fill-current" />
              <span className="font-bold text-xl">Shop2Give</span>
            </div>
            <p className="text-white/80 mb-4">
              Buy with purpose. Give with heart.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-teal-mission transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-teal-mission transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-teal-mission transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-teal-mission transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-teal-mission transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Language selector */}
            <div className="mt-6 flex items-center space-x-2">
              <span className="text-white/80 text-sm">Language:</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇺🇸 EN</span>
                <span className="text-white/40">|</span>
                <span className="text-white/60 text-sm">🇳🇱 NL</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How it works</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing FAQ</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/partner" className="text-white/80 hover:text-white transition-colors">Partner</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/gdpr" className="text-white/80 hover:text-white transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Shop2Give. All rights reserved.
          </p>
          
          {/* Bolt.new badge */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-white/60 text-sm">Powered by</span>
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-brand-teal-mission hover:text-brand-teal-light transition-colors"
            >
              <Zap className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Bolt.new</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}