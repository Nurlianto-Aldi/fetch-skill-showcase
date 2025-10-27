import ProjectCard from "../components/ProjectCard";
import { ApiProjects } from "../data/ApiProjects";

const HomePage = () => {
  return (
    <div
      className="grid grid-cols-2 justify-center items-center w-full h-full"
    >
      {ApiProjects.map((project) => (
        <div key={project.id} className="flex items-center justify-center">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default HomePage;