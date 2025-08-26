import { Button } from "@/components/ui/button";
import { Phone, Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&h=1200" 
          alt="Construction workers on modern building site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 glass-overlay"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8" data-testid="hero-title">
            Building Excellence,
            <span className="text-accent"> One Project</span>
            {" "}at a Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl" data-testid="hero-description">
            With over 35 years of experience, we deliver superior construction services that exceed expectations. From residential developments to commercial complexes, we build lasting relationships through quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold h-auto"
              data-testid="hero-quote-button"
            >
              <Phone className="mr-3" size={20} />
              Get Free Quote
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold h-auto"
              data-testid="hero-portfolio-button"
            >
              <Play className="mr-3" size={20} />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
}
