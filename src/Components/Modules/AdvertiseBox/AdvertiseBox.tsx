import React from 'react'
import Button from '../Button/Button'
interface IAdvertiseBox {
    text: string
    image: string
    isDiscount?: boolean
}

export default function AdvertiseBox({ text, image, isDiscount }: IAdvertiseBox) {
    return (
        <div className=" relative w-72 ">
            <img src={image} alt="image" className='rounded-3xl' />
            <div className="absolute left-3 bottom-3">
                <Button text={text} padding={' px-4 py-2'} bgColor={true} />
            </div>
            {
                isDiscount &&
                <div className="absolute -right-10 -top-10">
                    <div className=" relative">
                        <img src="/images/png/star.png" alt="star" className=' -z-10 animate-spin-slow' />
                        <span className=' absolute left-10 top-7 z-10 max-w-1 capitalize font-bold'>50% sale</span>
                    </div>
                </div>
            }
        </div>
    )
}
