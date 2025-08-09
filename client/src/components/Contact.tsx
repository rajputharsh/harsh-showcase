import { Mail, Linkedin, Instagram, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:harshrajput.works@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harshrajput.works@gmail.com",
      href: "mailto:harshrajput.works@gmail.com",
      description: "Best for detailed discussions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/harsh-rajput",
      href: "https://www.linkedin.com/in/harsh-rajput/",
      description: "Professional networking"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9354474898",
      href: "tel:+919354474898",
      description: "Quick calls and discussions"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@harshsince99",
      href: "https://instagram.com/harshsince99",
      description: "Personal updates and travel"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Let's Connect</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            Whether you're looking for a product manager, want to discuss opportunities, 
            or just want to chat about technology and innovation - I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up stagger-1">
              <div className="mb-8">
                <h3 className="heading-sm text-foreground mb-4">Get In Touch</h3>
                <p className="body-md text-foreground-muted leading-relaxed">
                  I'm always open to discussing product opportunities, sharing insights about 
                  AI/ML implementation, or exploring how we can create impactful solutions together.
                </p>
              </div>

              {/* Location */}
              <div className="glass rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h4 className="heading-sm text-foreground">Currently Based</h4>
                </div>
                <p className="body-md text-foreground-muted">
                  Delhi, India
                </p>
                <p className="body-sm text-foreground-muted">
                  Open to remote opportunities and travel
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass rounded-xl p-6 block interactive-hover glow-hover"
                  >
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="body-md font-semibold text-foreground">{method.label}</h4>
                          <span className="text-accent text-sm">→</span>
                        </div>
                        <p className="body-sm text-primary font-medium mb-1">{method.value}</p>
                        <p className="body-sm text-foreground-muted">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up stagger-2">
              <div className="glass rounded-xl p-8">
                <h3 className="heading-sm text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block body-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-tertiary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block body-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-tertiary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block body-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-tertiary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block body-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background-tertiary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="body-sm text-foreground-muted">
                    Or reach out directly at{" "}
                    <a 
                      href="mailto:harshrajput.works@gmail.com"
                      className="text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      harshrajput.works@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4 gradient-text-accent">Ready to Build Something Amazing?</h3>
            <p className="body-md text-foreground-muted mb-6 leading-relaxed">
              I'm passionate about turning complex challenges into elegant solutions. 
              Whether it's product strategy, AI/ML implementation, or growth optimization - 
              let's explore how we can create impact together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <Button variant="glass" size="lg">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;