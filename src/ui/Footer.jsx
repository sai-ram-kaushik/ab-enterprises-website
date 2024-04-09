import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { socials } from "../constants";
const Footer = () => {
  return (
    <div className="w-full mt-10 p-3 px-5 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-16">
          <div className="flex flex-col items-start gap-3">
            <h3>
              AB <span>Enterprises</span>
            </h3>
            <p>
              AB Enterprises specializes in premium corporate gifting, providing
              customized solutions for clients, employees, and partners,
              delivering top-tier products with excellence and personalized
              service.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">About Us</p>
            <div className="flex flex-col items-start gap-2">
              <p className="hover:text-primary cursor-pointer">Home</p>
              <p className="hover:text-primary cursor-pointer">About Us</p>
              <p className="hover:text-primary cursor-pointer">Services</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Contact Us</p>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <IoMdMail size={15} className="text-secondary" />
                <a href="mailto:support@abenterprises.com">
                  <p>support@abenterprises.com</p>
                </a>
              </div>

              <div className="flex items-start gap-2">
                <FaPhoneAlt size={15} className="text-secondary" />
                <div className="flex flex-col items-start">
                  <p>+91 8527888015</p>
                  <p>+91 8527888015</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FaLocationDot size={35} className="text-secondary" />
                <p>
                  A.B. Enterprises, 1001, Tower1, DLF Corporate Greens, Sec
                  74(A), Gurgaon, Haryana, 122001
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Privacy</p>
            <div className="flex flex-col items-start gap-2">
              <p>FAQ</p>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
          <p>2024 - All Rights Reserved</p>
          <div className="flex items-center gap-3 text-xl">
            {socials.map((social, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary rounded-full text-background p-2 cursor-pointer duration-500"
                >
                  <div>{social.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
