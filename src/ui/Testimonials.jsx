import React from "react";

const Testimonials = ({ testimonials }) => {
  const { title, testimonial } = testimonials;
  return (
    <div className="w-full py-10 px-5 lg:px-10 bg-primary text-background">
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="carousel rounded-box md:w-[600px] space-x-14">
          {testimonial.map((list, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center carousel-item w-1/2"
              >
                <img src={list.image} width={150} height={150} />
                <h3>{list.name}</h3>
                <p className="text-background/50 text-center">{list.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
