'use client'

import { useState, useEffect } from 'react'
import { Zap, Home, Building2, Lightbulb, Shield, Wrench, Cable } from 'lucide-react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      id: 'residential',
      title: "Электрика в квартирах",
      description: "Полная или частичная замена проводки, установка розеток, выключателей, щитков. Работаем в новостройках и старом фонде.",
      icon: Home,
      features: ["Замена проводки", "Установка щитков", "Монтаж розеток"]
    },
    {
      id: 'houses',
      title: "Электрика в домах", 
      description: "Комплексное электроснабжение частных домов и коттеджей. Подключение к сети, разводка по этажам, автоматика.",
      icon: Building2,
      features: ["Ввод в дом", "Разводка по этажам", "Заземление"]
    },
    {
      id: 'lighting',
      title: "Освещение",
      description: "Проектирование и монтаж систем освещения любой сложности. Умный свет, LED-подсветка, ландшафтное освещение.",
      icon: Lightbulb,
      features: ["Дизайн-проект", "LED-системы", "Умный дом"]
    },
    {
      id: 'safety',
      title: "Электробезопасность",
      description: "Установка УЗО, автоматов, молниезащиты. Проверка и модернизация существующих систем безопасности.",
      icon: Shield,
      features: ["УЗО и автоматы", "Молниезащита", "Аудит сетей"]
    },
    {
      id: 'repair',
      title: "Ремонт и диагностика",
      description: "Поиск и устранение неисправностей, замена вышедших из строя элементов. Аварийный выезд 24/7.",
      icon: Wrench,
      features: ["Диагностика", "Аварийный выезд", "Замена элементов"]
    },
    {
      id: 'commercial',
      title: "Коммерческие объекты",
      description: "Электроснабжение офисов, магазинов, ресторанов. Промышленная электрика, трёхфазные сети.",
      icon: Cable,
      features: ["Офисы и магазины", "Промышленные сети", "Трёхфазка"]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-2xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(rgba(250,204,21,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.5) 1px, transparent 1px)`,
             backgroundSize: '60px 60px'
           }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Zap className="w-5 h-5 text-accent-emerald" />
            <span className="text-sm font-semibold text-white/80">
              Полный спектр услуг
            </span>
            <Zap className="w-5 h-5 text-accent-emerald" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Наши услуги
          </h2>
          
          <p className={`text-xl text-white/70 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Выполняем все виды электромонтажных работ с гарантией качества
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-accent-emerald/30 hover:scale-105 cursor-pointer ${
                  hoveredService === service.id ? 'ring-2 ring-accent-emerald/50' : ''
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent-emerald/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-emerald/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-accent-emerald" />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-accent-emerald transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-white/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-accent-emerald text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors cursor-pointer"
          >
            <Zap className="w-5 h-5" />
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  )
}
