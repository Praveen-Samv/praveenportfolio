import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-xl mb-8">
            Let's work together! Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:praveenkumarmech137@gmail.com"
              className="text-lg hover:text-primary transition-colors"
            >
              praveenkumarmech137@gmail.com
            </a>
            <a
              href="tel:+917330995681"
              className="text-lg hover:text-primary transition-colors"
            >
              +91 7330995681
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};