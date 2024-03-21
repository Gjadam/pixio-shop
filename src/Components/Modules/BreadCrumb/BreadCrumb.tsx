import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function BreadCrumb() {
    return (
        <div className=" flex justify-center items-center gap-3">
            <span className=' flex justify-center items-center'>Home</span>
            <IoIosArrowForward />
            <span className=' flex justify-center items-center'>Product Carousel</span>
        </div>
    )
}
