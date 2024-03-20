import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { PiBasket } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
interface IProductBox {
    size?: string
}

export default function ProductBox({size}: IProductBox) {
    return (
        <div className={` ${size === 'lg' ? 'w-72' : 'w-48'} flex justify-center items-center flex-col`}>
            <div className={` group relative  w-full rounded-3xl overflow-hidden cursor-pointer`}>
                <img src="/images/png/product1.png" alt="product" className=' rounded-3xl group-hover:-translate-y-6 transition-transform duration-1000 ease-in-out' />
                <div className={`  px-7 py-3 text-center border-4 border-primary bg-black hover:bg-purple-600 rounded-full overflow-hidden absolute ${size === 'lg' ? 'left-[4.5rem]' : 'left-[3.5rem]'}  -bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out  after:absolute after:left-0  after:bottom-0 after:bg-[rgba(255,255,255,0.1)] after:border-0  after:hover:border-r-1 after:border-white  z-0 after:-z-10 after:w-0 after:h-full after:hover:w-[101%]  after:transition-all after:ease-in-out after:duration-500 `}>
                    <span className=' text-sm text-white uppercase'>{size === 'lg' ? 'Quick View' : <FaEye className='text-xl' />}</span>
                </div>

                <div className=" absolute top-6 left-5">
                    <span className=' px-3 py-1.5 uppercase bg-white text-black font-bold text-xs rounded-3xl'>get 20% Off</span>
                </div>
                <div className=" absolute right-4 top-4">
                    <div className=" p-3 text-white bg-zinc-600 rounded-full relative overflow-hidden after:absolute after:left-0 after:bottom-0 after:bg-[rgba(255,255,255,0.1)] after:border-0  after:hover:border-r-1 after:border-white  z-0 after:-z-10 after:w-0 after:h-full after:hover:w-[105%]  after:transition-all after:ease-in-out after:duration-500">
                        <FaRegHeart className=' text-xl' />
                    </div>
                    <div className=" mt-2 p-3 text-white bg-zinc-600 rounded-full relative overflow-hidden after:absolute after:left-0 after:bottom-0 after:bg-[rgba(255,255,255,0.1)] after:border-0  after:hover:border-r-1 after:border-white  z-0 after:-z-10 after:w-0 after:h-full after:hover:w-[105%]  after:transition-all after:ease-in-out after:duration-500">
                        <PiBasket className=' text-xl' />
                    </div>
                </div>
            </div>
            <div className={` flex justify-between items-start w-full font-bold text-lg p-2`}>
                <span className=' max-w-52'>Classic Denim Skinny Jeans</span>
                <span>96$</span>
            </div>
        </div>
    )
}
