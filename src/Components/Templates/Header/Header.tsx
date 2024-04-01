import { MdEmergency } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative, Parallax } from 'swiper/modules';
import SwiperButton from '../../Modules/SwiperButton/SwiperButton';
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon';
import Button from '../../Modules/Button/Button';

export default function Header() {


    return (
        <div className=" relative  my-16  ">
            <Swiper
                loop={true}
                parallax={true}
                speed={2000}
                slidesPerView={1}

                grabCursor={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 30,
                    slideShadows: true,
                }}
                modules={[Parallax, EffectCreative]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <div className=" px-12 flex justify-around items-center lg:flex-row flex-col-reverse gap-10 w-full bg-primary ">
                        <div className=" relative flex justify-center items-start flex-col gap-5 mb-28">
                            <span className=' capitalize font-extrabold text-6xl md:text-[5rem] leading-none max-w-[48rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <Button text='view detail' padding='px-8 py-4' bgColor='black' />
                            </div>
                        </div>
                        <div className=" z-50 ">
                            <div className="  lg:w-[32rem] h-[43rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product2.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14" data-swiper-parallax="-400">
                                    <SpinnerIcon color='text-primary' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" px-12 flex justify-around items-center lg:flex-row flex-col-reverse gap-10 w-full bg-primary ">
                        <div className=" relative flex justify-center items-start flex-col gap-5 mb-28">
                            <span className=' capitalize font-extrabold text-6xl md:text-[5rem] leading-none max-w-[48rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <Button text='view detail' padding='px-8 py-4' bgColor='black' />
                            </div>
                        </div>
                        <div className=" z-50 ">
                            <div className="  lg:w-[32rem] h-[43rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product3.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14" data-swiper-parallax="-400">
                                    <SpinnerIcon color='text-primary' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" px-12 flex justify-around items-center lg:flex-row flex-col-reverse gap-10 w-full bg-primary ">
                        <div className=" relative flex justify-center items-start flex-col gap-5 mb-28">
                            <span className=' capitalize font-extrabold text-6xl md:text-[5rem] leading-none max-w-[48rem]' data-swiper-parallax="-300">Make your fashion look mire charming</span>
                            <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                                <span>Price</span>
                                <span className=' text-4xl font-bold'>166$</span>
                            </div>
                            <div className="" data-swiper-parallax="-100">
                                <Button text='view detail' padding='px-8 py-4' bgColor='black' />
                            </div>
                        </div>
                        <div className=" z-50 ">
                            <div className="  lg:w-[32rem] h-[43rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                                <img src="/images/png/product1.png" className='rounded-[2.5rem]' alt="product" />
                                <div className=" absolute -left-56 bottom-48  -rotate-90">
                                    <span className=' text-white text-8xl font-outline-1 drop-shadow-lg  tracking-widest  uppercase'>summer</span>
                                </div>
                                <div className=" z-50 absolute -left-14 -top-14" data-swiper-parallax="-400">
                                    <SpinnerIcon color='text-primary' />
                                </div>
                                <SwiperButton />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
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
