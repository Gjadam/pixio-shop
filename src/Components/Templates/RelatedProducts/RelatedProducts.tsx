import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import ProductBox from '../../Modules/ProductBox/ProductBox';
import { MdKeyboardArrowRight } from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
                    slidesPerView={4}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                        <ProductBox size='lg' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
