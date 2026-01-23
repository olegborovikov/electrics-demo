'use client'

import { useEffect, useState } from 'react'
import { Zap, ClipboardCheck, Wrench, CheckCircle, Shield } from 'lucide-react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Заявка и консультация",
      description: "Бесплатный выезд для осмотра и составления сметы",
      color: "accent-emerald",
      icon: ClipboardCheck
    },
    {
      number: "02", 
      title: "Проектирование",
      description: "Разработка схемы электроснабжения объекта",
      color: "accent-blue",
      icon: Zap
    },
    {
      number: "03",
      title: "Монтажные работы",
      description: "Профессиональная установка с соблюдением всех норм",
      color: "accent-purple",
      icon: Wrench
    },
    {
      number: "04",
      title: "Проверка и тестирование",
      description: "Комплексное тестирование всех систем и цепей",
      color: "accent-emerald",
      icon: CheckCircle
    },
    {
      number: "05",
      title: "Сдача и гарантия",
      description: "Подписание акта и гарантийное обслуживание",
      color: "accent-blue",
      icon: Shield
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
        }, index * 800 + 500)
      })
    }, 1000)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(var(--accent-emerald) 1px, transparent 1px), linear-gradient(90deg, var(--accent-emerald) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Как мы работаем
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Процесс работы
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            От заявки до готового результата — прозрачно и профессионально
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.number}
                  className={`relative bg-card clean-border rounded-2xl p-6 transition-all duration-500 ${
                    activeFrame >= index 
                      ? 'shadow-lg border-accent-emerald/30' 
                      : 'opacity-60'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${
                    activeFrame >= index 
                      ? 'bg-accent-emerald text-slate-900' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-4 ${
                    activeFrame >= index 
                      ? 'bg-accent-emerald/10' 
                      : 'bg-muted'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      activeFrame >= index 
                        ? 'text-accent-emerald' 
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-8 py-6 subtle-shadow">
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
              <div className="text-left">
                <span className="text-2xl font-bold text-foreground block">500+</span>
                <span className="text-sm text-muted-foreground">объектов</span>
              </div>
            </div>
            
            <div className="w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="text-left">
                <span className="text-2xl font-bold text-foreground block">10+ лет</span>
                <span className="text-sm text-muted-foreground">опыта</span>
              </div>
            </div>
            
            <div className="w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="text-left">
                <span className="text-2xl font-bold text-foreground block">100%</span>
                <span className="text-sm text-muted-foreground">гарантия</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
