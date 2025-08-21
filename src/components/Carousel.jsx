import { useState } from "react";
import { slides } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Carousel = () => {
  const [currentslide, setcurrentslide] = useState(0);
  const prevslide = () => {
    setcurrentslide(
      (prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1)
    );
  };
  const nextslide = () => {
    setcurrentslide((prev) => (prev + 1) % (slides.length - 1));
  };

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentslide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
    });
    gsap.fromTo(
      `.slider-item:nth-child(${currentslide + 2}) img`,
      { scale: 2 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentslide]);
  return (
    <div className="relative">
      <div className=" w-full relative lg:h-[60vh] md:h[45vh] h-[60vh]">
        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full  lg:h-[60vh] md:h[45vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden"
                key={index}
              >
                <img
                  className=" w-full h-full object-cover object-center"
                  src={slide.img}
                  alt="slides"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                  <div className=" flex h-full justify-between items-center ">
                    <div className=" flex-center gap-2">
                      <p>{index + 1}</p>
                      <p>{slide.title}</p>
                    </div>
                    <div className=" flex-center gap-5">
                      <a
                        href={slide.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-center gap-2 text-white hover:text-purple-400 transition-colors duration-300"
                      >
                        <p className="font-medium">Preview Project</p>
                        <img
                          className="md:size-10 size-7"
                          src="/images/arrowupright.svg"
                          alt="arrowupright"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div
          onClick={prevslide}
          className=" w-12 h-12 rounded-full cursor-pointer bg-blue-50  hover:bg-pink-100 active:scale-90 transition-all  flex-center"
        >
          <img className=" w-5 h-5" src="/images/CaretLeft.svg" alt="left" />
        </div>
        <div
          onClick={nextslide}
          className=" rounded-full cursor-pointer bg-blue-50  hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center"
        >
          <img className=" w-5 h-5" src="/images/CaretRight.svg" alt="right" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
