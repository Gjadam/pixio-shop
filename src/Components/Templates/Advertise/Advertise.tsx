import React from 'react'
import Button from '../../Modules/Button/Button'
import AdvertiseBox from '../../Modules/AdvertiseBox/AdvertiseBox'


export default function Advertise() {
    return (
        <div className=' container mx-auto flex justify-around items-center  h-[33rem] my-24'>
            <div className=" relative h-full">
                <img src="/images/png/women.png" alt="media" className=' z-10 mask  h-full' />
                <div className=" absolute left-16  bottom-10">
                    <Button text={'Women collection'} padding='px-5 py-3' />
                </div>
            </div>
            <div className=" flex justify-between items-start flex-col h-full">
                <div className=" flex justify-center items-start flex-col gap-3 pt-5">
                    <span className=' font-bold text-3xl max-w-[30rem]'>Set Your Wardrobe With Our Amazing Selection!</span>
                    <span className=' max-w-[35rem] text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</span>
                </div>
                <div className=" flex justify-center items-center gap-8">
                    <AdvertiseBox text='child fashion' image='/images/png/ad-image1.png' />
                    <AdvertiseBox text='max collection' image='/images/png/ad-image2.png' isDiscount={true} />
                </div>
            </div>
        </div>
    )
}
