import { Code, Wrench, Target, Heart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 6 },
        { name: "MySQL", level: 7 },
        { name: "REST API", level: 7 },
        { name: "CI/CD", level: 6 },
        { name: "Machine Learning", level: 8 },
        { name: "Generative AI", level: 8 }
      ]
    },
    {
      title: "Product Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "GitHub", level: 6 },
        { name: "Jira", level: 8 },
        { name: "Rally", level: 8 },
        { name: "Figma", level: 7 },
        { name: "Mixpanel", level: 8 },
        { name: "Tableau", level: 6 },
        { name: "Excel", level: 8 },
        { name: "Postman", level: 8 },
        { name: "Confluence", level: 9 },
        { name: "Google Cloud Platform", level: 7 }
      ]
    },
    {
      title: "Product Management",
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: "Market Research", level: 8 },
        { name: "Product Strategy", level: 8 },
        { name: "Roadmapping", level: 9 },
        { name: "UI/UX Research", level: 9 },
        { name: "Wireframing", level: 8 },
        { name: "A/B Testing", level: 8 },
        { name: "Prioritization", level: 8 },
        { name: "Agile/Scrum", level: 8 },
        { name: "PRD Writing", level: 9 },
        { name: "User Stories", level: 8 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Heart className="w-6 h-6" />,
      skills: [
        { name: "Leadership", level: 7 },
        { name: "Stakeholder Management", level: 8 },
        { name: "Cross-Collaboration", level: 9 },
        { name: "Problem Solving", level: 9 },
        { name: "Communication", level: 9 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 8) return "bg-accent";
    if (level >= 6) return "bg-primary";
    return "bg-foreground-subtle";
  };

  const getSkillWidth = (level: number) => {
    return `${(level / 10) * 100}%`;
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Skills & Expertise</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            A comprehensive toolkit spanning technical development, product management, 
            and strategic thinking to drive end-to-end product success.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`glass rounded-xl p-6 animate-scale-in stagger-${(categoryIndex + 1) % 4}`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="heading-sm text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-sm font-medium text-foreground">{skill.name}</span>
                      <span className="mono-md text-foreground-muted">{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ease-out ${getSkillColor(skill.level)}`}
                        style={{ 
                          width: getSkillWidth(skill.level),
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4 gradient-text-accent">Core Competencies</h3>
            <p className="body-md text-foreground-muted leading-relaxed">
              I specialize in translating complex technical requirements into user-centric product solutions. 
              My expertise lies at the intersection of data analytics, AI/ML implementation, and strategic 
              product management, enabling me to drive both technical excellence and business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;