import React from "react";
import { gallery } from "../constants";
import TransitionEffect from "../components/TransitionEffect";

const Gallery = () => {
  return (
    <div className="w-full px-5 lg:px-10">
      <TransitionEffect />
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-16">
        {gallery.map((image, index) => {
          return (
            <div key={index} className="flex justify-center">
              <img
                src={image.image}
                width={350}
                height={350}
                className="rounded-xl border-2 border-secondary"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
