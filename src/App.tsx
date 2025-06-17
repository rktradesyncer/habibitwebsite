import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CornerDownRight, CornerDownLeft } from 'lucide-react'
import SarahImage from './assets/Sarah.png'
import MikeImage from './assets/Mike.png'
// Logo is now loaded from public folder
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
        <div className="min-h-screen bg-black text-white font-cairo overflow-x-hidden transition-colors duration-300">

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
          --background: rgb(0 0 0);
          --background-secondary: rgb(0 0 0);
          --background-tertiary: rgb(0 0 0);
          --surface: rgb(20 29 47);
          --surface-secondary: rgba(30, 41, 59, 0.9);
          --surface-tertiary: rgba(51, 65, 85, 0.8);
          --text-primary: rgb(248 250 252);
          --text-secondary: rgb(148 163 184);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(51, 65, 85, 0.5);
          --border-secondary: rgba(71, 85, 105, 0.3);
          
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
          --background: rgb(249 250 251);
          --background-secondary: rgb(243 244 246);
          --background-tertiary: rgb(229 231 235);
          --surface: rgb(255 255 255);
          --surface-secondary: rgba(255, 255, 255, 0.9);
          --surface-tertiary: rgba(249, 250, 251, 0.9);
          --text-primary: rgb(15 23 42);
          --text-secondary: rgb(71 85 105);
          --text-tertiary: rgb(100 116 139);
          --border-primary: rgba(203, 213, 225, 0.6);
          --border-secondary: rgba(226, 232, 240, 0.4);
          
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
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .dark .card-hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
        }
        
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .dark .card-hover:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 107, 53, 0.2);
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
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;500;600;700&display=swap');
        
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
        
        /* Enhanced Islamic Architectural Elements */
        .mosque-dome {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(212, 175, 55, 0.1));
          border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
          position: relative;
        }
        
        .mosque-dome::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 16px;
          background: linear-gradient(to bottom, #FFD700, #D4AF37);
          border-radius: 2px;
        }
        
        .mosque-dome::after {
          content: '☪';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          color: #FFD700;
          font-size: 12px;
        }
        
        .islamic-arabesque {
          background-image: 
            /* Complex Islamic Geometric Pattern - Subtle */
            repeating-conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg 10deg, 
              rgba(255, 215, 0, 0.02) 10deg 20deg,
              transparent 20deg 30deg,
              rgba(224, 107, 93, 0.015) 30deg 40deg,
              transparent 40deg 50deg,
              rgba(255, 215, 0, 0.01) 50deg 60deg,
              transparent 60deg),
            repeating-conic-gradient(from 30deg at 50% 50%, 
              transparent 0deg 15deg, 
              rgba(224, 107, 93, 0.012) 15deg 25deg,
              transparent 25deg 35deg,
              rgba(255, 215, 0, 0.008) 35deg 45deg,
              transparent 45deg),
            radial-gradient(circle at 50% 50%, 
              rgba(255, 215, 0, 0.005) 0px,
              rgba(255, 215, 0, 0.005) 1px,
              transparent 1px,
              transparent 40px,
              rgba(224, 107, 93, 0.004) 40px,
              rgba(224, 107, 93, 0.004) 41px,
              transparent 41px);
          background-size: 120px 120px, 80px 80px, 160px 160px;
          background-position: 0 0, 40px 40px, 80px 80px;
        }
        
        .desert-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(224, 107, 93, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 50% 50%, rgba(243, 209, 85, 0.06) 0%, transparent 30%),
            linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.02) 50%, transparent 60%);
          background-size: 200px 200px, 150px 150px, 100px 100px, 300px 300px;
        }
        
        .minaret {
          width: 12px;
          height: 80px;
          background: linear-gradient(to bottom, 
            rgba(255, 215, 0, 0.3) 0%,
            rgba(212, 175, 55, 0.2) 70%,
            rgba(224, 107, 93, 0.1) 100%);
          border-radius: 6px;
          position: relative;
        }
        
        .minaret::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 12px;
          background: rgba(255, 215, 0, 0.4);
          border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        }
        
        /* Arabic Calligraphy Effects */
        .arabic-text {
          font-family: 'Amiri', 'Scheherazade New', serif;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
        }
        
        .calligraphy-glow {
          background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.4));
        }
        
        /* Traditional Pattern Elements */
        .geometric-border {
          border-image: linear-gradient(45deg, 
            #FFD700 0%, 
            #E06B5D 25%, 
            #F3D155 50%, 
            #D4AF37 75%, 
            #FFD700 100%) 1;
          border-width: 2px;
          border-style: solid;
        }
        
        .islamic-star-complex {
          clip-path: polygon(
            50% 0%, 
            57% 20%, 
            80% 20%, 
            65% 35%, 
            85% 60%, 
            60% 50%, 
            70% 80%, 
            50% 65%, 
            30% 80%, 
            40% 50%, 
            15% 60%, 
            35% 35%, 
            20% 20%, 
            43% 20%
          );
        }
        
        /* Cairo Font Family */
        .font-cairo {
          font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        
        .font-arabic {
          font-family: 'Amiri', 'Scheherazade New', 'Noto Sans Arabic', serif;
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

      {/* Glass Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="px-6 py-4">
          <div className="max-w-7xl mx-auto">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <img src="/h-logo-orange.png" alt="Habibit Logo" className="w-10 h-10 object-contain" />
              <span className="text-white text-2xl font-bold italic">Habibit</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 relative pt-20">
          {/* Logo Pattern Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `url('/h-logo.png')`,
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}>
            </div>
          </div>

          

          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">

                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-200">
                  Buy 200+ crypto with <span className="text-primary">Habibit Exchange</span>
                </h1>
                
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg animate-fade-in-up animate-delay-400">
                  Habibit is the crypto exchange that makes trading simple, social, and human. Buy crypto in a few taps, follow your friends' portfolios, and share ideas in a real community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-600">
                  <Button 
                    className="bg-[#f6703f] hover:bg-[#e5602f] text-black px-10 py-5 font-bold uppercase text-lg transition-all duration-300 hover:scale-105 transform skew-x-[-8deg]"
                    onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="transform skew-x-[8deg] inline-block">Join the Waitlist</span>
                  </Button>
                </div>

              </div>

              {/* Right Content - App Screenshot */}
              <div className="relative animate-fade-in-right animate-delay-300">
                <img 
                  src="/assetiphone.png" 
                  alt="Habibit App" 
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 border-t border-gray-800/50 relative">

          
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
                  <Card className="bg-surface border border-theme hover:border-primary transition-all duration-300 group card-hover h-full backdrop-blur-sm">
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
                      <div className="w-16 h-16 bg-[#f6703f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                      <div className="w-16 h-16 bg-[#f6703f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                      <div className="w-16 h-16 bg-[#f6703f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                      <Card className="bg-surface border border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm shadow-sm hover:shadow-lg">
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
                      <Card className="bg-surface border border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm shadow-sm hover:shadow-lg">
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
                      <Card className="bg-surface border border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm shadow-sm hover:shadow-lg">
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
                      <Card className="bg-surface border border-theme hover:border-primary transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm shadow-sm hover:shadow-lg">
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

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Ready to make crypto <span className="text-primary">social</span>?
            </h3>
            
            <p className="text-xl text-theme-secondary mb-12 animate-fade-in-up animate-delay-200">
              Be among the first to experience the future of social crypto trading. Get early access when we launch.
            </p>

            <Card className="bg-surface border border-theme max-w-md mx-auto card-hover animate-fade-in-up animate-delay-400 backdrop-blur-sm">
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
                      className="w-full bg-[#f6703f] hover:bg-[#e5602f] text-black font-bold uppercase h-14 transition-all duration-300 hover:scale-105 transform skew-x-[-8deg]"
                    >
                      <span className="transform skew-x-[8deg] inline-block">Join the Waitlist</span>
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
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/h-logo.png" alt="Habibit Logo" className="w-9 h-9 object-contain" />
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
