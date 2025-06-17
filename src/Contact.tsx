import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './ThemeContext'
// Logo is now loaded from public folder

function Contact() {
  const { theme } = useTheme()
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isContactSubmitted, setIsContactSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactForm.name && contactForm.email && contactForm.message) {
      setIsContactSubmitted(true)
      console.log('Contact form submitted:', contactForm)
      setContactForm({ name: '', email: '', message: '' })
    }
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

    return (
    <div className="min-h-screen bg-theme text-theme-primary font-cairo transition-colors duration-300">
      {/* CSS Definitions for Glassmorphism Effect */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Dark Theme */
        .dark {
          --surface: rgb(15 23 42);
          --surface-secondary: rgba(51, 65, 85, 0.8);
          --surface-tertiary: rgba(71, 85, 105, 0.8);
          --text-primary: rgb(248 250 252);
          --text-secondary: rgb(148 163 184);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(51, 65, 85, 0.8);
          --border-secondary: rgba(71, 85, 105, 0.5);
                  --accent-light: #FF8A4C;
        --accent-main: #FF6B35;
        --accent-dark: #EA580C;
        --accent-darker: #C2410C;
        --accent-bg-light: rgba(255, 107, 53, 0.1);
        --accent-bg-medium: rgba(255, 107, 53, 0.2);
        --accent-border: rgba(255, 107, 53, 0.2);
        }

        /* Light Theme */
        .light {
          --surface: rgb(255 255 255);
          --surface-secondary: rgba(248, 250, 252, 0.8);
          --surface-tertiary: rgba(241, 245, 249, 0.8);
          --text-primary: rgb(15 23 42);
          --text-secondary: rgb(71 85 105);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(203, 213, 225, 0.8);
          --border-secondary: rgba(226, 232, 240, 0.5);
                  --accent-light: #FF8A4C;
        --accent-main: #FF6B35;
        --accent-dark: #EA580C;
        --accent-darker: #C2410C;
        --accent-bg-light: rgba(255, 107, 53, 0.08);
        --accent-bg-medium: rgba(255, 107, 53, 0.15);
        --accent-border: rgba(255, 107, 53, 0.3);
        }

        /* Utility Classes */
        .bg-surface { background-color: var(--surface) !important; }
        .bg-surface-secondary { background-color: var(--surface-secondary) !important; }
        .text-theme-primary { color: var(--text-primary) !important; }
        .text-theme-secondary { color: var(--text-secondary) !important; }
        .text-theme-tertiary { color: var(--text-tertiary) !important; }
        .border-theme { border-color: var(--border-primary) !important; }
        .text-primary { color: var(--accent-light) !important; }
        .bg-primary-dark { background-color: var(--accent-dark) !important; }
        .bg-primary-darker { background-color: var(--accent-darker) !important; }
        .bg-primary-btn { background-color: var(--accent-main) !important; }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 107, 53, 0.6);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .bg-gradient-primary-progress { 
          background: linear-gradient(to right, var(--accent-dark), #D4AF37) !important; 
        }
        

      `}} />
       


      {/* Simple Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/h-logo.png" alt="Habibit Logo" className="w-12 h-12 object-contain" />
          <span className="text-white text-xl font-medium italic">Habibit</span>
        </Link>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-primary">touch</span>
          </h1>
          
          <p className="text-xl text-theme-secondary mb-12">
            Have questions about Habibit? We'd love to hear from you and help you on your crypto journey.
          </p>

          <Card className="bg-surface border-theme max-w-lg mx-auto hover:border-primary transition-all duration-300 card-hover">
            <CardContent className="p-8">
              {!isContactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="bg-surface border-theme text-theme-primary placeholder:text-theme-tertiary focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none h-12 transition-all duration-300 hover:border-primary"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="bg-surface border-theme text-theme-primary placeholder:text-theme-tertiary focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none h-12 transition-all duration-300 hover:border-primary"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, questions, or how we can help..."
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows={6}
                    className="w-full bg-surface border border-theme text-theme-primary placeholder:text-theme-tertiary focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none rounded-lg px-3 py-3 transition-all duration-300 hover:border-primary resize-none"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary-btn text-white font-semibold h-12 rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
                  >
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-6">✉️</div>
                  <h3 className="text-2xl font-bold text-theme-primary mb-4">
                    Message sent successfully!
                  </h3>
                  <p className="text-theme-secondary mb-6">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setIsContactSubmitted(false)}
                      className="w-full bg-primary-btn text-white font-semibold h-12 rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
                    >
                      Send another message
                    </Button>
                    <Link to="/">
                      <Button 
                        variant="outline"
                        className="w-full border-theme text-theme-secondary hover:bg-surface-secondary h-12"
                      >
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-theme-tertiary text-sm">
              You can also reach us at{' '}
              <a href="mailto:hello@habibit.com" className="text-primary hover:text-primary-dark transition-colors">
                hello@habibit.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-theme/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-left">
              <div className="w-10 h-10 flex items-center justify-center animate-glow">
                                  <img src="/h-logo.png" alt="Habibit Logo" className="w-9 h-9 object-contain" />
              </div>
                              <span className="text-xl font-bold text-theme-primary">
                  <span className="hidden md:inline">Habibit Exchange</span>
                  <span className="md:hidden">Habibit</span>
                </span>
            </Link>
            
            <div className="flex items-center space-x-6 text-sm text-theme-secondary animate-fade-in-right">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="text-center text-theme-tertiary text-sm animate-fade-in-up">
            <p>© 2024 Habibit. Making crypto social, one trade at a time.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Contact 