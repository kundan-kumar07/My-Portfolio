import React from "react";
import { Outfit, Ovo } from "next/font/google";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 lg:py-32 scroll-mt-10 relative z-10 bg-white"
    >
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        What I offer
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>My Services</h2>
      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12  ${ovo.className}`}>
        
        As a third-year student exploring web development, I can build
        full-stack websites with React, Next.js, Node.js, and databases. While
        I’m still improving my design and styling skills, I enjoy creating
        functional, responsive, and practical applications.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({icon,title,description,link},index)=>(
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_0_#000] hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff]">
            <Image src={icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">
              {description}
            </p>
            

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
