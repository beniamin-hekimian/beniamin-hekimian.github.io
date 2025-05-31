import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="mb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <Card>
          <CardContent className="flex flex-col lg:flex-row gap-8">
            <Image src="/about.webp" alt="about image" width="200" height="200" className="rounded-md hidden lg:block" />
            <div className="flex flex-col items-start">
              <CardTitle className="text-3xl font-semibold mb-2">About Me</CardTitle>
              <CardDescription className="mb-4 grow">
                I'm a full-stack web developer specialized in front-end development with Next.js and Tailwind CSS. I studied software engineering at the University of Aleppo and have experience with the MERN stack. I'm also interested in prompt engineering. I help clients bring their ideas to life with fast, responsive websites that look great on any device.
              </CardDescription>
              <Button variant="outline" className="hover:cursor-pointer">Professional Journey</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
