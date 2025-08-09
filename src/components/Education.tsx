import { GraduationCap, Award, Calendar, MapPin, Trophy, Users } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "Delhi Technological University (DCE)",
      period: "Aug 2017 - May 2021",
      location: "Delhi, India",
      grade: "8.56 CGPA",
      logo: "/lovable-uploads/51269a46-9da4-46e5-adc3-78263d1af9cf.png",
      achievements: [
        {
          title: "Treasurer, Engifest DTU",
          description: "Managed ₹1.1 Cr budget (+10% YoY) for 50+ cultural events serving 10,000+ students, ensuring compliance with Govt. financial rules.",
          icon: <Trophy className="w-5 h-5" />
        },
        {
          title: "Chassis & Aerodynamics Engineer",
          description: "Designed India's first fully electric student motorbike, ranked 24th globally & 6th among rookies at Motostudent Spain. Showcased at Auto Expo India 2018.",
          icon: <Award className="w-5 h-5" />
        }
      ]
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Abhinav Public School",
      period: "Aug 2016 - May 2017",
      location: "Delhi, India",
      grade: "93.8%",
      logo: null,
      achievements: []
    },
    {
      degree: "Secondary School (Class X)",
      institution: "St. Marys School",
      period: "Aug 2014 - May 2015",
      location: "Dhampur, India",
      grade: "93.8%",
      logo: null,
      achievements: []
    }
  ];

  const certifications = [
    {
      title: "Product Management First Steps",
      issuer: "LinkedIn",
      date: "Jun 2025",
      skills: ["Product Management"],
      url: "https://www.linkedin.com/learning/certificates/e3e196d45940e0e75d7ecdc0e90a7e6ea73de6ee0cd51ff235e175edb53f8ac6"
    },
    {
      title: "Product Management: Building a Product Roadmap",
      issuer: "LinkedIn",
      date: "Jun 2025",
      skills: ["Product Road Mapping"],
      url: "https://www.linkedin.com/learning/certificates/7ebca638256797c69747593cfb0485afb8d62119e52b3c274bfc715c5601bab1"
    },
    {
      title: "Product Management: Building a Product Strategy",
      issuer: "LinkedIn",
      date: "Jun 2025",
      skills: ["Product Strategy"],
      url: "https://www.linkedin.com/learning/certificates/3d20271568baecbaa490e8751e9bea4c18e1a6be13c491dd9876cc2305cf5532"
    },
    {
      title: "EXL's Data Analytics Rapid Training Program",
      issuer: "Great Learning",
      date: "Sep 2021",
      skills: ["Data Analytics", "Data Science"],
      url: "https://olympus1.greatlearning.in/certificate/MJBISROS"
    },
    {
      title: "SQL for Data Science",
      issuer: "Coursera",
      date: "Jul 2020",
      skills: ["SQL", "Data Science"],
      url: "https://www.coursera.org/account/accomplishments/certificate/73XAM3MBZPF3"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Jul 2019",
      skills: ["Deep Learning", "Neural Networks"],
      url: "https://www.coursera.org/account/accomplishments/certificate/HWRA6X6XM76P"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Education & Certifications</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            Strong foundation in engineering and continuous learning in product management, 
            data science, and emerging technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="heading-md text-foreground mb-8 animate-fade-in">Academic Background</h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className={`glass rounded-xl p-6 md:p-8 interactive-hover animate-slide-up stagger-${(index + 1) % 3}`}
                >
                  {/* Education Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start mb-4 md:mb-0 flex-1">
                      <div className="w-16 h-16 rounded-lg bg-background-tertiary flex items-center justify-center mr-4 flex-shrink-0">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <GraduationCap className="w-8 h-8 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="heading-sm text-foreground mb-2">{edu.degree}</h4>
                        <p className="body-md text-primary font-semibold mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-foreground-muted">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span className="body-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span className="body-sm">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="skill-pill bg-accent/10 border-accent/20 text-accent">
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="body-md font-semibold text-foreground flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Key Achievements
                      </h5>
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="border-l-2 border-primary/20 pl-6">
                          <div className="flex items-start mb-2">
                            <div className="text-primary mr-3 mt-1">
                              {achievement.icon}
                            </div>
                            <div>
                              <h6 className="body-sm font-semibold text-foreground mb-1">
                                {achievement.title}
                              </h6>
                              <p className="body-sm text-foreground-muted leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="heading-md text-foreground mb-8 animate-fade-in">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`glass rounded-xl p-6 interactive-hover animate-scale-in stagger-${(index + 1) % 6}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="body-sm text-foreground-muted">{cert.date}</span>
                  </div>
                  
                  <h4 className="body-md font-semibold text-foreground mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  
                  <p className="body-sm text-primary font-medium mb-4">{cert.issuer}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-pill text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-subtle transition-colors duration-300 body-sm font-medium"
                  >
                    View Certificate →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;