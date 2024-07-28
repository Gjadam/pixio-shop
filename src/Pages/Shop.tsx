import CategoryHeader from '../Components/Modules/CategoryHeader/CategoryHeader';
import { VscSettings } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import ProductBox, { IProductBox } from '../Components/Modules/ProductBox/ProductBox';
import Footer from '../Components/Templates/Footer/Footer';
import FormInput from '../Components/Modules/FormInput/FormInput';
import { useEffect, useState } from 'react';
import NavBar from '../Components/Templates/NavBar/NavBar';
import TopUp from '../Components/Modules/TopUp/TopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromServer } from '../Redux/store/products';
import { getAllCollectionsFromServer } from '../Redux/store/collections';
import { AppDispatch, RootState } from '../Redux/store';
import { ICollections } from '../Components/Templates/AdminPanel/AdminCollections';

export default function Shop() {
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(true)
    const dispatch = useDispatch<AppDispatch>()
    const allProducts = useSelector((state: RootState) => state.products)
    const allCollections = useSelector((state: RootState) => state.collections.allCollections as unknown) as ICollections[]
    const [orderedProducts, setOrderedProducts] = useState<IProductBox[]>()
    const [status, setStatus] = useState<string>('all')

    useEffect(() => {
        switch (status) {
            case 'all': {
                setOrderedProducts(allProducts.allProductsData)
                break
            }
            case 'expensive': {
                const cheapProducts = allProducts.allProductsData.slice().sort((s1: {unit_price: number}, s2: {unit_price: number}) => s2.unit_price - s1.unit_price)
                setOrderedProducts(cheapProducts)
                break
            }
            case 'cheapest': {
                const cheapProducts = allProducts.allProductsData.slice().sort((s1: {unit_price: number}, s2: {unit_price: number}) => s2.unit_price - s1.unit_price).reverse()
                setOrderedProducts(cheapProducts)
                break
            }
            default: {
                setOrderedProducts(allProducts.allProductsData)
                break
            }
        }
    }, [status])

    useEffect(() => {
        dispatch(getAllCollectionsFromServer())
    }, [])

    useEffect(() => {
        dispatch(getAllProductsFromServer())
    }, [])




    return (
        <>
            <NavBar />
            <TopUp />
            <CategoryHeader path='shop' />
            <div className=" relative flex justify-between items-start px-28 py-10">
                <div className={` lg:flex  gap-8 lg:w-96 fixed ${isOpenFilter ? '-bottom-[20.7rem]' : '-bottom-0'}  right-0 left-0 border-t-1 lg:border-0  border-black rounded-t-3xl p-5 lg:p-0 z-50 w-full lg:bg-primary bg-white lg:sticky lg:top-24 transition-all duration-500 `}>
                    <div className=" flex justify-center items-center lg:items-start flex-col gap-10 w-full">
                        <div className="flex items-start flex-col w-full ">
                            <span className=' flex justify-center items-center gap-1 text font-bold'><VscSettings />Filter</span>
                            <div className=" relative w-full">
                                <FormInput type='search' placeholder='Search Product' />
                                <IoIosSearch className=' absolute right-3 bottom-4 text-xl cursor-pointer' />
                            </div>
                        </div>
                        <div className="flex items-start flex-col w-full ">
                            <span className=' flex justify-center items-center gap-1 text font-bold'><BiSolidCategoryAlt />Categories</span>
                            <div className=" flex flex-col gap-3 mt-5 w-full h-32 overflow-y-auto">
                                { 
                                    allCollections?.map((collection: ICollections) => (
                                        <div className=" flex justify-between items-center  cursor-pointer hover:text-purple-400 transition-colors ">
                                            <span className=' capitalize text-sm'>{collection.title}</span>
                                            <span>({collection.products_count})</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={` lg:hidden absolute -top-7 ${isOpenFilter ? 'rotate-0 hover:-translate-y-3' : '-rotate-180 hover:translate-y-2'}  bg-black  cursor-pointer rounded-full border-1 border-black transition-all duration-500 `} onClick={() => setIsOpenFilter(!isOpenFilter)}>
                            <MdOutlineKeyboardArrowUp className=' text-4xl  text-white' />
                        </div>
                    </div>
                </div>
                <div className=" w-full lg:mx-24">
                    <div className=" flex justify-center lg:justify-between items-center flex-wrap mb-5  px-5 font-bold rounded-xl">
                        <span className='flex justify-center items-center'><BiSort className='text-xl' />Ordered By :</span>
                        <div className=" m-5 text-center">
                            <span className={` ${status === 'cheapest' && 'border-b-2 rounded-sm text-purple-600 border-purple-600'}   p-5  cursor-pointer capitalize transition-all duration-200 border-b-2  border-primary`} onClick={() => setStatus('cheapest')}>Cheapest</span>
                            <span className={` ${status === 'expensive' && 'border-b-2 rounded-sm text-purple-600 border-purple-600'} p-5 cursor-pointer capitalize transition-all duration-200 border-b-2  border-primary`} onClick={() => setStatus('expensive')}>Expensive</span>
                            <span className={` ${status === 'all' && 'border-b-2 rounded-sm text-purple-600 border-purple-600'} p-5 cursor-pointer capitalize transition-all duration-200 border-b-2  border-primary`} onClick={() => setStatus('all')}>All</span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-start gap-5 flex-wrap">
                        {
                            orderedProducts?.map((product: IProductBox) => (
                                <ProductBox size='lg' key={product.id} {...product} />
                            ))
                        }

                    </div>
                    <div className=" flex justify-center lg:justify-between  items-center flex-wrap gap-10 w-full mt-10">
                        <span className=' text-sm text-center'>Showing 1–5 Of 50 Results</span>
                        <div className="">
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300' >PREV</span>
                            <span className=' mx-1 border-1 border-black rounded-full px-3 py-1 lg:px-6 lg:py-2 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300' >NEXT</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
