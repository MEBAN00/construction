import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Luxury Apartments Complex",
    description: "Modern 120-unit residential complex with sustainable features and premium amenities.",
    value: "$8.5M Project Value",
    category: "Residential",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern residential apartment complex under construction"
  },
  {
    id: 2,
    name: "Corporate Headquarters",
    description: "12-story office tower with state-of-the-art technology and LEED certification.",
    value: "$15.2M Project Value",
    category: "Commercial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern glass office building in urban setting"
  },
  {
    id: 3,
    name: "Manufacturing Facility",
    description: "200,000 sq ft advanced manufacturing plant with automated systems.",
    value: "$12.8M Project Value",
    category: "Industrial",
    year: "2022",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern industrial manufacturing facility exterior"
  },
  {
    id: 4,
    name: "Retail Shopping Center",
    description: "Mixed-use development with 50+ retail spaces and dining options.",
    value: "$22.3M Project Value",
    category: "Retail",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern shopping center with glass facades and landscaping"
  },
  {
    id: 5,
    name: "Medical Center",
    description: "Advanced healthcare facility with specialized treatment areas and emergency services.",
    value: "$28.7M Project Value",
    category: "Healthcare",
    year: "2021",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern hospital and medical center building"
  },
  {
    id: 6,
    name: "University Science Center",
    description: "State-of-the-art research facility with advanced laboratories and lecture halls.",
    value: "$18.9M Project Value",
    category: "Education",
    year: "2021",
    image: "https://images.unsplash.com/photo-1581447109200-bf2769116351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
    alt: "Modern university campus building with contemporary architecture"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    "Residential": "bg-primary/10 text-primary",
    "Commercial": "bg-accent/10 text-accent",
    "Industrial": "bg-secondary/10 text-secondary-foreground",
    "Retail": "bg-accent/10 text-accent",
    "Healthcare": "bg-primary/10 text-primary",
    "Education": "bg-secondary/10 text-secondary-foreground"
  };
  return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
};

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="projects-title">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-description">
            Explore our portfolio of successful construction projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all" data-testid={`project-card-${project.id}`}>
              <div className="overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`project-image-${project.id}`}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`} data-testid={`project-category-${project.id}`}>
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-sm" data-testid={`project-year-${project.id}`}>
                    Completed {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2" data-testid={`project-name-${project.id}`}>
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="text-accent font-semibold" data-testid={`project-value-${project.id}`}>
                  {project.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold h-auto"
            data-testid="projects-portfolio-button"
          >
            <FolderOpen className="mr-3" size={20} />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
