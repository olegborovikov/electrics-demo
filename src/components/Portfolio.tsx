'use client'

import { Zap, CheckCircle } from 'lucide-react'

export function Portfolio() {
  const projects = [
    {
      title: "Электрика в новостройке",
      description: "Полная разводка электричества в 3-комнатной квартире. Установка 45 розеток, 20 выключателей, LED-освещение.",
      area: "85 м²",
      duration: "7 дней",
      type: "Квартира"
    },
    {
      title: "Загородный дом под ключ",
      description: "Электроснабжение коттеджа: ввод 15 кВт, три этажа, умный дом, резервное питание.",
      area: "250 м²",
      duration: "14 дней",
      type: "Частный дом"
    },
    {
      title: "Ресторан в центре",
      description: "Коммерческое освещение, силовые линии для кухни, аварийное освещение, автоматика.",
      area: "180 м²",
      duration: "10 дней",
      type: "Коммерческий"
    }
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Наши работы
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Выполненные проекты</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Более 500 успешно реализованных объектов по Москве и области
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card clean-border rounded-2xl overflow-hidden elevated-shadow hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-accent-emerald/30 group-hover:text-accent-emerald/50 transition-colors" />
                  <span className="absolute top-4 right-4 bg-accent-emerald text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-emerald transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" />
                      <span className="text-muted-foreground">{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" />
                      <span className="text-muted-foreground">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Хотите увидеть больше примеров работ?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            <Zap className="w-5 h-5" />
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  )
}
