import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay } from 'swiper/modules';
import ProductBox from '../../Modules/ProductBox/ProductBox';
import SectionHeader from '../../Modules/SectionHeader/SectionHeader';


export default function UsersViewed() {
    return (
        <div className=' container mx-auto flex  justify-evenly items-center xl:items-start xl:flex-row flex-col gap-8 my-28'>
            <div className="">
                <img src="/images/jpg/viewed.jpg" alt="viewed" className=' rounded-tr-full rounded-tl-full' />
            </div>
            <div className=" flex justify-center items-center flex-col p-5  ">
                <div className=" flex justify-center items-center">
                    <div className=' max-w-[33rem] text-4xl font-bold px-10 md:text-start text-center'>
                    <SectionHeader text='Users Who Viewed This Also Checked Out These Similar Profiles'/>
                    </div>
                    <div className="hidden md:block">
                    <SpinnerIcon color=' text-purple-500' />
                    </div>
                </div>
                <div className=" flex justify-center items-center lg:w-[40rem] w-72  mt-8 ">
                    <Swiper
                        loop={true}
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
                        autoplay={true}
                        freeMode={true}
                        speed={1000}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Autoplay]}
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
