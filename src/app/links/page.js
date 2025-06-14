import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export default function Links() {
  return (
    <section id="links" className="min-h-screen container mx-auto flex items-center justify-center p-4">
      <div className="bg-secondary p-8 rounded-md flex flex-col items-center justify-center text-center">
        <Avatar className="size-25 mb-4">
          <AvatarImage src="profile.webp" />
          <AvatarFallback>BH</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Beniamin Hekimian</h1>
        <small className="text-sm text-primary font-semibold mb-4">Aleppo, Syria.</small>
        <p className="mb-4">&quot;Web Developer, Photographer & Video Editor.&quot;</p>
        <ul className="flex flex-col gap-4 items-center justify-center w-full text-center">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return(
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className="bg-neutral-200 dark:bg-neutral-700 text-sm font-semibold p-2 w-full rounded-md hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground transition-all flex justify-center items-center gap-2"
            >
              <Icon />
              <p>{link.name}</p>
            </Link>
          )})}
        </ul>
      </div>
    </section>
  )
}
