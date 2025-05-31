import SocialLinks from "@/components/social-links";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 lg:px-12 py-4 flex items-center justify-between">
        <small>© 2025 Beniamin Hekimian. All rights reserved.</small>
        <SocialLinks />
      </div>
    </footer>
  )
}
