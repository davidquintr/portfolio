import ProjectsItem from "./project_item";
import project from "../assets/json/projects_en.json";

export default function ProjectsInfo() {
  return (
    <>
      <section className="section section-projects">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="section-body projects">
        {project.map((element, index) => (
          <ProjectsItem key={index} element={element} index={index} />
        ))}
        </div>
      </section>
    </>
  );
}
