import { motion } from "framer-motion";

const projects = [
  {
    name: "InstaRide",
    duration: "June-2024 to Nov-2024",
    description: "A comprehensive mobile application designed to facilitate the connection between drivers and riders on the Instaride platform.",
    technologies: ["Micro-Services", "JavaScript", "React.js", "Node.js", "Express", "MySQL"],
    teamSize: 6,
    role: "Developer",
  },
  {
    name: "Corp-Astro",
    duration: "Nov-2024 till now",
    description: "A revolutionary application designed for businesses to harness astrological and numerological insights, providing valuable guidance for business growth and decision-making.",
    technologies: ["Micro-Services", "JavaScript", "React.js", "Supa-base"],
    teamSize: 3,
    role: "Developer",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          Project Experience
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-lg backdrop-blur-sm border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-gray-600 transition-all transform hover:-translate-y-2 hover:shadow-xl bg-white/50 dark:bg-gray-800/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-semibold mb-2 md:mb-0 text-purple-700 dark:text-purple-400">{project.name}</h3>
                <span className="text-sm text-muted-foreground">{project.duration}</span>
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-300">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1 text-purple-600 dark:text-purple-300">Role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-purple-600 dark:text-purple-300">Team Size</h4>
                    <p>{project.teamSize} members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};