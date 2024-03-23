import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Services from "./Services";
import data from "../data/landing-page.json";
import Banner from "./Banner";
import Categories from "./Categories";
import TransitionEffect from "../components/TransitionEffect";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
const HomePage = ({ homePage }) => {
  const { subTitle, title, content, buttonTitle, image } = homePage;
  const [scrollY, setScrollY] = useState(0);

  const servicesRef = useRef(null);
  const bannerRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <TransitionEffect />
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full md:h-[80vh]">
        <div className="bg-secondary w-full h-full px-5 lg:px-10 rounded-tr-[200px] md:rounded-tr-[400px] rounded-br-[100px] shadow-xl">
          <div className="flex flex-col items-start justify-center w-full h-full gap-3 py-10 text-background">
            <p>{subTitle}</p>
            <h1>{title}</h1>
            <p>{content}</p>
            <Link to="/services">
              <Button title={buttonTitle} />
            </Link>
          </div>
        </div>
        <div className="bg-background w-full md:rounded-tl-[200px] rounded-bl-[400px] shadow-2xl">
          <img
            src={image}
            alt="background"
            className="animate-translateAnimate"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div ref={servicesRef}>
        <motion.div
          animate={{
            opacity: scrollY > 100 ? 1 : 0,
            y: scrollY > 100 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <Services ourServices={data.ourServices} />
        </motion.div>
      </div>

      <div ref={bannerRef}>
        <motion.div
          animate={{
            opacity: scrollY > 200 ? 1 : 0,
            y: scrollY > 200 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <Banner />
        </motion.div>
      </div>

      <div ref={categoriesRef}>
        <motion.div
          animate={{
            opacity: scrollY > 300 ? 1 : 0,
            y: scrollY > 300 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <Categories categories={data.categories} />
        </motion.div>
      </div>

      <Testimonials testimonials={data.testimonials} />
    </div>
  );
};

export default HomePage;
