import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Paradise Nursery",
    image: "/paradise-nursery.webp",
    description: "Interactive plant store e-commerce website with a real-time shopping cart feature.",
    tech: ["React", "Redux", "Axios"],
    link: "https://paradise-nursery-by-beniamin.vercel.app/"
  },
  {
    title: "Little Lemon",
    image: "/little-lemon.webp",
    description: "A responsive table reservation web app for the Little Lemon restaurant & display online menu.",
    tech: ["React", "HTML", "CSS"],
    link: "https://little-lemon-by-beniamin.vercel.app/"
  },
  {
    title: "Code Quotes",
    image: "/code-quotes.webp",
    description: "Motivational quotes in the JavaScript code format, desktop & mobile wallpapers generator.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://code-quotes.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="pt-0 overflow-hidden gap-4">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={100}
                className="w-full grow aspect-video object-cover"
              />
              <CardHeader>
                <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((techItem, i) => (
                    <Badge variant="outline" key={i}>{techItem}</Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-primary rounded-md p-2 text-primary-foreground shadow-xs hover:bg-primary/90"
                >
                  <MoveRight size="16" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
