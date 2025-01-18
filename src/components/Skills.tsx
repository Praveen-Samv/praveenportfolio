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
    <section className="py-20 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
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
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all"
            >
              <h3 className="font-semibold mb-4 text-lg">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent-foreground"
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