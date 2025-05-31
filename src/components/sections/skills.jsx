import { HTML5, CSS3, JavaScript, React, Bootstrap5, TailwindCSS, NextJs, Sass, Redux, ReactRouter, Electron,
        ExpressJsDark, NodeJs, MongoDB, MySQL, CPlusPlus, Java, Python, TypeScript, NPM,
        Figma, Git, GitHubDark, GitLab, VercelDark, Postman, ViteJS, VisualStudioCode, ShadcnUI, Jest } from "developer-icons";

const skillsCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: React },
      { name: "Next.js", icon: NextJs },
      { name: "Tailwind", icon: TailwindCSS },
      { name: "Sass", icon: Sass },
      { name: "Bootstrap", icon: Bootstrap5 },
      { name: "Redux", icon: Redux },
      { name: "React Router", icon: ReactRouter },
      { name: "Electron", icon: Electron },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Python", icon: Python },
      { name: "MySQL", icon: MySQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Express", icon: ExpressJsDark },
      { name: "NPM", icon: NPM },
      { name: "Node.js", icon: NodeJs },
      { name: "C++", icon: CPlusPlus },
      { name: "TypeScript", icon: TypeScript },
      { name: "Java", icon: Java },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Figma", icon: Figma },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHubDark },
      { name: "Jest", icon: Jest },
      { name: "Shadcn UI", icon: ShadcnUI },
      { name: "Vite", icon: ViteJS },
      { name: "GitLab", icon: GitLab },
      { name: "Vercel", icon: VercelDark },
      { name: "VS Code", icon: VisualStudioCode },
      { name: "Postman", icon: Postman },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Tech Skills
        </h2>
        <div className="space-y-6 overflow-hidden">
          {skillsCategories.map((category, categoryIndex) => (
            <div key={category.name} className="relative">
              <h3 className="text-lg font-semibold mb-4 text-center text-muted-foreground">{category.name}</h3>
              <div className="relative overflow-hidden">
                <div
                  className={`flex gap-6 animate-scroll-${categoryIndex % 2 === 0 ? "left" : "right"}`}
                  style={{
                    width: "calc(200% + 24px)",
                  }}
                >
                  {/* First set of skills */}
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return(
                    <div
                      key={`${skill.name}-1`}
                      className="flex-shrink-0 flex items-center gap-3 bg-card border rounded-lg px-4 py-3 hover:bg-accent transition-colors"
                    >
                      <Icon className="h-6 w-auto" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  )})}
                  {/* Duplicate set for seamless loop */}
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return(
                    <div
                      key={`${skill.name}-2`}
                      className="flex-shrink-0 flex items-center gap-3 bg-card border rounded-lg px-4 py-3 hover:bg-accent transition-colors"
                    >
                      <Icon className="h-6 w-auto" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
