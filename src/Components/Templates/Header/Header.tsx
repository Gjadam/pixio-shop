import React from 'react'
import { TiArrowRight } from "react-icons/ti";
import { MdEmergency } from "react-icons/md";
import { IoIosFlower } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCreative, FreeMode, Parallax } from 'swiper/modules';
import SwiperButton from '../../Modules/SwiperButton/SwiperButton';
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon';

export default function Header() {


    return (
        <div className=" relative  my-16 ">
            <Swiper
                loop={true}
                autoplay={true}
                parallax={true}
                spaceBetween={-240}
                grabCursor={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: true,
                }}
                modules={[Parallax, Autoplay, EffectCreative]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <div className=" flex justify-around items-center w-full ">
                        <div className=" relative flex justify-center items-start flex-col gap-8 mb-28">
                            <span className=' capitalize font-extrabold text-[5rem] leading-none max-w-[45rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <span className=' uppercase font-bold rounded-xl bg-black text-white px-8 py-4' >view details</span>
                            </div>

                        </div>
                        <div className=" z-50 ">
                            <div className=" w-[32rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product1.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14">
                                    <SpinnerIcon color='text-white' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex justify-around items-center w-full ">
                        <div className=" relative flex justify-center items-start flex-col gap-8 mb-28">
                            <span className=' capitalize font-extrabold text-[5rem] leading-none max-w-[45rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <span className=' uppercase font-bold rounded-xl bg-black text-white px-8 py-4' >view details</span>
                            </div>

                        </div>
                        <div className=" z-50 ">
                            <div className=" w-[32rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product2.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14">
                                    <SpinnerIcon color='text-white' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex justify-around items-center w-full ">
                        <div className=" relative flex justify-center items-start flex-col gap-8 mb-28">
                            <span className=' capitalize font-extrabold text-[5rem] leading-none max-w-[45rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <span className=' uppercase font-bold rounded-xl bg-black text-white px-8 py-4' >view details</span>
                            </div>

                        </div>
                        <div className=" z-50 ">
                            <div className=" w-[32rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product3.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14">
                                    <SpinnerIcon color='text-white' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className=" flex justify-center items-center  z-50 absolute left-32 bottom-10">
                <MdEmergency className='text-8xl' />
                <div className=" flex justify-center items-start flex-col font-bold gap-1">
                    <span className=' text-sm'>Summer Collection</span>
                    <span className=' max-w-48 '>TRENDY AND CLASSIC FOR THE NEW SEASON</span>
                </div>
            </div>

        </div>
    )
}
