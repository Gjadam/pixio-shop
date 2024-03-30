import NavBar from '../Components/Templates/NavBar/NavBar';
import CategoryHeader from '../Components/Modules/CategoryHeader/CategoryHeader';
import { VscSettings } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import ProductBox from '../Components/Modules/ProductBox/ProductBox';
import Footer from '../Components/Templates/Footer/Footer';
export default function Shop() {
    return (
        <>
            <NavBar />
            <CategoryHeader />
            <div className=" flex justify-between items-start px-28 py-10">
                <div className=" flex justify-center items-start flex-col gap-8 w-96 sticky top-24 ">
                    <span className=' flex justify-center items-center gap-1 text-lg'><VscSettings />Filter</span>
                    <div className=" relative w-full">
                        <input type="text" placeholder='Search Product' className=' w-full px-4 py-3 bg-primary rounded-xl placeholder:text-sm placeholder:text-black outline-none border-1 border-black ' />
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
                </div>
                <div className=" w-full mx-24">
                    <div className=" flex justify-between items-center mb-5  px-5 rounded-xl">
                        <span className='flex justify-center items-center'><BiSort className='text-xl' />Ordered By :</span>
                        <div className=" p-5">
                            <span className='   p-5  cursor-pointer capitalize'>cheapest</span>
                            <span className=' p-5 cursor-pointer capitalize'>Expensive</span>
                            <span className=' border-b-2 rounded-sm text-purple-600 border-purple-600 p-5 cursor-pointer capitalize'>All products</span>
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
                    <div className=" flex justify-between items-center w-full mt-10">
                        <span className='texsm'>Showing 1–5 Of 50 Results</span>
                        <div className="">
                            <span className=' mx-1 border-1 border-black rounded-full px-6 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300 py-2'>1</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-6 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300 py-2'>2</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-6 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300 py-2'>3</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-6 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300 py-2'>NEXT</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
