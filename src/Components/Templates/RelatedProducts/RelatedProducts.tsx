import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import { MdKeyboardArrowRight } from 'react-icons/md'

// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function RelatedProducts() {
    return (
        <div className=" w-full">
            <div className=" flex justify-between  items-center w-full ">
                <SectionHeader text='Related Products' />
                <span className=' flex justify-center items-center text-sm font-bold capitalize cursor-pointer'>see all products<MdKeyboardArrowRight className=' text-xl mb-0.5' /></span>
            </div>
            <div className=" w-full flex justify-center items-center mt-10">

                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}
