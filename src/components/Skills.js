import { Terminal, LayoutTextWindow, CodeSlash, Database, Cpu, Palette } from "react-bootstrap-icons";

const skillGroups = [
  {
    title: "Programming Languages",
    Icon: Terminal,
    skills: ["Dart", "Java", "Python", "TypeScript", "C", "C#", "GraphQL", "JavaScript"],
  },
  {
    title: "Frontend Development",
    Icon: LayoutTextWindow,
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Backend Development",
    Icon: CodeSlash,
    skills: ["Node.js", "Express.js", ".NET", "REST APIs"],
  },
  {
    title: "Databases",
    Icon: Database,
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & Technologies",
    Icon: Cpu,
    skills: ["AWS", "Monarch", "Docker", "Launchdarkly"],
  },
  {
    title: "Design",
    Icon: Palette,
    skills: ["Figma"],
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