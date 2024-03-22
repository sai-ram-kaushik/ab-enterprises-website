import React from "react";
import Button from "../components/Button";
import Services from "./Services";
import data from "../data/landing-page.json";
import Banner from "./Banner";
import Categories from "./Categories";

const HomePage = ({ homePage }) => {
  const { subTitle, title, content, buttonTitle, image } = homePage;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full md:h-[70vh]">
        <div className="bg-secondary w-full h-full px-5 lg:px-10 rounded-tr-[200px] md:rounded-tr-[400px] rounded-br-[100px] shadow-xl">
          <div className="flex flex-col items-start justify-center w-full h-full gap-3 py-10 text-background">
            <p>{subTitle}</p>
            <h1>{title}</h1>
            <p>{content}</p>
            <Button title={buttonTitle} />
          </div>
        </div>
        <div className="bg-background w-full md:rounded-tl-[200px] rounded-bl-[400px] shadow-2xl">
          <img src={image} alt="background" />
        </div>
      </div>
      <Services ourServices={data.ourServices} />
      <Banner />
      <Categories categories={data.categories} />
    </div>
  );
};

export default HomePage;
