import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Ovo } from "next/font/google";
import { motion } from "motion/react"

const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <header className="relative w-full bg-transparent">
      <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-32">
        {/* Profile Image */}
        < motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8,type:'spring',stiffness:100}}>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 object-cover"
          />
        </motion.div>

        {/* Greeting */}
        <motion.h3 
        initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.3}}
          className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}
        >
          Hi! I'm Kundan Kumar Dubey
          <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
        </motion.h3>

        {/* Main Title */}
        <motion.h1 initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8,delay:0.5}} className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>
          Self-taught web developer
        </motion.h1>

        {/* Description */}
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.7}}
         className={`max-w-2xl mx-auto ${ovo.className}`}>
          Hi! I'm Kundan Kumar Dubey. Self-taught web developer building
          interactive web applications.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <motion.a
          initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1}}

            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Contact Me
            <Image
              src={assets.right_arrow_white}
              alt="Right Arrow"
              className="w-4"
            />
          </motion.a>

          <motion.a initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.2}}
            href="/Resume.pdf"
            download
            className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="Download Icon"
              className="w-4"
            />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
