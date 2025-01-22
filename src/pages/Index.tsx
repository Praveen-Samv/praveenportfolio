import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with blur */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/ee/a3/b8/eea3b84c3024508bc6343a48d54869a1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // filter: ' brightness(0.2)',
        }}
      />
      
      {/* Content with glass effect */}
      <div className="relative z-10 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10 min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;