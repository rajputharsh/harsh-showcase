import { ExternalLink, Github, TrendingUp, Bot, Zap, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Swastay.in",
      description: "Led market research for a SaaS product targeting independent Indian hotel owners (10–50 rooms). Defined core personas, validated OTA dependency, and sized a ₹6,000 Cr opportunity.",
      technologies: ["Market Research", "SaaS Strategy", "Bolt.new", "GTM Strategy"],
      impact: "₹6,000 Cr Market Opportunity Identified",
      icon: <Target className="w-6 h-6" />,
      category: "Market Research"
    },
    {
      id: 2,
      title: "AIron – Diary of a Bot",
      description: "Built an AI character that writes diary entries every 10 days, evolving through stored memories, relationships, and personality shifts. Features fading memory and state-tracking system.",
      technologies: ["Airtable", "Pinecone", "n8n", "AI/ML", "Storytelling"],
      impact: "Dynamic AI Personality System",
      icon: <Bot className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Automated Lead Generation System",
      description: "Built end-to-end lead generation automation using n8n, Gemini, Google Maps API. Analyzed AAARRR funnel and generated tailored outreach emails directly in Gmail.",
      technologies: ["n8n", "Gemini", "Google Maps API", "Gmail API", "Automation"],
      impact: "1,000+ Targeted Emails in <5 Minutes",
      icon: <Zap className="w-6 h-6" />,
      category: "Automation"
    },
    {
      id: 4,
      title: "Startup Idea Boardroom Bot",
      description: "Built a Telegram bot simulating virtual boardroom with six expert personas (PM, CTO, Marketing, Ops, VC, Design) to stress-test startup ideas in under 15 minutes.",
      technologies: ["Telegram API", "n8n", "Ollama", "Supabase", "NLP"],
      impact: "Accelerated Idea Validation Process",
      icon: <Users className="w-6 h-6" />,
      category: "Product Strategy"
    },
    {
      id: 5,
      title: "Interview Success Accelerator (ISA)",
      description: "Analyzed user funnels to increase student placements by 20% MoM. Designed MVP to address 20.41% drop-off between interview invite and attendance.",
      technologies: ["Funnel Analysis", "Product Strategy", "User Research", "MVP Design"],
      impact: "90% Target Interview Attendance Rate",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "Product Analytics"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "text-accent border-accent/20 bg-accent/10";
      case "Automation":
        return "text-primary border-primary/20 bg-primary/10";
      case "Product Strategy":
        return "text-success border-success/20 bg-success/10";
      case "Product Analytics":
        return "text-warning border-warning/20 bg-warning/10";
      default:
        return "text-foreground-muted border-border bg-background-secondary";
    }
  };

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Featured Projects</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, automation, market research, 
            and product strategy that demonstrate end-to-end problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass rounded-xl p-6 interactive-hover glow-hover animate-scale-in stagger-${(index + 1) % 5}`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary">
                  {project.icon}
                </div>
                <span className={`skill-pill ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="heading-sm text-foreground mb-3">{project.title}</h3>

              {/* Project Description */}
              <p className="body-sm text-foreground-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4">
                <div className="flex items-center text-accent mb-2">
                  <TrendingUp size={16} className="mr-2" />
                  <span className="body-sm font-semibold">Impact</span>
                </div>
                <p className="body-sm text-foreground-muted">{project.impact}</p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-pill text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;