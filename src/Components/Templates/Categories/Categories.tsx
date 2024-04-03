
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon';

export default function Categories() {
    return (
        <div className=' flex justify-center items-center md:flex-row flex-col w-full md:h-80 my-28'>
            <div className=" relative bg-purple-100 md:w-3/5 w-full   h-full py-20 md:p-20   after:absolute after:bg-[url('/images/svg/category.svg')] after:bg-no-repeat after:top-0 after:w-full after:h-full ">
                <Swiper
                    effect={'coverflow'}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={true}
                    grabCursor={true}
                    speed={1000}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=" flex justify-center items-center flex-col gap-4 w-44">
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
            <div className=" flex justify-between items-center gap-3 bg-black md:w-2/5 w-full h-full p-16 ">
                <div className="">
                    <p className=' text-white text-4xl max-w-96 font-semibold leading-snug'>Featured Categories</p>
                    <p className=' text-gray-400 max-w-64 leading-loose'>Discover the most trending products in Pixio.</p>
                </div>
                <div className=" hidden md:block ">
                    <SpinnerIcon color='text-white' />
                </div>
            </div>
        </div>
    )
}
