import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import { MdKeyboardArrowRight } from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import SponsoredBox from '../../Modules/SponsoredBox/SponsoredBox';

export default function Sponsored() {
    return (
        <div className='container mx-auto my-28'>
            <div className=" flex justify-around md:justify-between flex-wrap items-center ">
                <SectionHeader text='Sponsored' />
                <span className=' flex justify-center items-center text-sm font-bold capitalize cursor-pointer'>see all<MdKeyboardArrowRight className=' text-xl mb-0.5' /></span>
            </div>
            <div className=" flex justify-center items-center  mt-8 ">
                <Swiper
                 breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    720: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 4,
                    },
                }}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    slidesPerView={4}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SponsoredBox />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
