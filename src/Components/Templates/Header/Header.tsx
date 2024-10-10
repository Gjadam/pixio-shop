import { MdEmergency } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative, Parallax } from 'swiper/modules';

import HeaderProductBox from "../../Modules/HeaderProductBox/HeaderProductBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductsFromServer } from "../../../Redux/store/products";
import { AppDispatch, RootState } from "../../../Redux/store";
import { IProductBox } from "../../Modules/ProductBox/ProductBox";
import Loader from "../../Modules/Loader/Loader";

export default function Header() {

    const dispatch = useDispatch<AppDispatch>()
    const allProducts = useSelector((state: RootState) => state.products.allProductsData)

    useEffect(() => {
        dispatch(getAllProductsFromServer())
    }, [])

    return (
        <div className=" relative  my-16  ">
            <Swiper
                loop={true}
                parallax={true}
                autoplay={true}
                speed={3000}
                slidesPerView={1}
                spaceBetween={60}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: true,
                }}
                modules={[Autoplay, Parallax, EffectCreative]}
                className="mySwiper3"
            >
                {
                    allProducts.length > 0 ? (
                        allProducts.slice(0, 6).map((product: IProductBox) => (
                            <SwiperSlide>
                                <HeaderProductBox key={product.id} {...product} />
                            </SwiperSlide>
                        ))

                    ) : (
                        <div className="">
                            
                        </div>
                            // <Loader />
                    )
                }
            </Swiper>
            <div className="flex justify-center items-center  z-20 absolute left-5 lg:left-32 lg:bottom-0">
                <MdEmergency className='text-8xl' />
                <div className=" flex justify-center items-start flex-col font-bold gap-1">
                    <span className=' text-sm'>Summer Collection</span>
                    <span className=' max-w-52 text-lg '>TRENDY AND CLASSIC FOR THE NEW SEASON</span>
                </div>
            </div>

        </div>
    )
}
