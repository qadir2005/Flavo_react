import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function SocialMediaLinksTop() {
  return (
    <div  className='bg-[#F4F6F8] '>
        <div className=' max-w-[1200px] mx-auto h-10 items-center text-[11px] flex justify-between text-bla w-[90%]'>
      <a href="tel:+923464138581 " className='hover:text-[#C2C2C2] duration-200 '><span className='font-bold'>Click here : </span>  Phone:0346-4138581</a>
      <div className='flex  gap-4 text-[14px]'>
        <a href="https://www.instagram.com/qadir_ki_coding/" target='_blank'>
        <FaInstagram  className='hover:text-[#c2c2c2] hover:text-[12px] duration-200' />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086971008426" target='_blank'><FaFacebook className='hover:text-[#c2c2c2] hover:text-[12px] duration-200' /></a>
      <a href="https://www.linkedin.com/in/abdul-qadir-web-developer-12a5b62b9/" target='_blank'>
      <FaLinkedin className='hover:text-[#c2c2c2] hover:text-[12px] duration-200' />
      </a>
      <a href="https://www.tiktok.com/search?q=abdul_qadir.05&t=1732462223421"  target='_blank'>
      <AiFillTikTok className='hover:text-[#c2c2c2] hover:text-[12px] duration-200' />
      </a>
      </div>
      </div>
    </div>
  )
}
