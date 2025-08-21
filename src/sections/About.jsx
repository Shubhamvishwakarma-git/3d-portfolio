import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSpheres";
import TitleHearder from "../components/TitleHearder";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Html,
  useProgress,
} from "@react-three/drei";
import { bentoSocialLinks } from "../constants/index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect } from "react";
import Stats from "../components/Stats";

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-blue-50 text-lg">
      {progress.toFixed(0)} %
    </Html>
  );
}

// 🎯 Animated Robo Component
function AnimatedRobo(props) {
  const { scene, animations } = useGLTF("/models/Robo.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      const anim = actions["Idle"] || Object.values(actions)[0];
      if (anim) anim.play();
    }
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.flatShading = false;
        child.material.needsUpdate = true;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [actions, scene]);

  return <primitive object={scene} {...props} />;
}

const About = () => {
  useGSAP(() => {
    // Slide-in animation
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    // Stagger text animation
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  }, []);

  return (
    <section id="about" className="flex-center relative px-5 md:p-0 ">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2 "
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHearder
          title={"About Me"}
          text={"Turning ideas into code, and code into impact."}
          number={"01"}
        />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            {/* Profile card */}
            <div className="md:col-span-6 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="md:w-32 w-16">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <polygon
                      points="100,20 40,55 40,125 100,160 100,90"
                      fill="#7a28ff"
                    />
                    <polygon
                      points="100,20 160,55 160,125 100,160 100,90"
                      fill="#7a28ff"
                    />
                    <polygon
                      points="40,55 100,20 160,55 100,90"
                      fill="#7a28ff"
                    />
                    <polygon
                      points="100,20 40,55 40,125 100,160 160,125 160,55 100,20"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="2"
                      opacity="0.25"
                    />
                  </svg>
                </div>

                <div className="mt-5 ">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Shubham Kumar Vishwakarma
                  </h1>
                  <p className="md:text-2xl mt-2">
                    Building the future, one line of code at a time.
                  </p>
                </div>
              </div>
            </div>

            {/* 🤖 3D Robot */}
            <div className="md:col-span-6 col-span-12 row-span-5">
              <div className="hover:cursor-grab w-full md:h-full h-60 rounded-2xl overflow-hidden">
                <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 2]}>
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[3, 3, 3]} />
                  <OrbitControls enableZoom={false} />
                  <Suspense fallback={<Loader />}>
                    <AnimatedRobo scale={7} position={[0, -2.5, 0]} />
                  </Suspense>
                </Canvas>
              </div>
            </div>

            {/* Development card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Front-end Developer
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Crafting seamless, responsive, and visually engaging web
                    experiences with React.js and modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UI/UX Designer
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Designing intuitive and engaging user experiences that
                    connect people with digital products.
                  </p>
                </div>
              </div>
            </div>

            {/* Motivational card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full gap-2">
                  {[
                    "Be Yourself",
                    "Be Creative",
                    "Be Passionate",
                    "Be Different",
                  ].map((text, index) => (
                    <h1
                      key={index}
                      className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                    >
                      {text}
                    </h1>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            {bentoSocialLinks.map((link, index) => (
              <div key={index} className="md:col-span-3 col-span-12 row-span-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center md:gap-5">
                        <img src={link.icon} alt={link.name} />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {link.name}
                        </h1>
                      </div>
                      <div className="lg:block md:hidden group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrowupright"
                          className="lg:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 mt-5">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default About;

// Preload model for faster load
useGLTF.preload("/models/Robo.glb");
