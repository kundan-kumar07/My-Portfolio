"use client"
import React from "react";
import { Outfit, Ovo } from "next/font/google";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
const ovo = Ovo({ subsets: ["latin"], weight: "400" });
const Works = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-20 lg:py-32 scroll-mt-10 relative z-10 bg-white"
    >
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        My portfolio
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        My latest work
      </h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12  ${ovo.className}`}
      >
        Welcome to my web development portfolio! Here, you’ll find projects I’ve
        built while learning and exploring full-stack development, showcasing
        how I’m growing as a developer.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a
                  href={project.link}
                  target="_blank"
                  
                  
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 py-3"
      >
        Show more{" "}
        <Image src={assets.right_arrow_bold} alt="rightArrow" className="w-4" />
      </a>
    </div>
  );
};

export default Works;
