'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useTheme } from '@/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import LogoImage from '@/assets/logo.png'

export default function Contact() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-cairo">

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <div className="bg-gray-800/80 backdrop-blur-2xl border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-4xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image src={LogoImage} alt="Habibit Logo" width={32} height={32} className="object-contain rounded-lg" />
                </div>
                <span className="text-lg font-bold text-white">
                  <span className="hidden md:inline">Habibit Exchange</span>
                  <span className="md:hidden">Habibit</span>
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <a href="/" className="hidden md:block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  Home
                </a>
                <a href="/contact" className="hidden md:block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  Contact
                </a>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 border-0">
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Contact Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Contact <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">Habibit</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have questions about our upcoming launch? Want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-gray-900/50 border border-gray-600 text-white placeholder:text-gray-400 rounded-lg p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                          placeholder="Tell us more about your inquiry..."
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-bold h-14 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-orange-500/25 hover:shadow-orange-500/50 border-0 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Send Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Thank you for reaching out. We'll get back to you soon!
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 border-0"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={LogoImage} alt="Habibit Logo" width={36} height={36} className="object-contain rounded-lg" />
                </div>
                <span className="text-xl font-bold text-white">
                  <span className="hidden md:inline">Habibit Exchange</span>
                  <span className="md:hidden">Habibit</span>
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm">
              <p>© 2024 Habibit. Making crypto social, one trade at a time.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 