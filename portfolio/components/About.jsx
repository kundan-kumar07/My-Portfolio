import React from 'react'
import { Outfit,Ovo } from "next/font/google";
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react"



const outfit = Outfit({ subsets: ["latin"] });


const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <motion.section 
      
      id='about'
      className='w-full px-[12%] py-20 lg:py-3  scroll-mt-20 scroll-smooth relative z-10 bg-white'
    >
      <h4 className={`text-center mt-2  mb-1 text-lg ${ovo.className}`}>Introduction</h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-18 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
      src="/profile.jpg"   
      alt="User"
      width={400}      
      height={300}      
      className="w-full rounded-3xl object-cover"
    />
        </div>
        <div className='flex-1'>
          <p className={`mb-5 max-w-2xl ${ovo.className}`}>
            I’m currently in my third year of studies and have taught myself web development through practice and projects. My journey has helped me gain hands-on experience in building real-world applications using React, Next.js, and Tailwind CSS. I enjoy creating responsive and interactive web experiences and am continuously exploring new technologies to improve my skills.

          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon,iconDark,title,description},index)=>(
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_0_#000]' key={index}>
                <Image src={icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>
          <h4 className={`my-1.3 text-gray-700 ${ovo.className}`}>
            Tools I use
          </h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool,index)=>(
              <li className='flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}><Image src={tool} alt='tools' className='w-4 sm:w-7'/></li>
            ))}
          </ul>

        </div>
      </div>
      
    </motion.section>
  )
}

export default About
