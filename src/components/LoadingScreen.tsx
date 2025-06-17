'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/logo.png'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Add delay before hiding
          setTimeout(() => {
            setIsVisible(false)
            // Wait for fade out animation to complete
            setTimeout(onComplete, 500)
          }, 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '300px 300px, 400px 400px, 350px 350px, 450px 450px'
        }}></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-4 animate-pulse">
            <Image 
              src={LogoImage} 
              alt="Habibit Logo" 
              width={96} 
              height={96} 
              className="object-contain rounded-2xl shadow-2xl shadow-orange-500/30"
            />
          </div>
          
          {/* Brand Name */}
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">
              Habibit Exchange
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg">Coming to the UAE 🇦🇪</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-orange-500/30"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center mt-3 text-orange-400 font-semibold">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-300 text-sm animate-pulse">
          Preparing your crypto experience...
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-amber-500/10 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  )
} 