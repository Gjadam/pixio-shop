import React from 'react'
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';
import ProductBox from '../../Modules/ProductBox/ProductBox';


export default function UsersViewed() {
    return (
        <div className=' container mx-auto flex justify-center items-start gap-8 my-28'>
            <div className="">
                <img src="/images/jpg/viewed.jpg" alt="viewed" className=' rounded-tr-full rounded-tl-full' />
            </div>
            <div className=" flex justify-center items-center flex-col p-5">
                <div className=" flex justify-center items-center">
                    <span className=' max-w-[33rem] text-4xl font-bold'>Users Who Viewed This Also Checked Out These Similar Profiles</span>
                    <SpinnerIcon color=' text-black' />
                </div>
                <div className=" w-[40rem]  mt-8 ">
                    <Swiper
                        loop={true}
                        autoplay={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={true}

                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
