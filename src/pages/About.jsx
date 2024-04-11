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
            Meet Arjun Bhardwaj, the visionary behind AB Enterprises, a seasoned
            professional with over a decade of expertise in procurement. With a
            keen understanding of industry dynamics and a passion for
            excellence, Arjun has cultivated AB Enterprises into a leading name
            in corporate gifting and supplies. His wealth of experience and
            commitment to delivering unparalleled quality ensure that every
            client receives exceptional service and tailored solutions to meet
            their needs. Join us as we explore the journey of Arjun Bhardwaj and
            the legacy he continues to build through AB Enterprises.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
