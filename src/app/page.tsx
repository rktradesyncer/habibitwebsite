'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import LoadingScreen from '@/components/LoadingScreen'


import SarahImage from '@/assets/Sarah.png'
import LogoImage from '@/assets/logo.png'
import Logo2Image from '@/assets/logo2.png'
import AssetIphoneImage from '@/assets/assetiphone.png'
import CreateAccountImage from '@/assets/createaccount.png'
import VerifiedImage from '@/assets/verified.png'
import BuyAndSellImage from '@/assets/buyandsell.png'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [showMabroukPopup, setShowMabroukPopup] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check localStorage to see if loading screen has been shown
    const hasSeenLoading = localStorage.getItem('habibit-loading-seen')
    
    if (hasSeenLoading === 'true') {
      setShowLoading(false)
      // Start page animations immediately if no loading screen
      setTimeout(() => {
        setIsLoaded(true)
        // Show welcome popup after animations complete
        setTimeout(() => {
          setShowWelcomePopup(true)
        }, 2000)
      }, 100)
    }
  }, [])

  const handleLoadingComplete = () => {
    // Set localStorage flag when loading is complete
    localStorage.setItem('habibit-loading-seen', 'true')
    setShowLoading(false)
    // Start page assembly animations after loading screen
    setTimeout(() => {
      setIsLoaded(true)
      // Show welcome popup after animations complete
      setTimeout(() => {
        setShowWelcomePopup(true)
      }, 2000)
    }, 100)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setShowMabroukPopup(true)
      // Auto-hide popup after 5 seconds
      setTimeout(() => {
        setShowMabroukPopup(false)
      }, 5000)
      console.log('Subscribed:', email)
    }
  }

  // Don't render anything until client is mounted to avoid hydration issues
  if (!isClient) {
    return null
  }

  // Show loading screen if needed
  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes bob-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-bob { animation: bob 2.5s ease-in-out infinite; }
        .animate-bob-reverse { animation: bob-reverse 2.8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3.5s ease-in-out infinite 0.5s; }
        .animate-scroll-left { 
          animation: scroll-left 30s linear infinite; 
        }
        .animate-scroll-right { 
          animation: scroll-right 35s linear infinite; 
        }
        .crypto-ticker:hover .animate-scroll-left,
        .crypto-ticker:hover .animate-scroll-right {
          animation-play-state: paused;
        }
        .crypto-ticker:hover {
          cursor: pointer;
        }
        .crypto-ticker:hover::before {
          content: "⏸️ PAUSED - Hover to explore prices";
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 107, 53, 0.95);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          z-index: 100;
          white-space: nowrap;
          animation: fadeIn 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        /* Page Assembly Animations */
        @keyframes slideInFromTop {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInFromBottom {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-slide-in-top { 
          animation: slideInFromTop 0.8s ease-out forwards; 
        }
        .animate-slide-in-bottom { 
          animation: slideInFromBottom 0.8s ease-out forwards; 
        }
        .animate-slide-in-left { 
          animation: slideInFromLeft 0.8s ease-out forwards; 
        }
        .animate-slide-in-right { 
          animation: slideInFromRight 0.8s ease-out forwards; 
        }
        .animate-scale-in { 
          animation: scaleIn 0.8s ease-out forwards; 
        }
        
        /* Staggered delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
      <div className="min-h-screen text-white font-cairo overflow-x-hidden" style={{backgroundColor: '#080415'}}>

      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-6 opacity-0 ${isLoaded ? 'animate-slide-in-top' : ''}`}>
        <div className="bg-black/20 backdrop-blur-2xl border border-orange-500/20 rounded-2xl shadow-[0_20px_25px_-5px_rgba(255,107,53,0.1),0_10px_10px_-5px_rgba(255,107,53,0.05)] w-full max-w-4xl">
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
                <a href="#top" className="hidden md:block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  Home
                </a>
                <a href="/contact" className="hidden md:block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                  Contact
                </a>
                <Button 
                  onClick={() => {
                    const waitlistSection = document.getElementById('waitlist');
                    if (waitlistSection) {
                      waitlistSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:from-orange-600/90 hover:to-orange-700/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-[0_10px_15px_-3px_rgba(255,107,53,0.15)] hover:shadow-[0_20px_25px_-5px_rgba(255,107,53,0.25)] border-0"
                >
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Geometric Background - Hero Only */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Complex Islamic Geometric Pattern */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 40%, rgba(212, 175, 55, 0.02) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(255, 107, 53, 0.02) 50%, transparent 60%)
              `,
              backgroundSize: '300px 300px, 400px 400px, 350px 350px, 450px 450px, 100px 100px, 100px 100px'
            }}></div>
            
            {/* Intricate Islamic Pattern Overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                conic-gradient(from 0deg at 50% 50%, 
                  rgba(212, 175, 55, 0.03) 0deg 45deg,
                  transparent 45deg 90deg,
                  rgba(212, 175, 55, 0.03) 90deg 135deg,
                  transparent 135deg 180deg,
                  rgba(212, 175, 55, 0.03) 180deg 225deg,
                  transparent 225deg 270deg,
                  rgba(212, 175, 55, 0.03) 270deg 315deg,
                  transparent 315deg 360deg)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 80%)'
            }}></div>

            {/* Floating Particles */}
            <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            
            {/* Decorative Islamic Elements */}
            <div className="absolute top-32 left-20 w-3 h-3 bg-amber-400/60 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-orange-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-32 w-4 h-4 bg-amber-300/50 rounded-full animate-pulse"></div>
            <div className="absolute top-60 right-20 text-2xl opacity-20 animate-pulse">☪</div>
            <div className="absolute bottom-32 right-40 text-lg opacity-15 animate-pulse">✦</div>
            
            {/* Subtle Stars and Moons */}
            <div className="absolute top-20 left-1/4 text-white opacity-15 text-lg animate-pulse">✦</div>
            <div className="absolute top-80 left-2/3 text-white opacity-15 text-lg animate-pulse">✦</div>
            <div className="absolute bottom-20 right-1/5 text-white opacity-18 text-xl animate-pulse">☾</div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className={`space-y-8 opacity-0 ${isLoaded ? 'animate-slide-in-left delay-200' : ''}`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                  🔥 Coming Soon
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                    <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">
                      Habibit Exchange
                    </span><br />Is Coming To The UAE 🇦🇪
                  </h1>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Learn, trade, and earn crypto together. Follow top investors and build your community, coming soon to the UAE.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-11 text-lg flex-1 px-4 rounded-2xl"
                  />
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500/90 via-orange-600/90 to-orange-700/90 hover:from-orange-600/90 hover:via-orange-700/90 hover:to-orange-800/90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_25px_50px_-12px_rgba(255,107,53,0.25)] hover:shadow-[0_35px_60px_-12px_rgba(255,107,53,0.35)] border-0 relative overflow-hidden group whitespace-nowrap"
                    onClick={handleSubscribe}
                  >
                    <span className="relative z-10">Join the waitlist</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>

              {/* Right Content - iPhone Asset */}
              <div className={`relative opacity-0 ${isLoaded ? 'animate-slide-in-right delay-400' : ''}`}>
                <div className="relative mx-auto max-w-sm animate-float">
                  <Image 
                    src={AssetIphoneImage} 
                    alt="Habibit App on iPhone" 
                    width={400} 
                    height={600} 
                    className="object-contain transform transition-all duration-500 filter drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500/20 rounded-2xl backdrop-blur-sm border border-orange-500/20 flex items-center justify-center animate-bounce-slow hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl animate-pulse">₿</span>
                </div>
                <div className="absolute bottom-20 -left-6 w-12 h-12 bg-amber-500/20 rounded-xl backdrop-blur-sm border border-amber-500/20 flex items-center justify-center animate-bob hover:scale-110 transition-transform duration-300">
                  <span className="text-lg animate-pulse">💰</span>
                </div>
                
                {/* Additional Floating Crypto Icons */}
                <div className="absolute top-32 -left-8 w-10 h-10 bg-purple-500/20 rounded-xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">Ξ</span>
                </div>
                <div className="absolute bottom-32 -right-8 w-10 h-10 bg-blue-500/20 rounded-xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center animate-bob-reverse hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">◈</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Traders Choose Habibit Section */}
        <section className={`py-20 px-6 relative opacity-0 ${isLoaded ? 'animate-slide-in-bottom delay-600' : ''}`}>
          {/* Subtle Stars Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 right-1/4 text-white opacity-15 text-lg animate-pulse">✦</div>
            <div className="absolute bottom-20 left-1/4 text-white opacity-15 text-lg animate-pulse">✦</div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Why You'll Love <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">Habibit</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get ready for the tools to trade crypto smart, follow top investors, and grow your crypto community, coming soon in the UAE.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Simple & Smart Crypto Trading */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(255,107,53,0.25)] transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">💡</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Simple & Smart Crypto Trading</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Buy and sell crypto with ease. No complex charts or confusing interfaces, just simple, smart trading that works.
                  </p>
                </CardContent>
              </Card>

              {/* Social Portfolios */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(255,107,53,0.25)] transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">👥</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Social Portfolios</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Follow your friends' portfolios and copy trades from top performers. Learn from the best and grow together.
                  </p>
                </CardContent>
              </Card>

              {/* Community Timeline */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">💬</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Community Timeline</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Share your wins, ask questions, and learn from a supportive community of traders who've got your back.
                  </p>
                </CardContent>
              </Card>

              {/* Built for Retail */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">🏪</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Built for Retail</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Clean design with no jargon. We speak human, not crypto-bro. Perfect for beginners and pros alike.
                  </p>
                </CardContent>
              </Card>

              {/* Transparent by Design */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">🔍</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Transparent by Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    See every move. No hidden fees, no confusing terms, just honest trading you can trust.
                  </p>
                </CardContent>
              </Card>

              {/* Your Crypto Companion */}
              <Card className="bg-black/20 border-orange-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">🤝</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Your Crypto Companion</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Human, helpful, and always by your side. We're here to make crypto trading feel less scary and more social.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get Started in 3 Simple Steps Section */}
        <section className={`py-20 px-6 relative opacity-0 ${isLoaded ? 'animate-slide-in-bottom delay-700' : ''}`}>
          {/* Subtle Stars Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 right-1/4 text-white opacity-15 text-lg animate-pulse">✦</div>
            <div className="absolute bottom-16 left-1/3 text-white opacity-15 text-lg animate-pulse">✦</div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                You will be able to start in <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">3 simple steps</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From signup to trading with friends, we've made crypto social and simple.
              </p>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connecting Dotted Line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/30"></div>

              <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative">
                {/* Step 1: Create Account */}
                <div className="text-center relative">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-12 shadow-xl shadow-orange-500/50 relative z-10">
                    1
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="inline-block relative">
                      <Image 
                        src={CreateAccountImage} 
                        alt="Create Account" 
                        width={160} 
                        height={160} 
                        className="object-contain mx-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Create account</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Sign up in seconds with just your email. No complicated forms or endless verification steps.
                  </p>
                </div>

                {/* Step 2: Get Verified */}
                <div className="text-center relative">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-12 shadow-xl shadow-orange-500/50 relative z-10">
                    2
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="inline-block relative">
                      <Image 
                        src={VerifiedImage} 
                        alt="Get Verified" 
                        width={160} 
                        height={160} 
                        className="object-contain mx-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Get verified the same day</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Fast, secure verification process completed within hours.
                  </p>
                </div>

                {/* Step 3: Build Portfolio */}
                <div className="text-center relative">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-12 shadow-xl shadow-orange-500/50 relative z-10">
                    3
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="inline-block relative">
                      <Image 
                        src={BuyAndSellImage} 
                        alt="Buy and Sell" 
                        width={160} 
                        height={160} 
                        className="object-contain mx-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">You'll be able to build and share your crypto portfolio</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Soon you'll be able to start trading, follow friends, and share your wins with a supportive community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Portfolio Section */}
        <section className={`py-20 px-6 relative opacity-0 ${isLoaded ? 'animate-scale-in delay-800' : ''}`}>
          {/* Subtle Stars Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-40 left-1/4 text-white opacity-15 text-lg animate-pulse">✦</div>
            <div className="absolute bottom-24 right-1/3 text-white opacity-18 text-lg animate-pulse">✦</div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Build and share your crypto <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">portfolio</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get ready to trade the most popular cryptocurrencies with zero complexity. From Bitcoin to emerging tokens, coming to the UAE.
              </p>
            </div>

            {/* Crypto Ticker - Newsflash Style */}
            <div className="space-y-8 overflow-hidden crypto-ticker relative">
              {/* Top Row - Left to Right */}
              <div className="relative overflow-hidden">
                <div className="flex space-x-6 animate-scroll-left whitespace-nowrap">
                  {/* First Set */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Bitcoin */}
                    <div className="bg-black/20 border border-orange-500/20 rounded-2xl p-4 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/30 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ₿
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Bitcoin</div>
                          <div className="text-orange-500 text-xs font-medium">BTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$43,234.56</div>
                      <div className="text-green-400 text-sm font-medium">+2.27%</div>
                    </div>

                    {/* Ethereum */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ξ
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Ethereum</div>
                          <div className="text-indigo-400 text-xs font-medium">ETH</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$2,456.78</div>
                      <div className="text-green-400 text-sm font-medium">+3.54%</div>
                    </div>

                    {/* Cardano */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◈
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cardano</div>
                          <div className="text-blue-400 text-xs font-medium">ADA</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.48</div>
                      <div className="text-green-400 text-sm font-medium">+4.83%</div>
                    </div>

                    {/* Solana */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◉
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Solana</div>
                          <div className="text-purple-400 text-xs font-medium">SOL</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$98.65</div>
                      <div className="text-green-400 text-sm font-medium">+11.38%</div>
                    </div>

                    {/* Polygon */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬟
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polygon</div>
                          <div className="text-purple-400 text-xs font-medium">MATIC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.88</div>
                      <div className="text-red-400 text-sm font-medium">-3.75%</div>
                    </div>

                    {/* Chainlink */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬢
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Chainlink</div>
                          <div className="text-blue-400 text-xs font-medium">LINK</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$14.56</div>
                      <div className="text-red-400 text-sm font-medium">-5.06%</div>
                    </div>
                  </div>

                  {/* Duplicate Set 1 for Seamless Loop */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Bitcoin */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ₿
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Bitcoin</div>
                          <div className="text-orange-500 text-xs font-medium">BTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$43,234.56</div>
                      <div className="text-green-400 text-sm font-medium">+2.27%</div>
                    </div>

                    {/* Ethereum */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ξ
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Ethereum</div>
                          <div className="text-indigo-400 text-xs font-medium">ETH</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$2,456.78</div>
                      <div className="text-green-400 text-sm font-medium">+3.54%</div>
                    </div>

                    {/* Cardano */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◈
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cardano</div>
                          <div className="text-blue-400 text-xs font-medium">ADA</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.48</div>
                      <div className="text-green-400 text-sm font-medium">+4.83%</div>
                    </div>

                    {/* Solana */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◉
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Solana</div>
                          <div className="text-purple-400 text-xs font-medium">SOL</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$98.65</div>
                      <div className="text-green-400 text-sm font-medium">+11.38%</div>
                    </div>

                    {/* Polygon */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬟
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polygon</div>
                          <div className="text-purple-400 text-xs font-medium">MATIC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.88</div>
                      <div className="text-red-400 text-sm font-medium">-3.75%</div>
                    </div>

                    {/* Chainlink */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬢
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Chainlink</div>
                          <div className="text-blue-400 text-xs font-medium">LINK</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$14.56</div>
                      <div className="text-red-400 text-sm font-medium">-5.06%</div>
                    </div>
                  </div>

                  {/* Duplicate Set 2 for Seamless Loop */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Bitcoin */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ₿
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Bitcoin</div>
                          <div className="text-orange-500 text-xs font-medium">BTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$43,234.56</div>
                      <div className="text-green-400 text-sm font-medium">+2.27%</div>
                    </div>

                    {/* Ethereum */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ξ
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Ethereum</div>
                          <div className="text-indigo-400 text-xs font-medium">ETH</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$2,456.78</div>
                      <div className="text-green-400 text-sm font-medium">+3.54%</div>
                    </div>

                    {/* Cardano */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◈
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cardano</div>
                          <div className="text-blue-400 text-xs font-medium">ADA</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.48</div>
                      <div className="text-green-400 text-sm font-medium">+4.83%</div>
                    </div>

                    {/* Solana */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◉
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Solana</div>
                          <div className="text-purple-400 text-xs font-medium">SOL</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$98.65</div>
                      <div className="text-green-400 text-sm font-medium">+11.38%</div>
                    </div>

                    {/* Polygon */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬟
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polygon</div>
                          <div className="text-purple-400 text-xs font-medium">MATIC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.88</div>
                      <div className="text-red-400 text-sm font-medium">-3.75%</div>
                    </div>

                    {/* Chainlink */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ⬢
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Chainlink</div>
                          <div className="text-blue-400 text-xs font-medium">LINK</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$14.56</div>
                      <div className="text-red-400 text-sm font-medium">-5.06%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Right to Left */}
              <div className="relative overflow-hidden">
                <div className="flex space-x-6 animate-scroll-right whitespace-nowrap">
                  {/* First Set */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Avalanche */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ∆
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Avalanche</div>
                          <div className="text-red-400 text-xs font-medium">AVAX</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$36.89</div>
                      <div className="text-green-400 text-sm font-medium">+11.53%</div>
                    </div>

                    {/* Cosmos */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◯
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cosmos</div>
                          <div className="text-indigo-400 text-xs font-medium">ATOM</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$11.23</div>
                      <div className="text-green-400 text-sm font-medium">+10.67%</div>
                    </div>

                    {/* Uniswap */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          🦄
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Uniswap</div>
                          <div className="text-pink-400 text-xs font-medium">UNI</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$7.45</div>
                      <div className="text-green-400 text-sm font-medium">+6.62%</div>
                    </div>

                    {/* Litecoin */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ł
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Litecoin</div>
                          <div className="text-gray-400 text-xs font-medium">LTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$73.21</div>
                      <div className="text-green-400 text-sm font-medium">+8.19%</div>
                    </div>

                    {/* Algorand */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ▲
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Algorand</div>
                          <div className="text-gray-400 text-xs font-medium">ALGO</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.28</div>
                      <div className="text-green-400 text-sm font-medium">+9.20%</div>
                    </div>

                    {/* Polkadot */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ●
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polkadot</div>
                          <div className="text-pink-400 text-xs font-medium">DOT</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$6.78</div>
                      <div className="text-green-400 text-sm font-medium">+4.29%</div>
                    </div>
                  </div>

                  {/* Duplicate Set 1 for Seamless Loop */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Avalanche */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ∆
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Avalanche</div>
                          <div className="text-red-400 text-xs font-medium">AVAX</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$36.89</div>
                      <div className="text-green-400 text-sm font-medium">+11.53%</div>
                    </div>

                    {/* Cosmos */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◯
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cosmos</div>
                          <div className="text-indigo-400 text-xs font-medium">ATOM</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$11.23</div>
                      <div className="text-green-400 text-sm font-medium">+10.67%</div>
                    </div>

                    {/* Uniswap */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          🦄
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Uniswap</div>
                          <div className="text-pink-400 text-xs font-medium">UNI</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$7.45</div>
                      <div className="text-green-400 text-sm font-medium">+6.62%</div>
                    </div>

                    {/* Litecoin */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ł
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Litecoin</div>
                          <div className="text-gray-400 text-xs font-medium">LTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$73.21</div>
                      <div className="text-green-400 text-sm font-medium">+8.19%</div>
                    </div>

                    {/* Algorand */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ▲
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Algorand</div>
                          <div className="text-gray-400 text-xs font-medium">ALGO</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.28</div>
                      <div className="text-green-400 text-sm font-medium">+9.20%</div>
                    </div>

                    {/* Polkadot */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ●
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polkadot</div>
                          <div className="text-pink-400 text-xs font-medium">DOT</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$6.78</div>
                      <div className="text-green-400 text-sm font-medium">+4.29%</div>
                    </div>
                  </div>

                  {/* Duplicate Set 2 for Seamless Loop */}
                  <div className="flex space-x-6 flex-shrink-0">
                    {/* Avalanche */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ∆
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Avalanche</div>
                          <div className="text-red-400 text-xs font-medium">AVAX</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$36.89</div>
                      <div className="text-green-400 text-sm font-medium">+11.53%</div>
                    </div>

                    {/* Cosmos */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ◯
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Cosmos</div>
                          <div className="text-indigo-400 text-xs font-medium">ATOM</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$11.23</div>
                      <div className="text-green-400 text-sm font-medium">+10.67%</div>
                    </div>

                    {/* Uniswap */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          🦄
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Uniswap</div>
                          <div className="text-pink-400 text-xs font-medium">UNI</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$7.45</div>
                      <div className="text-green-400 text-sm font-medium">+6.62%</div>
                    </div>

                    {/* Litecoin */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-500/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          Ł
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Litecoin</div>
                          <div className="text-gray-400 text-xs font-medium">LTC</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$73.21</div>
                      <div className="text-green-400 text-sm font-medium">+8.19%</div>
                    </div>

                    {/* Algorand */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ▲
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Algorand</div>
                          <div className="text-gray-400 text-xs font-medium">ALGO</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$0.28</div>
                      <div className="text-green-400 text-sm font-medium">+9.20%</div>
                    </div>

                    {/* Polkadot */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:shadow-xl hover:shadow-pink-600/20 transform cursor-pointer w-60 flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ●
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">Polkadot</div>
                          <div className="text-pink-400 text-xs font-medium">DOT</div>
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mb-1">$6.78</div>
                      <div className="text-green-400 text-sm font-medium">+4.29%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className={`py-20 px-6 relative opacity-0 ${isLoaded ? 'animate-slide-in-bottom delay-800' : ''}`}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Ready to make crypto <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">social</span>?
            </h3>
            
            <p className="text-xl text-gray-300 mb-12">
              Be among the first to experience the future of social crypto trading. Get early access when we launch.
            </p>

            <Card className="bg-gray-800/50 border-gray-700 max-w-md mx-auto backdrop-blur-sm">
              <CardContent className="p-8">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <Input
                      type="email"
                      placeholder="Enter your email for early access"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 h-12"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-600/90 to-orange-700/90 hover:from-orange-700/90 hover:to-orange-800/90 text-white font-semibold h-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_15px_-3px_rgba(255,107,53,0.2)] hover:shadow-[0_20px_25px_-5px_rgba(255,107,53,0.3)]"
                    >
                      Join the waitlist
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="text-4xl mb-4">🎉</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Welcome to the community!
                    </h4>
                    <p className="text-gray-300">
                      We'll notify you when Habibit launches with exclusive early access.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-16 px-6 border-t border-gray-800/50 opacity-0 relative overflow-hidden ${isLoaded ? 'animate-slide-in-bottom delay-800' : ''}`}>
          {/* Subtle Stars in Footer */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-16 right-1/4 text-white opacity-20 text-lg animate-pulse">✦</div>
            <div className="absolute top-24 left-1/5 text-white opacity-15 text-lg animate-pulse">✦</div>
          </div>
          
          {/* Desert Hills Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Sand Dune Hills */}
            <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1200 180" preserveAspectRatio="none">
              {/* Back Hills */}
              <path d="M0,120 C300,30 600,150 900,60 C1050,15 1150,90 1200,60 L1200,180 L0,180 Z" 
                    fill="rgba(255, 149, 0, 0.12)" opacity="0.8"/>
              
              {/* Middle Hills */}
              <path d="M0,150 C200,90 400,165 600,105 C800,45 1000,135 1200,90 L1200,180 L0,180 Z" 
                    fill="rgba(255, 149, 0, 0.18)" opacity="0.9"/>
              
              {/* Front Hills */}
              <path d="M0,165 C150,128 350,172 500,143 C700,113 900,158 1200,128 L1200,180 L0,180 Z" 
                    fill="rgba(255, 149, 0, 0.25)" opacity="1"/>
            </svg>
            
            {/* Subtle Sandy Texture */}
            <div className="absolute bottom-0 left-0 w-full h-48 opacity-30" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 149, 0, 0.08) 0%, transparent 30%),
                radial-gradient(circle at 60% 90%, rgba(255, 149, 0, 0.12) 0%, transparent 25%),
                radial-gradient(circle at 90% 85%, rgba(255, 149, 0, 0.15) 0%, transparent 20%)
              `
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
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
              <p>© 2025 Habibit. Making crypto social, one trade at a time.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Welcome Popup */}
      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-6">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 max-w-md w-full mx-auto text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transform animate-scale-in">
            <div className="text-6xl mb-4 animate-bounce">👋</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Welcome to <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">Habibit!</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're excited to have you here! Get ready for the future of social crypto trading in the UAE. 🇦🇪
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setShowWelcomePopup(false);
                }}
                className="flex-1 bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:from-orange-600/90 hover:to-orange-700/90 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_8px_16px_rgba(255,107,53,0.25)] hover:shadow-[0_12px_24px_rgba(255,107,53,0.35)] border-0"
              >
                Join the waitlist
              </Button>
              <Button
                onClick={() => setShowWelcomePopup(false)}
                variant="outline"
                className="px-6 bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50 hover:text-white rounded-2xl transition-all duration-300"
              >
                Later
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mabrouk Success Popup */}
      {showMabroukPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[70] p-6">
          <div className="bg-gradient-to-br from-orange-800/95 via-amber-800/90 to-orange-900/95 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 max-w-md w-full mx-auto text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transform animate-scale-in">
            {/* Celebration Icons */}
            <div className="flex justify-center items-center mb-4 space-x-2">
              <div className="text-4xl animate-bounce">🎉</div>
              <div className="text-6xl">🌟</div>
              <div className="text-4xl animate-bounce">🎉</div>
            </div>
            
            {/* Mabrouk Message */}
            <h2 className="text-3xl font-bold text-white mb-2">
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">مبروك!</span>
            </h2>
            <h3 className="text-xl font-bold text-white mb-4">Mabrouk!</h3>
            
            {/* Success Message */}
            <p className="text-orange-100 mb-2 text-lg font-semibold">
              You're now on the waitlist! 🇦🇪
            </p>
            <p className="text-orange-200 mb-6 leading-relaxed">
              We'll notify you as soon as Habibit Exchange launches in the UAE. Get ready for the future of social crypto trading!
            </p>
            
            {/* Islamic decorative elements */}
            <div className="flex justify-center items-center mb-6 space-x-4 text-orange-300 opacity-60">
              <span className="text-lg">☪</span>
              <span className="text-sm">✦</span>
              <span className="text-lg">☾</span>
              <span className="text-sm">✦</span>
              <span className="text-lg">☪</span>
            </div>

            <Button
              onClick={() => setShowMabroukPopup(false)}
              className="w-full bg-gradient-to-r from-orange-600/90 to-amber-600/90 hover:from-orange-700/90 hover:to-amber-700/90 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_15px_30px_rgba(255,107,53,0.4)] border-0"
            >
              Shukran! 🙏
            </Button>
          </div>
        </div>
      )}
      </div>
    </>
  )
} 