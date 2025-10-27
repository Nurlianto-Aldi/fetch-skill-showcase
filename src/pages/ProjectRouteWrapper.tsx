import { useParams } from "react-router";
import { ProjectComponentMap } from "../data/ProjectComponentMap";

const ProjectRouteWrapper = () => {
  const { link } = useParams<{ link: string }>();

  if (!link) {
    return <div>Not Found</div>;
  }
  
  const TargetComponent = ProjectComponentMap[link];

  if(TargetComponent) {
    return <TargetComponent />
  } else {
    return <div>Not Found</div>;
  }
}

export default ProjectRouteWrapper;