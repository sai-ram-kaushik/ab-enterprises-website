import React from "react";
import TransitionEffect from "../components/TransitionEffect";
import data from "../data/about-page.json";

const About = () => {
  const { title, content, stats, team } = data.about;
  return (
    <>
      <div className="w-full">
        <TransitionEffect />
        <div className="flex flex-col gap-2 items-center justify-center py-10">
          <h2>{title}</h2>
          <p className="max-w-[700px] text-center text-primary/60">{content}</p>
        </div>

        <div className="w-full bg-primary p-5 container mx-auto rounded-xl flex flex-col md:flex-row items-center justify-center gap-16">
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
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-5">
          <h2>Meet Our Magicians</h2>
          <p className="text-primary/60 max-w-[800px] text-center">
            We introduce ourselves as a team of wizards who enjoy organizing an
            extraordinarily creative event with precise management. Our team
            will ensure that nothing comes in between while you are living fully
            in the moment.
          </p>
        </div>

        <div className="flex items-center justify-center mt-10 gap-16">
          {team.map((list, index) => {
            return (
              <div
                className="card w-96 glass flex flex-col items-center justify-center"
                key={index}
              >
                <figure>
                  <img
                    src={list.image}
                    alt={list.name}
                    width={200}
                    height={200}
                  />
                </figure>

                <h3 className="card-title">{list.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
