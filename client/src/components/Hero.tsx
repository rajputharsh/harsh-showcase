import { ArrowDown, MapPin, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-hero pt-16">
      <div className="container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src="/lovable-uploads/adb520f2-b058-4e50-ba22-c532300b4321.png"
                alt="Harsh Rajput - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="heading-xl gradient-text mb-4 animate-fade-in stagger-1">
              Harsh Rajput
            </h1>
            <p className="mono-md text-accent mb-4 animate-fade-in stagger-2">
              Assistant Product Manager @ American Express
            </p>
            <div className="flex items-center justify-center text-foreground-muted animate-fade-in stagger-3">
              <MapPin size={16} className="mr-2" />
              <span className="body-md">Gurugram, India</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 animate-fade-in stagger-4">
            <p className="body-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              Passionate Product Manager with 4+ years of experience driving AI/ML platform enablement, 
              data analytics, and product strategy at American Express. I transform complex technical 
              challenges into scalable solutions that impact millions of users and generate significant revenue.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in stagger-5">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("experience")}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in stagger-6">
            <a
              href="mailto:harshrajput.works@gmail.com"
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-rajput/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/harshsince99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="Instagram Profile"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce text-foreground-muted hover:text-primary transition-colors duration-300"
            aria-label="Scroll to experience section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
};

export default Hero;