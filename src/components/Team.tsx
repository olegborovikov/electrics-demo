'use client'

import { Zap, Award, Clock, Shield } from 'lucide-react'

export function Team() {
  const team = [
    {
      name: "Алексей Петров",
      role: "Главный электрик",
      experience: "15 лет опыта",
      specialization: "Промышленная электрика, умный дом"
    },
    {
      name: "Дмитрий Сидоров",
      role: "Электромонтажник",
      experience: "10 лет опыта",
      specialization: "Жилые помещения, освещение"
    },
    {
      name: "Максим Козлов",
      role: "Электромонтажник",
      experience: "8 лет опыта",
      specialization: "Коммерческие объекты, щитовое оборудование"
    },
    {
      name: "Сергей Новиков",
      role: "Инженер-проектировщик",
      experience: "12 лет опыта",
      specialization: "Проектирование, согласование документации"
    }
  ]

  const advantages = [
    {
      icon: Award,
      title: "Сертифицированные специалисты",
      description: "Все мастера имеют допуск к работам до 1000В"
    },
    {
      icon: Clock,
      title: "Точно в срок",
      description: "Соблюдаем оговоренные сроки выполнения работ"
    },
    {
      icon: Shield,
      title: "Страхование ответственности",
      description: "Полное страхование всех выполняемых работ"
    }
  ]

  return (
    <section id="team" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Наша команда
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">Профессионалы</span>
            <span className="block text-accent-emerald">своего дела</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Опытные мастера с официальными допусками и сертификатами
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-card clean-border rounded-2xl p-6 text-center hover:border-accent-emerald/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent-emerald" />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-accent-emerald transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-accent-emerald font-medium text-sm mb-2">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm mb-2">
                  {member.experience}
                </p>
                
                <p className="text-muted-foreground text-xs">
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-emerald/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-accent-emerald" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {advantage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
