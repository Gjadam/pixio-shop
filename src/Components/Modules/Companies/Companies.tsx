import React from 'react'
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'
import Slider from 'react-infinite-logo-slider'
export default function Companies() {
    return (
        <div className=' relative container mx-auto bg-companies-bg w-full rounded-3xl my-28'>
            <img src="/images/svg/category.svg" alt="icon" className=' hidden md:block absolute left-0 top-0' />
            <div className=" flex justify-around items-center">
                <div className="">
                    <h1 className=' pt-20 text-4xl xl:text-6xl text-center xl:text-left max-w-[53rem] font-bold text-white'>We’re Just Keep Growing With 6.3k Trusted Companies</h1>
                </div>
                <div className=" bg-white bg-opacity-55 rounded-b-full w-48 h-56 hidden xl:flex justify-center items-end">
                    <div className=" flex justify-center items-center flex-col">
                        <span className=' text-xs text-white '>PiXiO</span>
                        <div className=" bg-black rounded-full mb-5 bg-companies-bg animate-spin-slow shadow-lg">
                            <SpinnerIcon color='text-white' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <Slider
                    duration={30}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company1.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company2.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company3.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company5.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company4.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company6.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company7.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className=" bg-white px-10 py-6 rounded-3xl overflow-hidden group">
                            <img src="/images/png/company8.png" alt="company" className=' group-hover:animate-toUpFromBottom' />
                        </div>
                    </Slider.Slide>
                </Slider>
            </div>
            <img src="/images/svg/category.svg" alt="icon" className=' hidden md:block absolute right-0 bottom-0 rotate-180' />
        </div>
    )
}
