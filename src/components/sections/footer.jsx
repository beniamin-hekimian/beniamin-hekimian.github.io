import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 lg:px-12 py-4 flex items-center justify-between">
        <small>© 2025 Beniamin Hekimian. All rights reserved.</small>
        <ul className="flex gap-2">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return(
            <Link key={index} href={link.href} target="_blank" className={`hover:bg-secondary p-2 rounded-md ${link.color}`}>
              <Icon />
            </Link>
          )})}
        </ul>
      </div>
    </footer>
  )
}
