import React from "react";

const Services = ({ ourServices }) => {
  const { title, services } = ourServices;
  return (
    <div className="w-full px-5 lg:px-10 py-16">
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 items-center justify-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <img src={service.image} width={250} height={250} />
              <h3>{service.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
