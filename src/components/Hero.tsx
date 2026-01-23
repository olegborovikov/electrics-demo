'use client'

import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Electrical Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-emerald/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-purple/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-slate-900/90 backdrop-blur-xl border-b border-accent-emerald/20' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <Zap className="w-8 h-8 text-accent-emerald" />
              <span className="font-bold text-white text-xl tracking-wider">ЭЛЕКТРИК</span>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#portfolio" 
                className="text-white hover:text-accent-emerald font-medium gentle-animation hover:scale-105"
              >
                Работы
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-accent-emerald font-medium gentle-animation hover:scale-105"
              >
                Процесс
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-accent-emerald font-medium gentle-animation hover:scale-105"
              >
                Услуги
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-accent-emerald font-medium gentle-animation hover:scale-105"
              >
                Команда
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-accent-emerald font-medium gentle-animation hover:scale-105"
              >
                Контакты
              </a>
            </div>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              {/* CTA Button - Hidden on mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:flex items-center gap-2 bg-accent-emerald backdrop-blur-sm text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 gentle-animation cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                Вызвать мастера
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-accent-emerald/20 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Close Button at the top */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 text-white">
              <a 
                href="#portfolio" 
                className="mobile-menu-link px-4 py-3 hover:text-accent-emerald hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Работы
              </a>
              <a 
                href="#about" 
                className="mobile-menu-link px-4 py-3 hover:text-accent-emerald hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Процесс
              </a>
              <a 
                href="#services" 
                className="mobile-menu-link px-4 py-3 hover:text-accent-emerald hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#team" 
                className="mobile-menu-link px-4 py-3 hover:text-accent-emerald hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Команда
              </a>
              <a 
                href="#contact" 
                className="mobile-menu-link px-4 py-3 hover:text-accent-emerald hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </a>
            </div>

            {/* Mobile CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center justify-center gap-2 bg-accent-emerald text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 active:bg-yellow-500 gentle-animation mt-8 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              Вызвать мастера
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Big Studio Title - Lower Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white/80">
              Профессиональные электромонтажные работы
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-6">
            <span className="block">ЭЛЕКТРИКА</span>
            <span className="block text-accent-emerald">БЕЗ ПРОБЛЕМ</span>
            <span className="block">ПОД КЛЮЧ</span>
          </h1>
          <p className="text-lg text-white/70 max-w-lg mb-8">
            Монтаж, ремонт и обслуживание электрических сетей любой сложности. Работаем с частными домами и коммерческими объектами.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Zap className="w-4 h-4 text-accent-emerald" />
              <span className="text-white text-sm font-medium">Гарантия 5 лет</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Zap className="w-4 h-4 text-accent-emerald" />
              <span className="text-white text-sm font-medium">Выезд за 1 час</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20">
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent-emerald rounded-lg transform rotate-12" />
        <div className="absolute bottom-40 right-40 w-24 h-24 border-2 border-accent-blue rounded-lg transform -rotate-6" />
      </div>
    </div>
  )
}
