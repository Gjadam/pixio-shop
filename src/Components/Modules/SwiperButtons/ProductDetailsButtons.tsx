import React from 'react'
import { useSwiper } from 'swiper/react'
import { GrFormPrevious } from "react-icons/gr";

export default function ProductDetailsButtons() {

    const swiper = useSwiper()

    return (
        <div className='absolute bottom-0 flex items-center bg-primary rounded-tr-xl overflow-hidden text-xl z-50 select-none cursor-pointer' >
            <span className=' hover:text-purple-500 transition-colors duration-300 p-2 ' onClick={() => swiper.slidePrev()}><GrFormPrevious/></span>
            <span className=' hover:text-purple-500 transition-colors duration-300 p-2 ' onClick={() => swiper.slideNext()}><GrFormPrevious className=' rotate-180 '/></span>
        </div>
    )
}
