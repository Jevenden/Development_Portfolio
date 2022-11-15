import projects from "../../../projects.json";
import ProjectCards from "../../cards/Project-Cards";
import "animate.css";
import "./project.css";

function ProjectsWrapper(props) {
  return <div className="ProjectsWrapper">{props.children}</div>;
}

export default function Projects() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="projects-title animate__animated animate__bounceInRight title">
          PROJECTS
        </h2>
      </div>

      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            desc={project.desc}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </ProjectsWrapper>
    </section>
  );
}
