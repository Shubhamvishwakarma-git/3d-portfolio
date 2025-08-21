import CountUp from "react-countup";

const stats = [
  { num: 1, text: "years of experience" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 200, text: "Code commits" },
];

const Stats = () => {
  return (
  <div className="w-full mt-10">
      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
              <CountUp
                end={item.num}
                duration={3}
                className="text-4xl md:text-6xl font-extrabold text-white"
              />
               <p className="text-sm md:text-base text-white/70 mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
