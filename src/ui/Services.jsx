import React from "react";
import data from "../data/services-page.json";

const Services = () => {
  const { title, services } = data.ourServices;
  return (
    <div className="w-full px-5 lg:px-10 py-16">
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center mt-10">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer py-5 "
            >
              <img
                src={service.image}
                width={250}
                height={250}
                className="rounded-md   border-2 border-yellow-500 "
              />
              <h3 className="text-center">{service.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
