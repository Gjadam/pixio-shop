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
                <div className=" max-w-[35rem] md:text-start text-center p-5">
                <SectionHeader text='Discover The Most Trending Post In Pixio.' />
                </div>
                <div className=" hidden md:block">
                <SpinnerIcon color='text-purple-500' />
                </div>
            </div>
            <div className="  mt-8">
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
                    centeredSlides={true}
                    speed={1000}
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
