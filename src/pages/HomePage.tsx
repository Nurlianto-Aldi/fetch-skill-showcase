import ProjectCard from "../components/ProjectCard";
import { ApiProjects } from "../data/ApiProjects";

const HomePage = () => {
  return (
    <div
      className="grid grid-cols-2 justify-items-center w-full h-full bg-[#D3C2CD] px-[75px] py-[50.4px] gap-10"
    >
      {ApiProjects.map((project) => (
        <div key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default HomePage;