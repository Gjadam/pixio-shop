import React from 'react'
import { TbArrowUpRight } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function TrendingBox() {
    return (
        <div className=" relative w-[25rem] overflow-hidden after:absolute after:bg-trending-bg  after:bg-cover after:w-1/2 after:h-full after:-left-60 hover:after:animate-fromLeftToRight after:bottom-0 after:transition-all after:duration-700 ">
            <img src="/images/jpg/trending1.jpg" alt="trending" className=' rounded-3xl w-full' />
            <div className=" absolute left-5 top-8 rounded-3xl bg-white">
                <span className=' px-4 text-xs uppercase font-bold'>28 feb 2024</span>
            </div>
            <div className=" absolute left-8 bottom-5 flex  justify-between items-center">
                <span className='text-2xl text-white max-w-72 font-bold capitalize'>Chic & Unique: Personalized Fashion Finds</span>
                <div className=" relative p-4 rounded-full bg-white group/arrow  hover:bg-purple-600 transition-colors cursor-pointer">
                    <TbArrowUpRight className=' text-2xl group-hover/arrow:text-white transition-colors' />
                    <div className="absolute left-1 bottom-0 group-hover/arrow:bottom-20 flex flex-col gap-0 group-hover/arrow:gap-2 opacity-0 group-hover/arrow:opacity-100 transition-all duration-700">
                        <div className=" p-3 bg-white rounded-full">
                            <FaLinkedinIn className='text-2xl' />
                        </div>
                        <div className=" p-3 bg-white rounded-full">
                            <FaInstagram className='text-2xl' />
                        </div>
                        <div className=" p-3 bg-white rounded-full">
                            <FaXTwitter className='text-2xl' />
                        </div>
                        <div className=" p-3 bg-white rounded-full">
                            <FaFacebookF className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
