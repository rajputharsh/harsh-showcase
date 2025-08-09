import { Palette, MapPin, Music, Mic, BookOpen, Play } from "lucide-react";
import sketchingImage from "@/assets/sketching-placeholder.jpg";
import travel1 from "@/assets/travel-1.jpg";
import travel2 from "@/assets/travel-2.jpg";
import travel3 from "@/assets/travel-3.jpg";
import travel4 from "@/assets/travel-4.jpg";
import travel5 from "@/assets/travel-5.jpg";

const Life = () => {
  const travelImages = [travel1, travel2, travel3, travel4, travel5];

  const bookRecommendations = [
    "Hooked", "The God Delusion", "The case that shook India",
    "17 equations that changed the world", "The Timekeeper", "The Stranger",
    "Palace of Illusion", "Tuesdays with Morrie", "The Buffet's way",
    "Guns, Germs, and Steel", "Steve Jobs", "A short history of nearly everything",
    "1984", "Shoe Dog", "Brief answers to Big Questions", "Sapiens",
    "The Theory of Everything", "Creativity Inc."
  ];

  return (
    <section id="life" className="section-padding bg-background-secondary">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg gradient-text mb-4">Life Outside Work</h2>
          <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
            Exploring creativity, culture, and knowledge through art, travel, music, 
            performance, and continuous learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Sketching Section */}
          <div className="animate-slide-up stagger-1">
            <div className="glass rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Palette className="w-6 h-6 text-primary mr-3" />
                <h3 className="heading-sm text-foreground">Sketching</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="body-md text-foreground-muted leading-relaxed mb-6">
                    Art has always been my way of capturing moments and expressing creativity. 
                    Through sketching, I explore different perspectives and find inspiration 
                    that often translates into innovative problem-solving in my professional work.
                  </p>
                  <p className="body-sm text-foreground-muted">
                    From architectural studies to portrait work, each sketch tells a story 
                    and represents a moment of mindful observation.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden interactive-hover">
                  <img 
                    src={sketchingImage} 
                    alt="Sketching artwork and tools"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Travel Section */}
          <div className="animate-slide-up stagger-2">
            <div className="glass rounded-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-accent mr-3" />
                <h3 className="heading-sm text-foreground">Travelling</h3>
              </div>
              <p className="body-md text-foreground-muted leading-relaxed mb-6">
                Travel feeds my curiosity and broadens my perspective. Every destination teaches me 
                something new about culture, innovation, and human behavior - insights that enrich 
                my approach to product strategy and user understanding.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {travelImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden interactive-hover">
                    <img 
                      src={image} 
                      alt={`Travel photography ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div className="animate-slide-up stagger-3">
            <div className="glass rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Music className="w-6 h-6 text-primary mr-3" />
                <h3 className="heading-sm text-foreground">Music</h3>
              </div>
              <p className="body-md text-foreground-muted leading-relaxed mb-6">
                Music is my constant companion, providing energy during intense work sessions 
                and relaxation during downtime. Here's a carefully curated playlist that represents 
                my musical journey and current favorites.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  data-testid="embed-iframe" 
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/4KES4locBTd6tSdAR2SIE1?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Harsh's Music Playlist"
                />
              </div>
            </div>
          </div>

          {/* Poetry Section */}
          <div className="animate-slide-up stagger-4">
            <div className="glass rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Mic className="w-6 h-6 text-accent mr-3" />
                <h3 className="heading-sm text-foreground">Open Mic Poetry</h3>
              </div>
              <p className="body-md text-foreground-muted leading-relaxed mb-6">
                Poetry and spoken word performances allow me to explore storytelling and emotional expression. 
                The vulnerability and authenticity required on stage have strengthened my communication skills 
                and confidence in presenting ideas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/Pr2Q584GKyQ?si=oK6VlkOyqVUpGJQd" 
                    title="Poetry Performance 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/wRQUQhpVA2E?si=K49ms43ZHPOko56e" 
                    title="Poetry Performance 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reading Section */}
          <div className="animate-slide-up stagger-5">
            <div className="glass rounded-xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-primary mr-3" />
                <h3 className="heading-sm text-foreground">Reading - My Recommendations</h3>
              </div>
              <p className="body-md text-foreground-muted leading-relaxed mb-6">
                Books have shaped my thinking and provided frameworks for understanding complex systems, 
                human behavior, and innovation. Here are some titles that have particularly influenced 
                my approach to product management and life philosophy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {bookRecommendations.map((book, index) => (
                  <div 
                    key={index}
                    className="skill-pill text-center hover:bg-primary/20 hover:border-primary/40 cursor-pointer transition-all duration-300"
                  >
                    {book}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="body-sm text-foreground-muted italic">
                  "Reading is to the mind what exercise is to the body" - each book adds a new lens 
                  to view and solve problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;