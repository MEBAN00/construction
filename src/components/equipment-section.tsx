const equipment = [
  {
    id: 1,
    name: "Tower Cranes",
    description: "High-capacity lifting for tall building construction",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    alt: "Tower crane operating at construction site"
  },
  {
    id: 2,
    name: "Excavators",
    description: "Precision earthmoving and site preparation",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    alt: "Heavy excavator machinery at work site"
  },
  {
    id: 3,
    name: "Concrete Mixers",
    description: "Fresh concrete delivery and placement",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    alt: "Concrete mixer truck delivering ready-mix concrete"
  },
  {
    id: 4,
    name: "Dump Trucks",
    description: "Material transportation and waste removal",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    alt: "Heavy duty dump truck at construction site"
  }
];

export default function EquipmentSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="equipment-title">
            State-of-the-Art Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="equipment-description">
            We invest in the latest construction technology and heavy machinery to ensure efficient, safe, and precise project execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item) => (
            <div key={item.id} className="text-center" data-testid={`equipment-item-${item.id}`}>
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
                data-testid={`equipment-image-${item.id}`}
              />
              <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`equipment-name-${item.id}`}>
                {item.name}
              </h3>
              <p className="text-muted-foreground" data-testid={`equipment-description-${item.id}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
