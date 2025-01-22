import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-muted-foreground leading-relaxed text-white mb-6">
            A forward-thinking software developer with experience in JavaScript, React, and Node.js. 
            Passionate about building innovative solutions and contributing to organizational growth 
            through technical excellence.
          </p>
          <div className="grid md:grid-cols-2 text-white gap-8">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Education</h3>
              <p>Master of Technology (M.Tech - 2022)</p>
              <p className="text-sm text-muted-foreground text-white">JNTU Anantapur</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Experience</h3>
              <p>Software Developer</p>
              <p className="text-sm text-muted-foreground text-white">Genamplifiy Solution Hub Private Limited, Hyderabad</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};