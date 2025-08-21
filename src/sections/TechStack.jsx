import TitleHearder from "../components/TitleHearder";
import TechIcon from "../components/Techicon";
import { iconsList } from "../constants/index";

const TechStack = () => {
  return (
    <div className=" w-full h-full ">
      <div className="">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHearder
            title={"TECH STACK"}
            number={"03"}
            text={"My Go-To Technologies"}
          />
        </div>
        <div className="md:mt-20 mt-10 relative">
          <div className="marquee h-52 ">
            <div className=" marquee-box md:gap-12 gap-5">
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
