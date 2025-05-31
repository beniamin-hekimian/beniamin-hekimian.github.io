import Image from "next/image";
import { Download } from "lucide-react";
import { BsStars } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";
import SocialLinks from "@/components/social-links";

export default function Hero() {
  return (
    <section id="hero" className="my-12">
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-4xl font-semibold"><BsStars className="inline" /><span className="text-green-500">Beniamin</span> Hekimian</h1>
          <h2 className="text-3xl font-semibold mt-2">I&apos;m a <Typewriter /></h2>
          <p className="mt-4">This is my official portfolio website, where I showcase my skills in web development, photography, and video editing. Explore my projects to see how I bring creativity and technical expertise together!</p>
          <Button className="my-4 hover:cursor-pointer">Download CV<Download /></Button>
          <SocialLinks />
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image src="/hero.webp" alt="hero image" width="400" height="400" />
        </div>
      </div>
    </section>
  )
}
