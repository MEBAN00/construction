import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    title: "CEO, Martinez Industries",
    initials: "JM",
    content: "Premier Construction exceeded all our expectations. Their attention to detail and commitment to quality is unmatched. Our new facility is exactly what we envisioned.",
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Robert Thompson",
    title: "Property Developer",
    initials: "RT",
    content: "Working with Premier was a game-changer. They completed our project on time and within budget, while maintaining the highest quality standards throughout.",
    color: "bg-accent"
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "Architect, Chen & Associates",
    initials: "SC",
    content: "The professionalism and expertise of the Premier team is outstanding. They turned our vision into reality with incredible craftsmanship and attention to detail.",
    color: "bg-secondary"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Premier Construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg" data-testid={`testimonial-card-${testimonial.id}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`} data-testid={`testimonial-avatar-${testimonial.id}`}>
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm" data-testid={`testimonial-title-${testimonial.id}`}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
