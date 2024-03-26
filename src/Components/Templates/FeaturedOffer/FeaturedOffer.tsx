import React from 'react'
import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import FeaturedOfferBox from '../../Modules/FeaturedOfferBox/FeaturedOfferBox'
import { MdKeyboardArrowRight } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';


export default function FeaturedOffer() {
    return (
        <div className='flex flex-col my-28'>
            <div className="container mx-auto flex justify-between  items-center w-full">
                <SectionHeader text='Featured Offer For You' />
                <span className=' flex justify-center items-center text-sm font-bold capitalize cursor-pointer'>see all<MdKeyboardArrowRight className=' text-xl mb-0.5' /></span>
            </div>
            <div className="flex justify-center items-center w-full px-4 mt-8 ">
                <Swiper
                    loop={true}
                    autoplay={true}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <FeaturedOfferBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedOfferBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedOfferBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedOfferBox />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
