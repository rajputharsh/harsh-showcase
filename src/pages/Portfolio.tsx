import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Life from "@/components/Life";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Life />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-background-tertiary border-t border-border">
        <div className="container mx-auto container-padding py-8">
          <div className="text-center">
            <p className="body-sm text-foreground-muted">
              © 2024 Harsh Rajput. Crafted with passion and precision.
            </p>
            <p className="body-sm text-foreground-muted mt-2">
              Open to opportunities • Always learning • Building the future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;