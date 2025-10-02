"use client"

import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="w-full border-b border-border/50 bg-white/80 backdrop-blur-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg"
            animate={{
              boxShadow: [
                "0 4px 6px rgba(0, 82, 204, 0.3)",
                "0 8px 12px rgba(0, 82, 204, 0.4)",
                "0 4px 6px rgba(0, 82, 204, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="text-white font-bold text-xl">WM</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              WM Sistemas
            </span>
            <span className="text-sm text-muted-foreground leading-tight">de Gestão</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
