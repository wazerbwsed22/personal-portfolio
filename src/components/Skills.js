import { Terminal, LayoutTextWindow, CodeSlash, Database, Cpu, Palette } from "react-bootstrap-icons";

const skillGroups = [
  {
    title: "Programming Languages",
    Icon: Terminal,
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Frontend Development",
    Icon: LayoutTextWindow,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend Development",
    Icon: CodeSlash,
    skills: ["Node.js", "Express.js", "NestJS", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    Icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Technologies",
    Icon: Cpu,
    skills: ["Git", "Vercel", "Agile/Scrum"],
  },
  {
    title: "Design",
    Icon: Palette,
    skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
  },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skillGroups.map(({ title, Icon, skills }) => (
                  <article className="skill-card" key={title}>
                    <header className="skill-card-header">
                      <span className="skill-icon-wrap">
                        <Icon size={24} />
                      </span>
                      <h3>{title}</h3>
                    </header>

                    <div className="skill-tags">
                      {skills.map((skill) => (
                        <span className="skill-tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};