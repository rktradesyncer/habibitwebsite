import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CornerDownRight, CornerDownLeft } from 'lucide-react'
import SarahImage from './assets/Sarah.png'
import MikeImage from './assets/Mike.png'
import LogoImage from './assets/logo.png'
import Logo2Image from './assets/logo2.png'
import CreateAccountImage from './assets/createaccount.png'
import VerifiedImage from './assets/verified.png'
import BuyAndSellImage from './assets/buyandsell.png'
import Contact from './Contact'
import { ThemeProvider, useTheme } from './ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function Home() {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading on first app load or page refresh
    // Check if this is a fresh session or if we haven't loaded yet
    const hasLoadedInSession = sessionStorage.getItem('hasLoadedInSession')
    return !hasLoadedInSession
  })
  const [showContent, setShowContent] = useState(() => {
    // Show content immediately if we've already loaded in this session
    const hasLoadedInSession = sessionStorage.getItem('hasLoadedInSession')
    return !!hasLoadedInSession
  })
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [mockupScreenIndex, setMockupScreenIndex] = useState(0)
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)
  const loadingTextWords = ['easy', 'community', 'social']
  const [cryptoData, setCryptoData] = useState([
    { name: 'Bitcoin', symbol: 'BTC', icon: '₿', price: '€41,234.56', change: 2.45, bgColor: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', price: '€2,456.78', change: 1.82, bgColor: 'bg-indigo-600' },
    { name: 'Cardano', symbol: 'ADA', icon: '₳', price: '€0.48', change: 3.21, bgColor: 'bg-blue-600' },
    { name: 'Solana', symbol: 'SOL', icon: '◎', price: '€98.45', change: 5.67, bgColor: 'bg-purple-600' },
    { name: 'Polygon', symbol: 'MATIC', icon: '⬟', price: '€0.89', change: -1.23, bgColor: 'bg-purple-500' },
    { name: 'Chainlink', symbol: 'LINK', icon: '⧫', price: '€14.56', change: 0.98, bgColor: 'bg-blue-500' },
    { name: 'Polkadot', symbol: 'DOT', icon: '●', price: '€6.78', change: 2.11, bgColor: 'bg-pink-500' },
    { name: 'Avalanche', symbol: 'AVAX', icon: '▲', price: '€36.89', change: 4.33, bgColor: 'bg-red-500' },
    { name: 'Cosmos', symbol: 'ATOM', icon: '⚛', price: '€11.23', change: 1.76, bgColor: 'bg-indigo-700' },
    { name: 'Uniswap', symbol: 'UNI', icon: '🦄', price: '€7.45', change: -0.54, bgColor: 'bg-pink-600' },
    { name: 'Litecoin', symbol: 'LTC', icon: 'Ł', price: '€73.21', change: 1.89, bgColor: 'bg-gray-500' },
    { name: 'Algorand', symbol: 'ALGO', icon: '△', price: '€0.24', change: 6.78, bgColor: 'bg-gray-800' }
  ])

  useEffect(() => {
    // Only run loading sequence if we haven't loaded in this session
    if (!sessionStorage.getItem('hasLoadedInSession')) {
      // Loading progress and messages
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          const newProgress = prev + (100 / 35) // 100% over 3.5 seconds (35 intervals of 100ms)
          if (newProgress >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return newProgress
        })
      }, 100)

      // Loading animation duration
      const loadingTimer = setTimeout(() => {
        setIsLoading(false)
        // Mark that we've loaded in this session
        sessionStorage.setItem('hasLoadedInSession', 'true')
      }, 3500) // 3.5 seconds for the full experience

      // Show content with a slight delay to prevent blinking
      const contentTimer = setTimeout(() => {
        setShowContent(true)
      }, 4000) // 0.5 seconds after loading ends

      return () => {
        clearTimeout(loadingTimer)
        clearTimeout(contentTimer)
        clearInterval(progressInterval)
      }
    }
  }, [])

  // Loading text rotation - cycles through words every 2 seconds during loading
  useEffect(() => {
    if (isLoading) {
      const textInterval = setInterval(() => {
        setLoadingTextIndex(prev => (prev + 1) % loadingTextWords.length)
      }, 2000) // Change word every 2 seconds

      return () => clearInterval(textInterval)
    }
  }, [isLoading, loadingTextWords.length])

  // Mockup screen rotation - starts after loading is complete
  useEffect(() => {
    if (showContent) {
      const mockupInterval = setInterval(() => {
        setMockupScreenIndex(prev => (prev + 1) % 2) // Toggle between 0 (social) and 1 (chart)
      }, 4000) // Change screen every 4 seconds

      return () => {
        clearInterval(mockupInterval)
      }
    }
  }, [showContent])

  // Real-time crypto price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          change: Number((crypto.change + (Math.random() - 0.5) * 2).toFixed(2))
        }))
      )
    }, 3000) // Update every 3 seconds
    
    return () => clearInterval(interval)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      console.log('Subscribed:', email)
    }
  }

  return (
    <div className="min-h-screen bg-theme text-theme-primary font-cairo overflow-x-hidden transition-colors duration-300">
      {/* Loading Screen */}
      {isLoading && (
        <div className={`fixed inset-0 bg-gray-950 z-[100] flex items-center justify-center ${!isLoading ? 'loading-fade-out' : ''}`}>
          {/* Loading Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary-soft rounded-full blur-2xl animate-pulse loading-particle-1"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-primary-orange rounded-full blur-3xl animate-pulse loading-particle-2"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-primary-light rounded-full blur-2xl animate-pulse loading-particle-3"></div>
          </div>

          {/* Loading Content */}
          <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-6">
            {/* Animated Logo */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 flex items-center justify-center loading-logo">
                <img src={LogoImage} alt="Habibit Logo" className="w-16 h-16 object-contain rounded-xl" />
              </div>
              <h1 className="text-4xl font-bold">Habibit</h1>
            </div>

            {/* Brand Message */}
            <div className="space-y-4">
              <div className="text-xl text-gray-300 mx-auto">
                <p>
                  Crypto is better when it is{' '}
                  <span className="text-primary transition-all duration-500">
                    {loadingTextWords[loadingTextIndex]}
                  </span>
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Loading Progress</span>
                  <span className="text-sm text-primary font-medium">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary-progress rounded-full"
                    style={{ 
                      width: `${loadingProgress}%`,
                      transition: 'width 0.1s linear'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Final Message */}
      <div>
              <p className="text-xs text-gray-500">
                Powered by community • Designed for you
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          /* Base Color Palette */
                  --primary-50: rgb(255 248 241);
        --primary-100: rgb(254 236 220);
        --primary-200: rgb(252 217 189);
        --primary-300: rgb(253 186 140);
        --primary-400: rgb(255 138 76);
        --primary-500: rgb(255 107 53);
        --primary-600: rgb(234 88 12);
        --primary-700: rgb(194 65 12);
        --primary-800: rgb(154 52 18);
        --primary-900: rgb(124 45 18);
        --primary-950: rgb(67 20 7);
        }

        /* Dark Theme (Default) */
        .dark {
          /* Semantic Colors - Dark Theme */
          --background: rgb(3 7 18);
          --background-secondary: rgb(15 23 42);
          --background-tertiary: rgb(30 41 59);
          --surface: rgb(15 23 42);
          --surface-secondary: rgba(51, 65, 85, 0.8);
          --surface-tertiary: rgba(71, 85, 105, 0.8);
          --text-primary: rgb(248 250 252);
          --text-secondary: rgb(148 163 184);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(51, 65, 85, 0.8);
          --border-secondary: rgba(71, 85, 105, 0.5);
          
          /* Brand Colors - Dark Theme */
          --accent-light: var(--primary-400);
          --accent-main: var(--primary-600);
          --accent-dark: var(--primary-700);
          --accent-darker: var(--primary-800);
                  --accent-bg-light: rgba(255, 107, 53, 0.1);
        --accent-bg-medium: rgba(255, 107, 53, 0.2);
        --accent-border: rgba(255, 107, 53, 0.2);
        --accent-glow-light: rgba(255, 107, 53, 0.3);
        --accent-glow-strong: rgba(255, 107, 53, 0.6);
        }

        /* Light Theme */
        .light {
          /* Semantic Colors - Light Theme */
          --background: rgb(255 255 255);
          --background-secondary: rgb(248 250 252);
          --background-tertiary: rgb(241 245 249);
          --surface: rgb(255 255 255);
          --surface-secondary: rgba(248, 250, 252, 0.8);
          --surface-tertiary: rgba(241, 245, 249, 0.8);
          --text-primary: rgb(15 23 42);
          --text-secondary: rgb(71 85 105);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(203, 213, 225, 0.8);
          --border-secondary: rgba(226, 232, 240, 0.5);
          
          /* Brand Colors - Light Theme */
          --accent-light: var(--primary-600);
          --accent-main: var(--primary-700);
          --accent-dark: var(--primary-800);
          --accent-darker: var(--primary-900);
                  --accent-bg-light: rgba(255, 107, 53, 0.08);
        --accent-bg-medium: rgba(255, 107, 53, 0.15);
        --accent-border: rgba(255, 107, 53, 0.3);
        --accent-glow-light: rgba(255, 107, 53, 0.2);
        --accent-glow-strong: rgba(255, 107, 53, 0.4);
        }
        
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        @keyframes rotateFloat {
          0% {
            transform: rotate(0deg) translateY(0px);
          }
          33% {
            transform: rotate(120deg) translateY(-10px);
          }
          66% {
            transform: rotate(240deg) translateY(10px);
          }
          100% {
            transform: rotate(360deg) translateY(0px);
          }
        }
        
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px var(--accent-glow-light);
          }
          50% {
            box-shadow: 0 0 40px var(--accent-glow-strong);
          }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          animation-play-state: paused;
        }
        
        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out forwards;
          animation-play-state: paused;
        }
        
        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
          animation-play-state: paused;
        }
        
        .content-visible .animate-fade-in-up,
        .content-visible .animate-fade-in-left,
        .content-visible .animate-fade-in-right {
          animation-play-state: running;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 8s ease-in-out infinite;
        }
        
        .animate-rotate-float {
          animation: rotateFloat 15s linear infinite;
        }
        
        .animate-slide-in-scale {
          animation: slideInScale 0.8s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        
        .gradient-text {
          background: linear-gradient(-45deg, #FF6B35, #FF8A4C, #FDBA8C, #FF6B35);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .phone-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Loading Animations */
        @keyframes logoScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes particleFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translate(30px, -40px) scale(1.2);
            opacity: 1;
          }
          66% {
            transform: translate(-20px, -20px) scale(0.8);
            opacity: 0.4;
          }
        }
        
        @keyframes particleFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(-40px, 30px) scale(1.3);
            opacity: 0.8;
          }
          75% {
            transform: translate(25px, -35px) scale(0.7);
            opacity: 0.3;
          }
        }
        
        @keyframes particleFloat3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          40% {
            transform: translate(35px, 25px) scale(0.9);
            opacity: 0.9;
          }
          80% {
            transform: translate(-30px, -30px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes loadingPulse {
          0%, 100% {
            box-shadow: 0 0 30px var(--accent-glow-light);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 60px var(--accent-glow-strong);
            transform: scale(1.05);
          }
        }
        
        @keyframes typeWriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes loadingFadeOut {
          to {
            opacity: 0;
            visibility: hidden;
            transform: scale(1.1);
          }
        }
        
        .loading-logo {
          animation: logoScale 2s ease-in-out infinite, loadingPulse 3s ease-in-out infinite;
        }
        
        .loading-particle-1 {
          animation: particleFloat1 4s ease-in-out infinite;
        }
        
        .loading-particle-2 {
          animation: particleFloat2 5s ease-in-out infinite 0.5s;
        }
        
        .loading-particle-3 {
          animation: particleFloat3 6s ease-in-out infinite 1s;
        }
        
        .loading-fade-out {
          animation: loadingFadeOut 0.8s ease-out forwards;
        }
        
        .loading-text {
          animation: fadeInScale 1s ease-out forwards;
        }
        
        /* Pop-in animation for main text */
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .pop-in {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        /* Word transition animation */
        .word-transition {
          transition: opacity 0.3s ease-in-out;
        }
        
        /* Progress Bar Animation */
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        .progress-bar {
          animation: progressFill 3.5s ease-out forwards;
        }
        
        /* Semantic Utility Classes */
        
        /* Backgrounds */
        .bg-theme { background-color: var(--background) !important; }
        .bg-surface { background-color: var(--surface) !important; }
        .bg-surface-secondary { background-color: var(--surface-secondary) !important; }
        .bg-surface-tertiary { background-color: var(--surface-tertiary) !important; }
        
        /* Text Colors */
        .text-primary { color: var(--accent-light) !important; }
        .text-primary-main { color: var(--accent-main) !important; }
        .text-primary-dark { color: var(--accent-dark) !important; }
        .text-theme-primary { color: var(--text-primary) !important; }
        .text-theme-secondary { color: var(--text-secondary) !important; }
        .text-theme-tertiary { color: var(--text-tertiary) !important; }
        .text-primary-hover:hover { color: var(--primary-300) !important; }
        .hover-text-primary:hover { color: var(--accent-light) !important; }
        .hover-text-primary-dark:hover { color: var(--primary-300) !important; }
        
        /* Brand Colors */
        .bg-primary { background-color: var(--accent-light) !important; }
        .bg-primary-main { background-color: var(--accent-main) !important; }
        .bg-primary-dark { background-color: var(--accent-dark) !important; }
        .bg-primary-darker { background-color: var(--accent-darker) !important; }
        .bg-primary-light { background-color: var(--accent-bg-light) !important; }
        .bg-primary-medium { background-color: var(--accent-bg-medium) !important; }
        .bg-primary-btn { background-color: var(--accent-main) !important; }
        .bg-primary-btn:hover { background-color: var(--accent-dark) !important; }
        
        /* Borders */
        .border-theme { border-color: var(--border-primary) !important; }
        .border-theme-secondary { border-color: var(--border-secondary) !important; }
        .border-primary { border-color: var(--accent-border) !important; }
        .border-primary-focus:focus { border-color: var(--accent-main) !important; }
        .ring-primary-focus:focus { ring-color: var(--accent-main) !important; }
        
        /* Gradients */
        .bg-gradient-primary { 
          background: linear-gradient(to bottom right, var(--accent-main), #D4AF37) !important; 
        }
        .bg-gradient-primary-progress { 
          background: linear-gradient(to right, var(--accent-dark), #D4AF37) !important; 
        }
        .border-gradient-primary::after {
          background: linear-gradient(to right, var(--accent-dark), #D4AF37) !important;
        }
        
        /* Background gradient utilities */
        .bg-gradient-primary-soft { 
          background: linear-gradient(to bottom right, var(--accent-bg-medium), rgba(212, 175, 55, 0.3)) !important; 
        }
        .bg-gradient-primary-orange { 
          background: linear-gradient(to top right, rgba(255, 107, 53, 0.2), var(--accent-bg-light)) !important; 
        }
        .bg-gradient-primary-light { 
          background: linear-gradient(to bottom left, rgba(212, 175, 55, 0.25), var(--accent-bg-medium)) !important; 
        }
        
        /* Mockup transition animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap');
        
        /* Scrollbar hide utilities */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* True Mandala Pattern */
        .geometric-pattern-3 {
          background-image: 
            /* Outer petals/rays */
            repeating-conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg 15deg, 
              rgba(255, 107, 53, 0.06) 15deg 22.5deg,
              transparent 22.5deg 37.5deg,
              rgba(255, 107, 53, 0.06) 37.5deg 45deg,
              transparent 45deg),
            /* Middle lotus petals */
            repeating-conic-gradient(from 22.5deg at 50% 50%, 
              transparent 0deg 30deg, 
              rgba(255, 107, 53, 0.04) 30deg 45deg,
              transparent 45deg 75deg,
              rgba(255, 107, 53, 0.04) 75deg 90deg,
              transparent 90deg),
            /* Inner geometric pattern */
            repeating-conic-gradient(from 45deg at 50% 50%, 
              transparent 0deg 45deg, 
              rgba(255, 107, 53, 0.08) 45deg 90deg,
              transparent 90deg),
            /* Concentric circles */
            radial-gradient(circle at 50% 50%, 
              rgba(255, 107, 53, 0.03) 0px,
              rgba(255, 107, 53, 0.03) 2px,
              transparent 2px,
              transparent 25px,
              rgba(255, 107, 53, 0.02) 25px,
              rgba(255, 107, 53, 0.02) 27px,
              transparent 27px,
              transparent 50px,
              rgba(255, 107, 53, 0.015) 50px,
              rgba(255, 107, 53, 0.015) 52px,
              transparent 52px,
              transparent 75px,
              rgba(255, 107, 53, 0.01) 75px,
              rgba(255, 107, 53, 0.01) 77px,
              transparent 77px);
          background-size: 200px 200px, 160px 160px, 120px 120px, 200px 200px;
          background-position: 0 0, 80px 80px, 40px 40px, 0 0;
        }
        
        .islamic-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
        
        .arabic-arch {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        
        /* Cairo Font Family */
        .font-cairo {
          font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        

        
        /* Crypto Ticker Animation */
        @keyframes cryptoTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes cryptoTickerReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .crypto-ticker {
          animation: cryptoTicker 40s linear infinite;
        }
        
        .crypto-ticker:hover {
          animation-play-state: paused;
        }
        
        .crypto-ticker-reverse {
          animation: cryptoTickerReverse 35s linear infinite;
        }
        
        .crypto-ticker-reverse:hover {
          animation-play-state: paused;
        }
        
        .mockup-content {
          animation: fadeIn 0.5s ease-out forwards;
        }
        

        `
      }} />

      {/* Main Content - Only show when loading is complete */}
      {!isLoading && (
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100 content-visible' : 'opacity-0'}`}>
          {/* Cool Vector Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-primary-soft rounded-full blur-3xl animate-pulse animate-float"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-primary-orange rounded-full blur-3xl animate-pulse animate-float-reverse"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-primary-light rounded-full blur-3xl animate-pulse animate-rotate-float"></div>
        
        {/* Floating geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full opacity-80 animate-float-reverse animate-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-primary rounded-full opacity-50 animate-rotate-float animate-delay-400"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-orange-400 rounded-full opacity-40 animate-float animate-delay-600"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-amber-300 rounded-full opacity-70 animate-float-reverse animate-delay-300"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,138,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,138,76,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-fade-in-up">
        <div className="bg-surface-secondary backdrop-blur-2xl border border-theme rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full max-w-4xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3 animate-fade-in-left">
                <div className="w-9 h-9 flex items-center justify-center animate-glow">
                  <img src={theme === 'light' ? Logo2Image : LogoImage} alt="Habibit Logo" className="w-8 h-8 object-contain rounded-lg" />
                </div>
                <span className="text-lg font-bold text-theme-primary">
                  <span className="hidden md:inline">Habibit Exchange</span>
                  <span className="md:hidden">Habibit</span>
                </span>
              </div>

              {/* Navigation Links - Center */}
              <div className="hidden md:flex items-center space-x-6 animate-fade-in-up animate-delay-200">
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4 animate-fade-in-right animate-delay-300">
                <a 
                  href="#top" 
                  className="hidden md:block text-theme-secondary hover:text-theme-primary transition-all duration-300 text-sm font-medium relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary-progress transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link 
                  to="/contact" 
                  className="hidden md:block text-theme-secondary hover:text-theme-primary transition-all duration-300 text-sm font-medium relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary-progress transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Button 
                  size="sm"
                  className="bg-primary-dark hover:bg-primary-darker text-white px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-glow"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
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
        <section className="pt-40 pb-32 px-6 relative geometric-pattern-3">
          {/* Decorative Islamic Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-primary-light/10 islamic-star animate-float opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-32 h-16 bg-primary-light/10 arabic-arch animate-float-reverse opacity-20"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary-light/10 islamic-star animate-rotate-float opacity-20"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary text-primary text-sm font-medium animate-fade-in-up">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                  Coming Soon
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-200">
                  Buy 200+ crypto with <span className="text-primary">Habibit Exchange</span>
                </h1>
                
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg animate-fade-in-up animate-delay-400">
                  Habibit is the crypto exchange that makes trading simple, social, and human. Buy crypto in a few taps, follow your friends' portfolios, and share ideas in a real community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-600">
                  <Button 
                    size="lg"
                    className="bg-primary-dark hover:bg-primary-darker text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 animate-glow"
                    onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Join the Waitlist
                  </Button>
                </div>

              </div>

              {/* Right Content - Social Trading Mockup */}
              <div className="relative animate-fade-in-right animate-delay-300">
                {/* Main Phone Mockup */}
                <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden phone-float">
                  {/* Phone Frame */}
                  <div className="absolute inset-3 bg-gray-950 rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 bg-gray-900 flex items-center justify-between px-4 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
                        <div className="w-6 h-2 bg-gray-600 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Dynamic Content - Rotates between Social Feed and Bitcoin Chart */}
                    {mockupScreenIndex === 0 ? (
                      <>
                        {/* App Header - Social Feed */}
                        <div className="p-4 border-b border-gray-800">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-semibold">Community Feed</h3>
                            <div className="w-8 h-8 bg-brand-orange-700 rounded-full flex items-center justify-center animate-bounce">
                              <div className="w-4 h-4 relative">
                                <div className="absolute inset-0 flex items-center justify-center space-x-0.5">
                                  <div className="w-1 h-1 bg-white rounded-full"></div>
                                  <div className="w-1 h-1 bg-white rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm">See what your friends are trading</p>
                        </div>

                        {/* Social Feed */}
                        <div className="p-4 space-y-4 overflow-y-auto mockup-content">
                      {/* Friend's Trade */}
                      <div className="bg-gray-800/50 rounded-2xl p-4 animate-slide-in-scale">
                        <div className="flex items-center space-x-3 mb-3">
                          <img 
                            src={SarahImage} 
                            alt="Sarah" 
                            className="w-8 h-8 rounded-full object-cover border-2 border-primary animate-pulse"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">Sarah_crypto</p>
                            <p className="text-gray-400 text-xs">2 hours ago</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Just bought more ETH! <span className="inline-block ml-1">
                          <div className="w-3 h-3 bg-gradient-to-tr from-orange-400 to-red-500 rounded-sm transform rotate-45"></div>
                        </span></p>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">ETH</span>
                            <span className="text-green-400 text-sm animate-pulse">+$2,340</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-gray-400">
                          <button className="flex items-center space-x-1 text-xs hover-text-primary transition-colors">
                            <span>👍</span>
                            <span>12</span>
                          </button>
                          <button className="flex items-center space-x-1 text-xs hover-text-primary transition-colors">
                            <span>💬</span>
                            <span>5</span>
                          </button>
                          <button className="text-xs text-primary text-primary-hover transition-colors">Copy Trade</button>
                        </div>
                      </div>

                      {/* Another Friend's Trade */}
                      <div className="bg-gray-800/50 rounded-2xl p-4 animate-slide-in-scale animate-delay-200">
                        <div className="flex items-center space-x-3 mb-3">
                          <img 
                            src={MikeImage} 
                            alt="Mike" 
                            className="w-8 h-8 rounded-full object-cover border-2 border-green-500/20 animate-pulse"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">Mike_trader</p>
                            <p className="text-gray-400 text-xs">4 hours ago</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Loving this BTC dip! <span className="inline-flex items-center space-x-1 ml-1">
                          <div className="w-2 h-2 bg-gradient-primary rounded-sm"></div>
                          <div className="w-2 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                        </span></p>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">BTC</span>
                            <span className="text-green-400 text-sm animate-pulse">+$5,000</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-gray-400">
                          <button className="flex items-center space-x-1 text-xs hover-text-primary transition-colors">
                            <span>👍</span>
                            <span>8</span>
                          </button>
                          <button className="flex items-center space-x-1 text-xs hover-text-primary transition-colors">
                            <span>💬</span>
                            <span>3</span>
        </button>
                          <button className="text-xs text-primary text-primary-hover transition-colors">Copy Trade</button>
                        </div>
                      </div>

                      {/* Your Portfolio Update */}
                      <div className="bg-primary-light border border-primary rounded-2xl p-4 animate-slide-in-scale animate-delay-400">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full animate-glow"></div>
                          <div>
                            <p className="text-white text-sm font-medium">Your Portfolio</p>
                            <p className="text-gray-400 text-xs">Updated now</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">Weekly performance: +15.3% 📈</p>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">Total Value</span>
                            <span className="text-green-400 text-sm animate-pulse">$12,764</span>
                          </div>
                        </div>
                      </div>
                    </div>
                        </>
                    ) : (
                      <>
                        {/* App Header - Bitcoin Chart */}
                        <div className="p-4 border-b border-gray-800">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-semibold">Bitcoin Chart</h3>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-105 animate-bounce">
                              Buy
                            </button>
                          </div>
                          <p className="text-gray-400 text-sm">BTC/USD • Live Price</p>
                        </div>

                                                 {/* Bitcoin Chart Content */}
                         <div className="p-4 space-y-4 overflow-y-auto mockup-content">
                          {/* Price Header */}
                          <div className="text-center mb-6">
                            <div className="text-2xl font-bold text-white mb-1">$43,267.84</div>
                            <div className="flex items-center justify-center space-x-2">
                              <span className="text-green-400 text-sm font-medium">+2.34%</span>
                              <span className="text-gray-400 text-sm">+$987.23</span>
                            </div>
                          </div>

                          {/* Chart Area */}
                          <div className="bg-gray-800/30 rounded-2xl p-4 h-48 relative overflow-hidden">
                            {/* Chart Background Grid */}
                            <div className="absolute inset-0 opacity-20">
                              <div className="grid grid-cols-7 h-full">
                                {[...Array(7)].map((_, i) => (
                                  <div key={i} className="border-r border-gray-600/30"></div>
                                ))}
                              </div>
                              <div className="absolute inset-0 grid grid-rows-4">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="border-b border-gray-600/30"></div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Animated Chart Line */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 180">
                              <defs>
                                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                                </linearGradient>
                              </defs>
                              {/* Chart Area Fill */}
                              <path
                                d="M20 140 Q60 120 100 110 T180 95 Q220 85 260 80 L260 160 L20 160 Z"
                                fill="url(#chartGradient)"
                                className="animate-pulse"
                              />
                              {/* Chart Line */}
                              <path
                                d="M20 140 Q60 120 100 110 T180 95 Q220 85 260 80"
                                stroke="#22c55e"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse"
                              />
                              {/* Data Points */}
                              <circle cx="100" cy="110" r="3" fill="#22c55e" className="animate-pulse" />
                              <circle cx="180" cy="95" r="3" fill="#22c55e" className="animate-pulse" />
                              <circle cx="260" cy="80" r="3" fill="#22c55e" className="animate-pulse" />
                            </svg>
                            
                            {/* Chart Labels */}
                            <div className="absolute bottom-2 left-4 text-xs text-gray-500">24H</div>
                            <div className="absolute bottom-2 right-4 text-xs text-gray-500">Now</div>
                          </div>

                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-800/50 rounded-lg p-3">
                              <div className="text-gray-400 text-xs mb-1">24h High</div>
                              <div className="text-white text-sm font-medium">$43,891.32</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3">
                              <div className="text-gray-400 text-xs mb-1">24h Low</div>
                              <div className="text-white text-sm font-medium">$42,156.78</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3">
                              <div className="text-gray-400 text-xs mb-1">Volume</div>
                              <div className="text-white text-sm font-medium">$2.1B</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3">
                              <div className="text-gray-400 text-xs mb-1">Market Cap</div>
                              <div className="text-white text-sm font-medium">$847B</div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-3 mt-4">
                            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105">
                              Buy BTC
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105">
                              Sell BTC
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Floating Elements - Change based on screen */}
                {mockupScreenIndex === 0 ? (
                  <>
                    {/* Social Elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary-light rounded-2xl backdrop-blur-sm border border-primary flex items-center justify-center animate-float">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="absolute bottom-20 -left-6 w-12 h-12 bg-brand-orange-500/20 rounded-xl backdrop-blur-sm border border-brand-orange-500/20 flex items-center justify-center animate-float-reverse">
                      <span className="text-lg">💬</span>
                    </div>
                    <div className="absolute top-1/2 -right-4 w-10 h-10 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-500/20 flex items-center justify-center animate-rotate-float">
                      <span className="text-sm">📈</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Trading Elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500/20 rounded-2xl backdrop-blur-sm border border-orange-500/20 flex items-center justify-center animate-float">
                      <span className="text-2xl">₿</span>
                    </div>
                    <div className="absolute bottom-20 -left-6 w-12 h-12 bg-yellow-500/20 rounded-xl backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center animate-float-reverse">
                      <span className="text-lg">📊</span>
                    </div>
                    <div className="absolute top-1/2 -right-4 w-10 h-10 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-500/20 flex items-center justify-center animate-rotate-float">
                      <span className="text-sm">💰</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 border-t border-gray-800/50 relative">
          {/* Decorative Elements for Features */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary-light/5 islamic-star animate-float opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-28 h-14 bg-primary-light/5 arabic-arch animate-float-reverse opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
                Why traders choose <span className="text-primary">Habibit</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                Everything you need to trade crypto with confidence, learn from friends, and build your portfolio together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* Trading Chart */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex items-end justify-between px-0.5 pb-0.5">
                        <div className="w-0.5 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-orange-400 rounded-full"></div>
                        <div className="w-0.5 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>,
                  title: "Simple & Smart Crypto Trading",
                  description: "Buy and sell crypto with ease. No complex charts or confusing interfaces—just simple, smart trading that works."
                },
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* Social Network/Profiles */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-brand-orange-500 rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                        <div className="relative">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                      <div className="w-1 h-1 bg-brand-orange-400 rounded-full absolute -top-0.5 -right-0.5"></div>
                                                      <div className="w-1 h-1 bg-amber-400 rounded-full absolute -bottom-0.5 -left-0.5"></div>
                          <div className="w-0.5 h-2 bg-primary absolute top-0.5 left-0.5 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>,
                  title: "Social Portfolios",
                  description: "Follow your friends' portfolios and copy trades from top performers. Learn from the best and grow together."
                },
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* Timeline/Feed */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex flex-col items-center justify-center space-y-0.5">
                        <div className="w-3 h-0.5 bg-green-400 rounded-full"></div>
                                                  <div className="w-2 h-0.5 bg-amber-400 rounded-full"></div>
                        <div className="w-3 h-0.5 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>,
                  title: "Community Timeline",
                  description: "Share your wins, ask questions, and learn from a supportive community of traders who've got your back."
                },
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* User-friendly interface */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                        <div className="relative">
                          <div className="w-2 h-2 border border-pink-400 rounded"></div>
                          <div className="w-1 h-0.5 bg-pink-400 rounded-full absolute top-0.5 left-0.5"></div>
                          <div className="w-0.5 h-0.5 bg-red-400 rounded-full absolute bottom-0.5 right-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>,
                  title: "Built for Retail",
                  description: "Clean design with no jargon. We speak human, not crypto-bro. Perfect for beginners and pros alike."
                },
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* Transparency/Glass effect */}
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                        <div className="relative">
                          <div className="w-2 h-2 border border-amber-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-amber-400 rounded-full absolute top-0.5 left-0.5 opacity-60"></div>
                          <div className="w-0.5 h-0.5 bg-primary rounded-full absolute bottom-0 right-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>,
                  title: "Transparent by Design",
                  description: "See every move. No hidden fees, no confusing terms — just honest trading you can trust."
                },
                {
                  icon: <div className="w-6 h-6 relative">
                    {/* Human Connection & Support */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-400 to-brand-orange-500 rounded-lg p-1">
                      <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                        <div className="relative">
                          {/* Two people supporting each other */}
                                                      <div className="w-1.5 h-1.5 bg-brand-orange-400 rounded-full"></div>
                                                      <div className="w-1.5 h-1.5 bg-brand-orange-400 rounded-full absolute -right-1 top-0"></div>
                          {/* Heart/connection symbol between them */}
                          <div className="w-0.5 h-0.5 bg-pink-300 rounded-full absolute -right-0.5 top-0.5"></div>
                          {/* Supporting hand/gesture */}
                                                      <div className="w-1 h-0.5 bg-brand-orange-300 rounded-full absolute bottom-0 left-0.25 rotate-12"></div>
                                                      <div className="w-1 h-0.5 bg-brand-orange-300 rounded-full absolute bottom-0 right-0.25 -rotate-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>,
                  title: "Your Crypto Companion",
                  description: "Human, helpful, and always by your side. We're here to make crypto trading feel less scary and more social."
                }
              ].map((feature, index) => (
                <div key={index} className="animate-fade-in-up transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl" style={{animationDelay: `${index * 0.1}s`}}>
                  <Card className="bg-surface border-theme hover:border-primary transition-all duration-300 group card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-medium transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-primary-dark transition-colors">{feature.title}</h3>
                    <p className="text-theme-secondary leading-relaxed group-hover:text-theme-primary transition-colors">{feature.description}</p>
                  </CardContent>
                </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Stepper Section */}
        <section className="py-20 px-6 bg-surface-secondary/10 relative">
          {/* Decorative Islamic Elements */}
          <div className="absolute top-16 left-16 w-20 h-20 bg-primary-light/5 islamic-star animate-float opacity-25"></div>
          <div className="absolute bottom-16 right-16 w-24 h-12 bg-primary-light/5 arabic-arch animate-float-reverse opacity-25"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
                Get started in <span className="text-primary">3 simple steps</span>
              </h2>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                From signup to trading with friends - we've made crypto social and simple.
              </p>
            </div>

            {/* Stepper - Horizontal Timeline */}
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Container */}
              <div className="relative">
                {/* Dotted Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5">
                  <div className="w-full h-full" 
                       style={{backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 8px, hsl(var(--primary)) 8px, hsl(var(--primary)) 16px)'}}></div>
                </div>
                
                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                  {/* Step 1: Create Account */}
                  <div className="relative animate-fade-in-up animate-delay-400 flex flex-col items-center group">
                    {/* Step Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow shadow-lg">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-40 h-40 mb-6 group-hover:scale-110 transition-all duration-300">
                      <img src={CreateAccountImage} alt="Create Account" className="w-full h-full object-contain rounded-2xl shadow-lg" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-primary-dark transition-colors text-center">
                      Create account
                    </h3>
                    <p className="text-theme-secondary text-sm leading-relaxed group-hover:text-theme-primary transition-colors text-center max-w-xs">
                      Sign up in seconds with just your email. No complicated forms or endless verification steps.
                    </p>
                  </div>

                  {/* Step 2: Get Verified */}
                  <div className="relative animate-fade-in-up animate-delay-500 flex flex-col items-center group">
                    {/* Step Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow shadow-lg">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-40 h-40 mb-6 group-hover:scale-110 transition-all duration-300">
                      <img src={VerifiedImage} alt="Get Verified" className="w-full h-full object-contain rounded-2xl shadow-lg" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-primary-dark transition-colors text-center">
                      Get verified the same day
                    </h3>
                    <p className="text-theme-secondary text-sm leading-relaxed group-hover:text-theme-primary transition-colors text-center max-w-xs">
                      Fast, secure verification process completed within hours.
                    </p>
                  </div>

                  {/* Step 3: Build & Share Portfolio */}
                  <div className="relative animate-fade-in-up animate-delay-600 flex flex-col items-center group">
                    {/* Step Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow shadow-lg">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-40 h-40 mb-6 group-hover:scale-110 transition-all duration-300">
                      <img src={BuyAndSellImage} alt="Build and Share Portfolio" className="w-full h-full object-contain rounded-2xl shadow-lg" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-primary-dark transition-colors text-center">
                      Build and share your crypto portfolio
                    </h3>
                    <p className="text-theme-secondary text-sm leading-relaxed group-hover:text-theme-primary transition-colors text-center max-w-xs">
                      Start trading, follow friends, and share your wins. Build your crypto portfolio with a supportive community.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Available Cryptocurrencies Section */}
        <section className="py-20 px-6 bg-surface-secondary/30 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
                Build and share your crypto <span className="text-primary">portfolio</span>
              </h2>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                Trade the most popular cryptocurrencies with zero complexity. From Bitcoin to emerging tokens.
              </p>
            </div>

            {/* Crypto Ticker - Dual Direction */}
            <div className="space-y-4">
              {/* First Ticker - Moving Right to Left */}
              <div className="relative overflow-hidden rounded-xl bg-surface-secondary/20">
                <div className="crypto-ticker flex space-x-4 py-4">
                  {/* First set of crypto cards */}
                  {cryptoData.slice(0, 6).map((crypto, index) => (
                    <div key={`first-${index}`} className="flex-none w-48">
                      <Card className="bg-surface border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${crypto.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                              {crypto.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-theme-primary font-medium text-xs truncate group-hover:text-primary transition-colors">{crypto.name}</h3>
                              <div className="flex items-center justify-between mt-1">
                                <p className="text-theme-primary font-semibold text-xs">{crypto.price}</p>
                                <p className={`text-xs font-medium ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'} transition-colors duration-300`}>
                                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {cryptoData.slice(0, 6).map((crypto, index) => (
                    <div key={`second-${index}`} className="flex-none w-48">
                      <Card className="bg-surface border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${crypto.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                              {crypto.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-theme-primary font-medium text-xs truncate group-hover:text-primary transition-colors">{crypto.name}</h3>
                              <div className="flex items-center justify-between mt-1">
                                <p className="text-theme-primary font-semibold text-xs">{crypto.price}</p>
                                <p className={`text-xs font-medium ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'} transition-colors duration-300`}>
                                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Ticker - Moving Left to Right */}
              <div className="relative overflow-hidden rounded-xl bg-surface-secondary/20">
                <div className="crypto-ticker-reverse flex space-x-4 py-4">
                  {/* First set of crypto cards (second half) */}
                  {cryptoData.slice(6, 12).map((crypto, index) => (
                    <div key={`reverse-first-${index}`} className="flex-none w-48">
                      <Card className="bg-surface border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${crypto.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                              {crypto.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-theme-primary font-medium text-xs truncate group-hover:text-primary transition-colors">{crypto.name}</h3>
                              <div className="flex items-center justify-between mt-1">
                                <p className="text-theme-primary font-semibold text-xs">{crypto.price}</p>
                                <p className={`text-xs font-medium ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'} transition-colors duration-300`}>
                                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {cryptoData.slice(6, 12).map((crypto, index) => (
                    <div key={`reverse-second-${index}`} className="flex-none w-48">
                      <Card className="bg-surface border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${crypto.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                              {crypto.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-theme-primary font-medium text-xs truncate group-hover:text-primary transition-colors">{crypto.name}</h3>
                              <div className="flex items-center justify-between mt-1">
                                <p className="text-theme-primary font-semibold text-xs">{crypto.price}</p>
                                <p className={`text-xs font-medium ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'} transition-colors duration-300`}>
                                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 px-6 relative">
          {/* Subtle decorative arch */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-primary-light/5 arabic-arch animate-float opacity-20"></div>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Ready to make crypto <span className="text-primary">social</span>?
            </h3>
            
            <p className="text-xl text-theme-secondary mb-12 animate-fade-in-up animate-delay-200">
              Be among the first to experience the future of social crypto trading. Get early access when we launch.
            </p>

            <Card className="bg-surface border-theme max-w-md mx-auto card-hover animate-fade-in-up animate-delay-400">
              <CardContent className="p-8">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <Input
                      type="email"
                      placeholder="Enter your email for early access"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      className="bg-surface-secondary border-theme text-theme-primary placeholder:text-theme-tertiary border-primary-focus ring-primary-focus h-12 transition-all duration-300 hover:border-primary"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary-btn text-white font-semibold h-12 rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
                    >
                      Join the Waitlist
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4 animate-fade-in-up">
                    <div className="text-4xl mb-4 animate-bounce">🎉</div>
                    <h4 className="text-xl font-bold text-theme-primary mb-2">
                      Welcome to the community!
                    </h4>
                    <p className="text-theme-secondary">
                      We'll notify you when Habibit launches with exclusive early access.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-left">
                <div className="w-10 h-10 flex items-center justify-center animate-glow">
                  <img src={theme === 'light' ? Logo2Image : LogoImage} alt="Habibit Logo" className="w-9 h-9 object-contain rounded-lg" />
                </div>
                <span className="text-xl font-bold text-theme-primary">
                  <span className="hidden md:inline">Habibit Exchange</span>
                  <span className="md:hidden">Habibit</span>
                </span>
              </div>
              
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
        </div>
      )}


    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
