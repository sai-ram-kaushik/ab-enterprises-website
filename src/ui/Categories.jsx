import React from "react";

const Categories = ({ categories }) => {
  const { title, ourCategory } = categories;
  return (
    <div className="w-full px-5 lg:px-10 py-10">
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 mt-10">
        {ourCategory.map((category, index) => {
            return(
                <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
                    <img src={category.image} width={250} height={250} />
                    <h3>{category.label}</h3>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Categories;
