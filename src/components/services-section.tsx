import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Wrench, Hammer, Construction, HardHat, Check } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential developments built with precision and care.",
    features: ["Custom Home Building", "Home Renovations", "Kitchen & Bath Remodeling"]
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and commercial facilities designed for success.",
    features: ["Office Buildings", "Retail Spaces", "Warehouses"]
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
    features: ["Interior Renovations", "Exterior Upgrades", "Space Planning"]
  },
  {
    icon: Hammer,
    title: "Design-Build",
    description: "Streamlined process combining design and construction under one roof.",
    features: ["Architectural Design", "Project Management", "Cost Control"]
  },
  {
    icon: Construction,
    title: "Infrastructure",
    description: "Heavy civil construction for roads, bridges, and utility infrastructure.",
    features: ["Construction Construction", "Bridge Building", "Utility Installation"]
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Expert oversight ensuring projects are completed on time and within budget.",
    features: ["Schedule Management", "Quality Control", "Safety Oversight"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            From foundation to finish, we provide comprehensive construction solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${index}-${featureIndex}`}>
                        <Check className="text-accent mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
