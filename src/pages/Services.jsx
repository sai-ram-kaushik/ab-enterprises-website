import React from "react";
import data from "../data/services-page.json";
import Banner from "../ui/Banner";
import TransitionEffect from "../components/TransitionEffect";
const Services = () => {
  const { title, services, subTitle, content, image } = data.ourServices;
  return (
    <div className="w-full px-5 lg:px-10">
      <TransitionEffect />
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 py-10">
        <div className="flex flex-col items-start gap-3">
          <h3>{subTitle}</h3>
          <p className="max-w-[700px] text-primary/60">{content}</p>
        </div>

        <img src={image} width={450} height={450} />
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4  items-center justify-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer py-5 "
            >
              <img src={service.image} width={250} height={250} className="rounded-md   border-2 border-yellow-500 " />
              <h3>{service.label}</h3>
            </div>
          );
        })}
      </div>

      <div className="py-10">
        <Banner />
      </div>
    </div>
  );
};

export default Services;
