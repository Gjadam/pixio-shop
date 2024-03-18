import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import { useSwiper } from 'swiper/react'

export default function SwiperButton() {
  const swiper = useSwiper()

  return (
    <div className=" bg-black text-white hover:bg-white hover:text-black p-5 rounded-full absolute -right-10 bottom-[5.6rem] z-10 cursor-pointer transition-colors duration-300" onClick={() => swiper.slideNext()}>
      <TiArrowRight className='customers__next-btn text-3xl ' />
    </div>
  )
}
