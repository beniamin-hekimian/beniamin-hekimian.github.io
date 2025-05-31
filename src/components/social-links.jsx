import Link from "next/link";
import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://whatsapp.com",
      icon: BsWhatsapp,
      color: "text-green-500",
    },
    {
      href: "https://facebook.com",
      icon: BsFacebook,
      color: "text-blue-500",
    },
    {
      href: "https://instagram.com",
      icon: BsInstagram,
      color: "text-red-500",
    },
    {
      href: "https://linkedin.com",
      icon: BsLinkedin,
      color: "text-sky-500",
    },
    {
      href: "https://github.com",
      icon: BsGithub,
      color: "text-gray-500",
    },
  ];

  return (
    <ul className="flex gap-2">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return(
        <Link key={index} href={link.href} target="_blank" className={`hover:bg-secondary p-2 rounded-md ${link.color}`}>
          <Icon />
        </Link>
      )})}
    </ul>
  );
}