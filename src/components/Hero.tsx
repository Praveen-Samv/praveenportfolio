import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center backdrop-blur-md bg-white/20 dark:bg-gray-900/20 p-8 rounded-2xl shadow-xl border border-white/20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          T Praveen Kumar
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white dark:text-gray-200 mb-8"
        >
          Software Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
        >
          <a 
            href="mailto:praveenkumarmech137@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 transition-all transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm border border-white/20 text-white"
          >
            <Mail className="w-5 h-5" />
            <span>praveenkumarmech137@gmail.com</span>
          </a>
          <a 
            href="tel:+917330995681"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 transition-all transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm border border-white/20 text-white"
          >
            <Phone className="w-5 h-5" />
            <span>+91 7330995681</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};