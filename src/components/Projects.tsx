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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
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
              className="p-8 rounded-lg bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-semibold mb-2 md:mb-0">{project.name}</h3>
                <span className="text-sm text-muted-foreground">{project.duration}</span>
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Size</h4>
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