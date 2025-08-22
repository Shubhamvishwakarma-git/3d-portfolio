import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSpheres";
import TitleHearder from "../components/TitleHearder";

const Projects = () => {
  return (
    <section className=" w-full h-full flex-center relative " id="projects">
      <GradientSpheres
        sphere1Class={"projects-gradient-sphere project-sphere-1 "}
        sphere2Class={"projects-gradient-sphere project-sphere-2 "}
      />

      <div className=" w-full md:my-40 my-20 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHearder
            title={"My PROJECTS"}
            number={"03"}
            text={"Check my recent projects below -"}
          />
        </div>
        <div className="md:mt-20 mt-10">
            <Carousel/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
