import React from 'react'
import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';



import TrendingBox from '../../Modules/TrendingBox/TrendingBox';
export default function Trending() {
    return (
        <div className=' mt-28'>
            <div className=" container mx-auto flex justify-between items-center">
                <div className=" max-w-[35rem]">
                <SectionHeader text='Discover The Most Trending Post In Pixio.' />
                </div>
                <SpinnerIcon color='text-purple-500' />
            </div>
            <div className="mt-8">
                <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    speed={1000}
                    spaceBetween={250}
                    grabCursor={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
