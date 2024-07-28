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
        <div data-aos='fade-left' className=' mt-28'>
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
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TrendingBox bgUrl='/images/jpg/trending1.jpg' title='Chic & Unique: Personalized Fashion Finds' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox bgUrl='/images/jpg/trending2.jpg' title='Dress to Impress: Elevate Your Everyday Style' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox bgUrl='/images/jpg/trending3.jpg' title='Street Style Safari: Global Fashion Influences' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox bgUrl='/images/jpg/trending4.jpg' title='Fashion & Beauty Fusion: The Ultimate Style Guide' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendingBox bgUrl='/images/jpg/trending5.jpg' title='Style Diaries: A Week in Fashion' />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
