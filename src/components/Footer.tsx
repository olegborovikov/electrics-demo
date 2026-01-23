'use client'

import { Zap, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const services = [
    'Электрика в квартирах',
    'Электрика в домах',
    'Освещение',
    'Электробезопасность',
    'Ремонт и диагностика',
    'Коммерческие объекты'
  ]

  return (
    <footer className="relative py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-accent-emerald" />
                <span className="font-bold text-white text-2xl tracking-wider">ЭЛЕКТРИК</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Профессиональные электромонтажные работы любой сложности. 
                Гарантия качества и безопасности на все виды работ.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+79991234567" className="flex items-center gap-3 text-white/80 hover:text-accent-emerald transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <a href="mailto:info@elektrik.ru" className="flex items-center gap-3 text-white/80 hover:text-accent-emerald transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@elektrik.ru</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span>Москва и Московская область</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <h4 className="font-bold text-xl text-white mb-4">Услуги</h4>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="text-white/70 hover:text-accent-emerald gentle-animation text-sm"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <h4 className="font-bold text-xl text-white mb-4">Гарантии</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-emerald/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Гарантия 5 лет</p>
                    <p className="text-white/60 text-sm">На все виды работ</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-emerald/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Официальный договор</p>
                    <p className="text-white/60 text-sm">С указанием сроков и стоимости</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-emerald/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Сертификаты</p>
                    <p className="text-white/60 text-sm">Все мастера с допуском</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              © 2025 ЭЛЕКТРИК. Все права защищены.
            </div>
            <div className="text-sm text-white/70">
              Работаем по Москве и Московской области
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
