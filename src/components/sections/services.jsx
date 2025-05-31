import { BsCodeSlash, BsCamera, BsFilm } from "react-icons/bs";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    id: 1,
    icon: BsCodeSlash,
    title: "Web Development",
    description: "I design responsive websites that bring your ideas to life with modern, optimized solutions.",
  },
  {
    id: 2,
    icon: BsCamera,
    title: "Photography",
    description: "I capture moments with a creative eye, delivering high-quality visuals that tell your story.",
  },
  {
    id: 3,
    icon: BsFilm,
    title: "Video Editing",
    description: "I turn raw footage into engaging videos that connect with your audience and amplify your message.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id}>
                <CardContent className="flex flex-col items-center text-center gap-4">
                  <Icon className="text-3xl text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
