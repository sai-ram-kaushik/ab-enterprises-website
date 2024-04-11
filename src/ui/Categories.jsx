import React from "react";

const Categories = ({ categories }) => {
  const { title, ourCategory } = categories;
  return (
    <div className="w-full px-5 lg:px-10 py-10">
      <div className="flex items-center justify-center">
        <h2>{title}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-10">
        {/* Added justify-center to align categories in the center */}
        {ourCategory.map((category, index) => {
            return(
                <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
                    <img src={category.image} alt={category.label} width={250} height={250} className="rounded-2xl" />
                    <h3 className="text-center">{category.label}</h3>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Categories;
