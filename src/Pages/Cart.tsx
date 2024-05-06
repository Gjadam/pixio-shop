import React from 'react'
import NavBar from '../Components/Templates/NavBar/NavBar'
import Footer from '../Components/Templates/Footer/Footer'
import CategoryHeader from '../Components/Modules/CategoryHeader/CategoryHeader'
import Button from '../Components/Modules/Button/Button'
import ProductTransportation from '../Components/Modules/ProductTransportation/ProductTransportation'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { LuShip } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'
import { LiaTimesCircle } from "react-icons/lia";
import QuantityCounter from '../Components/Modules/QuantityCounter/QuantityCounter'

export default function Cart() {
    return (
        <>
            <NavBar />
            <CategoryHeader path='cart' />
            <div className="container mx-auto flex justify-center items-start flex-wrap  gap-5 my-20">
                <div className=" w-[50rem] overflow-x-scroll">
                    <div className="relative overflow-x-scroll px-2 ">
                        <table className="w-full">
                            <thead className="  text-zinc-700">
                                <tr>
                                    <th scope="col" className="text-start px-6 py-4">
                                        Product
                                    </th>
                                    <th scope="col" className="text-start px-6 py-4">
                                        Price
                                    </th>
                                    <th scope="col" className="text-start px-6 py-4">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" border-y-1 border-stone-300 hover:shadow-lg shadow-secondary transition-shadow duration-500 ">
                                    <th scope="row" className="flex justify-start items-center gap-3 text-start px-6 py-4">
                                        <div className=" overflow-hidden min-w-24 max-w-24 min-h-24 max-h-24 rounded-3xl">
                                            <img src="/images/png/product1.png" alt="product" className=' w-full' />
                                        </div>
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className=" px-6 py-4 text-start font-bold text-zinc-600">
                                        $60
                                    </td>
                                    <td className="  py-4 text-start">
                                        <QuantityCounter />
                                    </td>
                                    <td className=" px-6   cursor-pointer">
                                        <div className=" flex justify-center items-center rounded-full text-black hover:text-rose-600 transition-colors duration-300">
                                            <LiaTimesCircle className=' text-4xl '/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" flex flex-col">
                    <span className=' font-bold text-lg mb-2'>Cart Total</span>
                    <div className="flex gap-8 flex-col p-7 border-1 border-black w-96 rounded-2xl hover:shadow-xl transition-all duration-500">
                        <div className=" text-center w-full">
                            <Button padding='p-1 w-full' text='Bank Offer 5% Cashback' bgColor='' />
                        </div>
                        <div className=" flex justify-between items-center  w-full">
                            <div className=" border-1 rounded-2xl border-black  p-3">
                                <ProductTransportation title='FREE' text='Shipping' icon={<LuShip className=' text-5xl' />} />
                            </div>
                            <div className="  border-1 rounded-2xl border-black p-3">
                                <ProductTransportation title='FREE' text='Shipping' icon={<TbTruckDelivery className=' text-5xl' />} />
                            </div>
                        </div>
                        <div>
                            <div className=" w-full flex justify-center items-center gap-1 border-t-1 py-5">
                                <IoCheckmarkDoneCircleOutline className=' text-green-600 text-2xl' />
                                <span className=' text-sm'>You will save ₹504 on this order</span>
                            </div>
                            <div className=" w-full flex justify-between items-center font-bold">
                                <span>Total</span>
                                <span className=' text-2xl'>$125.75</span>
                            </div>
                            <div className=" text-center mt-5">
                                <Button padding=' w-full p-2' text='PLACE ORDER' bgColor='black' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
