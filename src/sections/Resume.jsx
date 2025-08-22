"use client";
import { useState } from "react";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import GradientSpheres from "../components/GradientSpheres";
import TitleHearder from "../components/TitleHearder";

// about data
const about = {
  title: "About Me",
  description:
    "Frontend Developer with over 1 year of experience building fast, responsive, and accessible web applications using React.js, Next.js, and JavaScript (ES6+). Improved application load times by up to 40%, delivered features in Agile sprints, and optimized UI/UX through performance tuning and API integration directly increasing user engagement and business efficiency.",
  info: [
    { title: "Name", value: "Shubham Kumar Vishwakarma" },
    { title: "Email", value: "shubhamkumarvishwakarma77@gmail.com" },
    { title: "Phone", value: "9090529911" },
    { title: "Experience", value: "1+ years" },
    { title: "Nationality", value: "Indian" },
    { title: "Languages", value: "English, Hindi" },
  ],
};

// experience data
const experience = {
  title: "Experience",
  description:
     "Frontend Developer with 1+ year of professional experience at a fast-paced product company. Gained hands-on expertise in building fast, responsive, and accessible web applications using React.js, Next.js, and JavaScript (ES6+). Delivered scalable features in Agile sprints, optimized performance (improving load times by up to 40%), and enhanced UI/UX through clean code, API integration, and modern design practices — contributing directly to user satisfaction and business growth.",
  items: [
    {
      title: "Associate Engineer",
      company: "Frootle India Private Limited.",
      duration: "2023 - Present",
    },
  ],
};

// education data
const education = {
  title: "Education",
  description:
    "I completed my graduation in Bachelor's in Computer Applications from a reputed institution, where I built a strong foundation in software development, data structures, algorithms, and problem-solving — preparing me to apply these concepts in real-world web development projects.",
  items: [
    {
      institute: "Rourkela Institute of Management Studies.",
      degree: "Bachelor of Computer Applications.",
      duration: "2019 - 2022",
    },
  ],
};

// skills data
const skills = {
  title: "Skills",
  description:
    "Skilled in modern web development with over a year of experience in building scalable and responsive applications. Proficient in React.js, Next.js, JavaScript (ES6+), HTML, CSS, and Tailwind CSS, with additional exposure to Node.js and API integration — enabling me to deliver performant and user-focused solutions.",
  skilllist: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML 5", icon: <FaHtml5 /> },
    { name: "CSS 3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="flex-center relative px-5 md:p-0">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2 "
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10 ">
        <TitleHearder
          className="pb-7"
          title={"Resume"}
          text={""}
          number={"04"}
        />

        <div className="flex flex-col xl:flex-row gap-10">
          {/* Tabs List */}
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto xl:mx-0 marquee">
            {["experience", "education", "skills", "about"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded-lg text-left transition ${
                  activeTab === tab
                    ? "bg-accent text-blue-300 font-bold"
                    : "bg-black-300 hover:bg-[#333339] text-white/80"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="flex-1 min-h-[70vh] bg-black-300 rounded-2xl p-8 overflow-y-auto">
            {activeTab === "experience" && (
              <div>
                <h3 className="gradient-title md:text-3xl text-2xl font-medium mb-4">
                  {experience.title}
                </h3>
                <p className="text-white/60 mb-6">{experience.description}</p>
                <ul className="space-y-4">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] p-4 rounded-xl animated-text"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h4 className="text-xl font-semibold text-blue-50">
                        {item.title}
                      </h4>
                      <p className="text-white/60">{item.company}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <h3 className="gradient-title md:text-3xl text-2xl font-medium mb-4">
                  {education.title}
                </h3>
                <p className="text-white/60 mb-6">{education.description}</p>
                <ul className="space-y-4">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] p-4 rounded-xl animated-text"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h4 className="text-xl font-semibold text-blue-50">
                        {item.degree}
                      </h4>
                      <p className="text-white/60">{item.institute}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <h3 className="gradient-title md:text-3xl text-2xl font-medium mb-4">
                  {skills.title}
                </h3>
                <p className="text-white/60 mb-6">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.skilllist.map((skill, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center bg-[#232329] h-[140px] rounded-xl animated-text group cursor-pointer"
                    >
                      <div className="text-5xl mb-2 group-hover:text-accent transition">
                        {skill.icon}
                      </div>
                      <p className="text-sm text-white/80">{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "about" && (
              <div>
                <h3 className="gradient-title marquee md:text-3xl text-2xl font-medium mb-4 text-blue-50">
                  {about.title}
                </h3>
                <p className="text-white/60 mb-6">{about.description}</p>
                <ul className="space-y-3">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex gap-4 animated-text">
                      <span className="text-white/60 w-32">{item.title}:</span>
                      <span className="font-medium text-blue-50">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
