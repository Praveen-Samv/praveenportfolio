import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  { category: "Frameworks", items: ["React.js", "Node.js", "Web-Sockets", "Kafka", "Supa-base"] },
  { category: "Tools", items: ["VS-Code", "Git", "Project IDE"] },
  { category: "Databases", items: ["MySQL", "Postgres"] },
  { category: "Architecture", items: ["Microservices", "REST APIs"] },
  { category: "AI Tools", items: ["Cursor.ai", "bolt.new", "Claude.ai", "Creatie.ai"] },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg backdrop-blur-sm border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-gray-600 transition-all transform hover:-translate-y-1 hover:shadow-xl bg-white/50 dark:bg-gray-800/50"
            >
              <h3 className="font-semibold mb-4 text-lg text-purple-700 dark:text-purple-400">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};