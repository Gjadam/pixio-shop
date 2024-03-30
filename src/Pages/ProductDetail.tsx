import NavBar from '../Components/Templates/NavBar/NavBar'
import BreadCrumb from '../Components/Modules/BreadCrumb/BreadCrumb'
import Button from '../Components/Modules/Button/Button';
import ProductSocial from '../Components/Modules/ProductSocial/ProductSocial';
import ProductTransportation from '../Components/Modules/ProductTransportation/ProductTransportation';
import FormInput from '../Components/Modules/FormInput/FormInput';
import RelatedProducts from '../Components/Templates/RelatedProducts/RelatedProducts';
import { LuShip } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Footer from '../Components/Templates/Footer/Footer';


export default function ProductDetail() {
    return (
        <>
            <NavBar />
            <div className=" px-20">
                <div className="flex justify-start items-start mt-5">
                    <BreadCrumb />
                </div>
                <div className="relative flex justify-center items-center my-5">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        slidesPerView={3}
                        grabCursor={true}
                        spaceBetween={20}
                        speed={1000}
                        autoplay={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/png/product1.png" alt="" className='w-[30rem] rounded-2xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/png/product1.png" alt="" className='w-[30rem] rounded-2xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/png/product1.png" alt="" className='w-[30rem] rounded-2xl' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/png/product1.png" alt="" className='w-[30rem] rounded-2xl' />
                        </SwiperSlide>
                    </Swiper>
                    <div className="absolute -right-52 flex gap-10 rotate-90 z-50">
                        <ProductSocial text='Instagram' />
                        <ProductSocial text='Facebook' />
                        <ProductSocial text='TWITTER' />
                    </div>
                </div>
                <div className="container mx-auto flex flex-col gap-4 my-16">
                    <div className=" flex justify-between items-center">
                        <div className=" flex justify-center items-start flex-col gap-2">
                            <span className=' bg-black text-white px-4 py-2 text-xs rounded-md uppercase'>SALE 20% OFF</span>
                            <span className=' capitalize text-black text-4xl'>Lady Red Coat Black Jeans</span>
                        </div>
                        <div className="flex justify-center items-center gap-10">
                            <ProductTransportation title='FREE' text='Shipping' icon={<LuShip className=' text-5xl' />} />
                            <ProductTransportation title='Easy Returns' text='30 Days' icon={<TbTruckDelivery className=' text-5xl' />} />
                        </div>
                    </div>
                    <div className="">
                        <span className=' text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className="flex justify-start items-center gap-10">
                        <div className="flex justify-center items-start flex-col gap-3">
                            <span className=' text-sm'>Price</span>
                            <span className=' text-2xl'>
                                $125.75
                                <span className=' text-lg text-zinc-400 ml-1 line-through'>$132.17</span>
                            </span>
                        </div>
                        <div className="flex justify-center items-start flex-col gap-3">
                            <span className=' text-sm'>Quantity</span>
                            <div className="flex justify-center items-center gap-3 text-[2.5rem]">
                                <BsFillPlusCircleFill className=' cursor-pointer' />
                                <input type='number' min={1} placeholder='0' className=' placeholder:text-black rounded-full w-10 pl-[14.3px] h-10 text-sm outline-none border-1 border-black  bg-primary ' />
                                <FaCircleMinus className=' cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <Button text='add to card' padding='px-5 py-2' bgColor='black' />
                    </div>
                    <div className=" flex justify-between items-center border-t-1 border-zinc-300 pt-5 mt-5">
                        <div className="">
                            <span className=' font-bold '>Category:</span>
                            <span className=' ml-1 text-sm text-zinc-400'>Dresses</span>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <span className='font-bold '>Share:</span>
                            <a href="">
                                <FaLinkedinIn className=' text-sm' />
                            </a>
                            <a href="">
                                <FaInstagram className=' text-sm' />
                            </a>
                            <a href="">
                                <FaXTwitter className=' text-sm' />
                            </a>
                            <a href="">
                                <FaFacebookF className=' text-sm' />
                            </a>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center flex-col mt-20">
                        <div className=" w-full text-center border-b-1 border-zinc-300">
                            <span className='  text-center text-lg  relative after:absolute after:w-full after:rounded-xl after:h-[2px] after:left-0 after:-bottom-[0.3rem] after:bg-black'>Reviews (12)</span>
                        </div>
                        <div className=" flex justify-start items-start flex-col gap-3 w-full mt-5">
                            <span className=' font-bold text-start text-lg'>Comments</span>
                            <span className=' text-sm text-zinc-500'>There are many variations of passages of Lorem Ipsum available.</span>
                        </div>
                        <div className=" flex justify-center items-center gap-3 my-5 border-b-1 border-zinc-300 py-4">
                            <img src="/images/jpg/user.jpg" alt="image" className='w-24 rounded-full' />
                            <div className="">
                                <span className=' text-lg'>Michel Poe</span>
                                <p className=' text-sm text-zinc-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos maiores aspernatur? Minus explicabo voluptatibus voluptas iusto, in ducimus perferendis laborum maxime. Autem nulla quas eius ullam hic totam nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil tenetur magni. Asperiores, impedit, officia natus iure eum vel sapiente illo aliquam eveniet in enim, corrupti accusamus? Sint, eaque non!</p>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-3 my-5 border-b-1 border-zinc-300 py-4">
                            <img src="/images/jpg/user.jpg" alt="image" className='w-24 rounded-full' />
                            <div className="">
                                <span className=' text-lg'>Michel Poe</span>
                                <p className=' text-sm text-zinc-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos maiores aspernatur? Minus explicabo voluptatibus voluptas iusto, in ducimus perferendis laborum maxime. Autem nulla quas eius ullam hic totam nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil tenetur magni. Asperiores, impedit, officia natus iure eum vel sapiente illo aliquam eveniet in enim, corrupti accusamus? Sint, eaque non!</p>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-3 my-5 border-b-1 border-zinc-300 py-4">
                            <img src="/images/jpg/user.jpg" alt="image" className='w-24 rounded-full' />
                            <div className="">
                                <span className=' text-lg'>Michel Poe</span>
                                <p className=' text-sm text-zinc-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos maiores aspernatur? Minus explicabo voluptatibus voluptas iusto, in ducimus perferendis laborum maxime. Autem nulla quas eius ullam hic totam nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil tenetur magni. Asperiores, impedit, officia natus iure eum vel sapiente illo aliquam eveniet in enim, corrupti accusamus? Sint, eaque non!</p>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5">
                        <div className=" flex justify-start items-start flex-col gap-3 w-full">
                            <span className=' text-start text-lg'>Good Comments</span>
                            <span className=' text-sm text-zinc-500'>There are many variations of passages of Lorem Ipsum available.</span>
                        </div>
                        <div className=" flex flex-col gap-5 w-full">
                            <div className=" flex justify-center items-center gap-5">
                                <FormInput placeholder='Author' type='text' />
                                <FormInput placeholder='Email' type='email' />
                            </div>
                            <FormInput placeholder='Type Comment Here' type='textarea' />
                        </div>
                        <div className=" flex justify-start items-center my-4">
                            <Button text='Submit Now' padding='px-6 py-3' bgColor='black' />
                        </div>
                    </div>
                    <div className="mt-20">
                        <RelatedProducts />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
