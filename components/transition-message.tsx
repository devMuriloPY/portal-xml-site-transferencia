"use client"

import { Info } from "lucide-react"
import { motion } from "framer-motion"

export function TransitionMessage() {
  return (
    <section className="w-full py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-8 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Info className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-foreground leading-relaxed">
                    Não se preocupe, todos os serviços continuam disponíveis{" "}
                    <span className="font-semibold text-blue-600">normalmente</span>. Apenas atualize seus favoritos
                    para o novo endereço.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
