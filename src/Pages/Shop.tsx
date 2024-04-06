import CategoryHeader from '../Components/Modules/CategoryHeader/CategoryHeader';
import { VscSettings } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ProductBox from '../Components/Modules/ProductBox/ProductBox';
import Footer from '../Components/Templates/Footer/Footer';
import FormInput from '../Components/Modules/FormInput/FormInput';
import { useState } from 'react';
export default function Shop() {

    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false)

    return (
        <>
            <CategoryHeader />
            <div className=" relative flex justify-between items-start px-28 py-10">
                <div className={` lg:flex  gap-8 lg:w-96 fixed ${isOpenFilter ? '-bottom-[12.8rem]' : '-bottom-0'}  right-0 left-0 border-t-1 lg:border-0  border-black rounded-t-3xl p-5 lg:p-0 z-50 w-full lg:bg-primary bg-white lg:sticky lg:top-24 transition-all duration-500 `}>
                <div className=" flex justify-center items-center lg:items-start flex-col w-full">
                    <span className=' flex justify-center items-center gap-1 text-lg font-bold'><VscSettings />Filter</span>
                    <div className=" relative w-full">
                        <FormInput type='search' placeholder='Search Product' />
                        <IoIosSearch className=' absolute right-3 bottom-4 text-xl cursor-pointer' />
                    </div>
                    <div className="rounded-xl px-4 py-3 w-full select-none">
                        <span>Color</span>
                        <div className="flex items-center flex-wrap gap-2 mt-4 ml-1">
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-black'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF68" aria-label="..." />
                            </div>
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-green-600'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF54" aria-label="..." />
                            </div>
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-red-600'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF54" aria-label="..." />
                            </div>
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-blue-600'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF54" aria-label="..." />
                            </div>
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-purple-600'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF54" aria-label="..." />
                            </div>
                            <div className="">
                                <label htmlFor="radioNoLabel20" className='h-4 w-4 block opacity-80 cursor-pointer rounded-full  bg-sky-600'></label>
                                <input className=" hidden" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF54" aria-label="..." />
                            </div>
                        </div>
                    </div>
                <div className={` lg:hidden absolute -top-7 ${isOpenFilter ? 'rotate-0 hover:-translate-y-3' : '-rotate-180 hover:translate-y-2'}  bg-black  cursor-pointer rounded-full border-1 border-black transition-all duration-500 `} onClick={() => setIsOpenFilter(!isOpenFilter)}>
                    <MdOutlineKeyboardArrowUp className=' text-4xl  text-white'/>
                </div>
                </div>
                </div>
                <div className=" w-full lg:mx-24">
                    <div className=" flex justify-center lg:justify-between items-center flex-wrap mb-5  px-5 font-bold rounded-xl">
                        <span className='flex justify-center items-center'><BiSort className='text-xl' />Ordered By :</span>
                        <div className=" m-5 text-center">
                            <span className='   p-5  cursor-pointer capitalize'>cheapest</span>
                            <span className=' p-5 cursor-pointer capitalize'>Expensive</span>
                            <span className='border-b-2 rounded-sm text-purple-600 border-purple-600 p-5 cursor-pointer capitalize'>All</span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-5 flex-wrap">
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                        <ProductBox size='lg' />
                    </div>
                    <div className=" flex justify-center  items-center flex-wrap gap-10 w-full mt-10">
                        <span className=' text-sm text-center'>Showing 1–5 Of 50 Results</span>
                        <div className="">
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300'>1</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300'>2</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300'>3</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300'>NEXT</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
