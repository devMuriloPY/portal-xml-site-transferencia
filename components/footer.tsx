"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const contactItems = [
    {
      icon: Mail,
      label: "E-mail",
      value: "suporte@wmsistemas.inf.br",
      href: "mailto:suporte@wmsistemas.inf.br",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(34) 3423-8595",
      href: "tel:+553434238595",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Bias Fortes, 240\nFrutal, MG",
      href: null,
    },
  ]

  return (
    <footer className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">WM Sistemas de Gestão</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col md:flex-row items-center md:items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-sm text-white/80 mb-1">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-cyan-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-white/20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} WM Sistemas de Gestão. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
