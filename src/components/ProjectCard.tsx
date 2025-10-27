import { type ApiProjectsProps } from "../data/ApiProjects";
import { Icon } from '@iconify/react';

const ProjectCard = ({ project }: { project: ApiProjectsProps} ) => {
  
  
  return (
    <div
      className="flex flex-col w-[430.8px] h-[248.4px] bg-[#FAECB6] rounded-md outline-3 shadow-[10px_12px_0px_0_#2B2B23]"
    >

    {/* windows header */}
      <div
        className="flex items-center justify-end w-[430.8px] h-[21.6px] bg-[#F96635] rounded-t-md gap-2 px-3 outline-3 font-bold"
      >
        <span>-</span>
        <span>☐</span>
        <span>x</span>
      </div>

    {/* windows body */}
      <div
        className="flex flex-row m-[30px] gap-[30px]"
      >

        {/* the gray box */}
        <div>
          <div
            className="flex w-[90px] h-[90px] mt-2"
          >
          <Icon
            icon={project.icon}
            className="w-full h-full"
          />
          </div>
        </div>

        {/* the text */}
        <div
          className="flex flex-col items-start justify-start"
        >
          <h2
            className="text-[19.2px] font-semibold tracking-widest leading-[41px] font-roboto-mono"
          >
            {project.title}
          </h2>
          <p
            className="text-[19.2px] tracking-[0.15em] font-roboto font-light"
          >
            {project.desc}
          </p>
        </div>
      </div>

      {/* windows button */}
      <div
        className="flex items-center justify-center font-roboto-mono font-bold"
      >
        <div>
          <a href="#" className="outline-3 px-5 py-2 rounded-md shadow-[6px_8px_0px_0_#2B2B23]">
            <span>
              See Project
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;