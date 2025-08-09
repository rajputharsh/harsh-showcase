import { Calendar, TrendingUp, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Assistant Product Manager",
      company: "American Express",
      period: "May 2023 - Present",
      logo: "/lovable-uploads/d6d0b529-daf3-4b82-8d5a-b7def025d796.png",
      achievements: [
        {
          title: "Cloud Deployment Platform Enablement",
          impact: "High",
          description: "Led end-to-end enablement of AI/ML deployment platform supporting 1,000+ pipelines, 200+ tables, and $500M+ annual revenue. Managed complex delivery with zero downtime.",
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: "XGBoost Scoring Enablement",
          impact: "High",
          description: "Delivered 10x reduction in execution time and halved deployment timelines for 100+ use cases by implementing no-code distributed scoring.",
          icon: <Award className="w-5 h-5" />
        },
        {
          title: "Data Quality Automation & Governance",
          impact: "Medium",
          description: "Integrated ~150 scoring pipelines with enterprise CDIT platform, reducing monthly issues from ~20 to ~2.",
          icon: <Users className="w-5 h-5" />
        }
      ]
    },
    {
      id: 2,
      title: "Product Analyst",
      company: "American Express",
      period: "November 2021 - May 2023",
      logo: "/lovable-uploads/d6d0b529-daf3-4b82-8d5a-b7def025d796.png",
      achievements: [
        {
          title: "AI-Powered User Support Bot",
          impact: "High",
          description: "Built BERT-powered Slack bot reducing response time from 1 day to 5 minutes. Handled 20+ daily queries with tree-based response model.",
          icon: <Award className="w-5 h-5" />
        },
        {
          title: "Project Fusion & IDN Decommission",
          impact: "Medium",
          description: "Led migration of ~500 models (50% of EI's workload) with zero disruption. Recognized with Analyst of the Quarter award.",
          icon: <Users className="w-5 h-5" />
        }
      ]
    },
    {
      id: 3,
      title: "Business Analyst",
      company: "EXL Services",
      period: "June 2021 - November 2021",
      logo: "/lovable-uploads/45be6cae-8ba5-4941-a347-05dc9f180c1f.png",
      achievements: [
        {
          title: "Healthcare Data Analysis",
          impact: "Medium",
          description: "Developed data processing logic using Python, SAS, and SQL. Enhanced Productivity Tracker Dashboard in Tableau for performance monitoring.",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ]
    },
    {
      id: 4,
      title: "Data Science & Analytics Intern",
      company: "HDFC Ergo General Insurance",
      period: "March 2021 - June 2021",
      logo: "/lovable-uploads/hdfc-ergo-logo.png",
      achievements: [
        {
          title: "Health Insurance Portfolio Analytics",
          impact: "Medium",
          description: "Analyzed Net Premium, Renewal Rate, and Loss Ratio metrics. Created monthly performance reports and Tableau dashboards for strategic planning.",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ]
    },
    {
      id: 5,
      title: "Pro Bono Product Analytics",
      company: "12+ Startups",
      period: "Ongoing",
      logo: "/lovable-uploads/pro-bono-logo.svg",
      achievements: [
        {
          title: "Growth Optimization",
          impact: "High",
          description: "Delivered +31% activation for Copyfy, +52% for Videotap, and 6% DAU uplift for Foriio through funnel optimization and A/B testing.",
          icon: <Award className="w-5 h-5" />
        }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-accent border-accent/20 bg-accent/10";
      case "Medium":
        return "text-primary border-primary/20 bg-primary/10";
      default:
        return "text-foreground-muted border-border bg-background-secondary";
    }
  };

  return (
    <section id="experience" className="section-padding bg-background-secondary">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Professional Experience</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            4+ years of driving product innovation, platform enablement, and data-driven solutions 
            at scale across fintech and consulting domains.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 animate-slide-up stagger-${(index + 1) % 5}`}>
              <div className="glass rounded-xl p-6 md:p-8 interactive-hover">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-lg bg-background-tertiary flex items-center justify-center mr-4">
                      {exp.logo !== "/placeholder.svg" ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-primary/20 rounded"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="heading-sm text-foreground">{exp.title}</h3>
                      <p className="mono-md text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-foreground-muted">
                    <Calendar size={16} className="mr-2" />
                    <span className="body-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="border-l-2 border-primary/20 pl-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <div className="text-primary mr-3">
                            {achievement.icon}
                          </div>
                          <h4 className="body-md font-semibold text-foreground">{achievement.title}</h4>
                        </div>
                        <span className={`skill-pill ${getImpactColor(achievement.impact)}`}>
                          {achievement.impact} Impact
                        </span>
                      </div>
                      <p className="body-sm text-foreground-muted leading-relaxed ml-8">
                        {achievement.description}
                      </p>
                    </div>
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

export default Experience;
