'use client'

import { useState } from 'react'
import { Zap, Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Свяжитесь с нами
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Нужен электрик?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Оставьте заявку и мы перезвоним в течение 15 минут
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-background clean-border rounded-3xl p-8 lg:p-10 elevated-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent-emerald" />
                Оставить заявку
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-emerald/50 focus:border-accent-emerald transition-colors"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-emerald/50 focus:border-accent-emerald transition-colors"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Опишите задачу
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-emerald/50 focus:border-accent-emerald transition-colors resize-none"
                    placeholder="Расскажите, какую работу нужно выполнить..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent-emerald text-slate-900 font-semibold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow hover:elevated-shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Телефон</h4>
                    <a href="tel:+79991234567" className="text-2xl font-bold text-accent-emerald hover:underline">
                      +7 (999) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Звоните в любое время
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow hover:elevated-shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@elektrik.ru" className="text-lg text-foreground hover:text-accent-blue transition-colors">
                      info@elektrik.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ответим в течение часа
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Address */}
              <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow hover:elevated-shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Адрес</h4>
                    <p className="text-foreground">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Выезд по всей Москве и области
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow hover:elevated-shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Режим работы</h4>
                    <p className="text-foreground">
                      Ежедневно: 8:00 - 22:00
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Аварийный выезд — круглосуточно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
