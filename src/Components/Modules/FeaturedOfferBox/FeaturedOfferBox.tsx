import React from 'react'
import Button from '../Button/Button'

export default function FeaturedOfferBox() {
    return (
        <div className=" relative bg-[url('/images/png/Offer3.png')] bg-cover bg-no-repeat bg-center rounded-3xl  w-[38rem] h-[25rem]">
            <div className=" absolute right-5 top-20 flex justify-center items-start flex-col gap-2 font-bold">
                <span className=' bg-white py-1 px-4 uppercase'>50% off</span>
                <span className=' text-3xl tracking-widest uppercase'>Summber</span>
                <span className=' text-8xl  uppercase'>Sale</span>
                <Button text='collect now' padding='px-3 py-2' />
            </div>
        </div>
    )
}
