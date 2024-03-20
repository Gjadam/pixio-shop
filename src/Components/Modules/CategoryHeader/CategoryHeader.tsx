import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function CategoryHeader() {
    return (
        <div className=" flex justify-center items-center w-full h-64 relative after:absolute after:bg-[url('/images/jpg/categoryHeader-bg.jpg')] after:w-full after:h-full after:z-0  after:bg-no-repeat after:bg-cover after:bg-center text-white after:brightness-50 ">
            <div className="flex justify-center items-center flex-col gap-4 z-50">
                <h1 className=' text-5xl font-bold z-50'>Shop</h1>
                <div className=" flex justify-center items-center gap-3">
                    <span className=' flex justify-center items-center'>Home</span>
                    <IoIosArrowForward />
                    <span className=' flex justify-center items-center'>test</span>
                </div>
            </div>
        </div>
    )
}
