import React from "react";
import TransitionEffect from "../components/TransitionEffect";
import data from "../data/about-page.json";
import arjun from "/arjun_pic.png";
const About = () => {
  const { title, content, stats, team } = data.about;
  return (
    <>
      <div className="w-full px-5 lg:px-10">
        <TransitionEffect />
        <div className="flex flex-col gap-2 items-center justify-center py-10">
          <h2>{title}</h2>
          <p className="max-w-[800px] text-justify text-primary/60">
            {content}
          </p>
        </div>

        {/* <div className="w-full bg-primary p-5 container mx-auto rounded-xl flex flex-col md:flex-row items-center justify-center gap-16">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="text-background">
                <div className="flex flex-col items-center gap-2">
                  <h3>{stat.label}</h3>
                  <p className="font-bold">{stat.count}</p>
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="flex flex-col gap-2 items-center justify-center mt-5">
          <h2>Meet Our Founder</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <img src={arjun} width={250} height={250} className="" />
          <h3 className="text-secondary">Arjun Bhardwaj</h3>
          <p className="max-w-[800px] text-justify">
            Arjun Bhardwaj, visionary of AB Enterprises, boasts over a decade of
            procurement expertise, shaping the company into a leader in
            corporate gifting and supplies. With a commitment to excellence,
            Arjun delivers tailored solutions, ensuring every client receives
            unparalleled service. His journey epitomizes a legacy of quality and
            innovation in the industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
