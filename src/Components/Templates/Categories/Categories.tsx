import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from 'swiper/modules';
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon';

export default function Categories() {
    return (
        <div className=' flex justify-center items-center h-80 my-24'>
            <div className=" relative bg-purple-100 w-3/5  h-full p-20   after:absolute after:bg-[url('/images/svg/category.svg')] after:bg-no-repeat after:top-0 after:w-full after:h-full ">
                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    autoplay={true}
                    grabCursor={true}
                    slidesPerView={3}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 10,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4  w-44">
                            <img src="/images/png/category1.png" alt="category" />
                            <span className=' px-5 py-2 bg-white border-1 rounded-full font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>Summer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4  w-44">
                            <img src="/images/png/category1.png" alt="category" />
                            <span className=' px-5 py-2 bg-white border-1 rounded-full font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>Summer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4  w-44">
                            <img src="/images/png/category1.png" alt="category" />
                            <span className=' px-5 py-2 bg-white border-1 rounded-full font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>Summer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4  w-44">
                            <img src="/images/png/category1.png" alt="category" />
                            <span className=' px-5 py-2 bg-white border-1 rounded-full font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>Summer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4  w-44">
                            <img src="/images/png/category1.png" alt="category" />
                            <span className=' px-5 py-2 bg-white border-1 rounded-full font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>Summer</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=" flex justify-between items-center gap-3 bg-black w-2/5 h-full p-24 ">
                <div className="">
                    <p className=' text-white text-4xl max-w-96 font-semibold leading-snug'>Featured Categories</p>
                    <p className=' text-gray-400 max-w-64 leading-loose'>Discover the most trending products in Pixio.</p>
                </div>
                <div className="  ">
                    <SpinnerIcon color='text-white' />
                </div>
            </div>
        </div>
    )
}
