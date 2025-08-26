import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="about-title">
              35+ Years of Building Excellence
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
              Since 1985, Premier Construction has been at the forefront of innovative construction solutions. We've built our reputation on quality craftsmanship, reliable service, and unwavering commitment to our clients' vision.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center" data-testid="stat-years">
                <div className="text-4xl font-bold text-accent mb-2">35+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-employees">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground font-medium">Skilled Workers</div>
              </div>
              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="about-contact-button"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                data-testid="about-portfolio-button"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Construction team meeting and planning on building site" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-image"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg" data-testid="about-badge">
              <div className="flex items-center">
                <Award className="mr-3" size={24} />
                <div>
                  <div className="font-bold">Licensed & Insured</div>
                  <div className="text-sm opacity-90">Fully Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
