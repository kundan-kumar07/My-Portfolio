"use client"
import React, { useState } from 'react'
import { Ovo } from "next/font/google";
import Image from 'next/image';
import { assets } from '@/assets/assets';
const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9a4be08-114c-48da-a970-99ec62b0a566");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
  id="contact"
  className={`w-full px-[12%] py-16 lg:py-32 scroll-mt-5 relative z-10 bg-footer bg-no-repeat bg-center bg-[length:90%_auto]`}
>
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Connect with me
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        Get in touch
      </h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-6  ${ovo.className}`}
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>


      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

        <div className='flex flex-wrap gap-4 mt-5 mb-8'>
          <input type="text" placeholder='Enter your name' required className='flex-1 p-2 outline-none border-[0.5px] border-gray-400 rouded-md bg-white' name='name'/>
          <input type="email" placeholder='Enter your email' required className='flex-1 p-2 outline-none border-[0.5px] border-gray-400 rouded-md bg-white' name='email' />
          <textarea rows='6' placeholder='Enter your message' required className=' w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4' name='message'></textarea>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4 '/></button>
        </div>
        

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact