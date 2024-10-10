import BreadCrumb from '../Components/Modules/BreadCrumb/BreadCrumb'
import Button from '../Components/Modules/Button/Button';
import ProductSocial from '../Components/Modules/ProductSocial/ProductSocial';
import ProductTransportation from '../Components/Modules/ProductTransportation/ProductTransportation';
import FormInput from '../Components/Modules/FormInput/FormInput';
import RelatedProducts from '../Components/Templates/RelatedProducts/RelatedProducts';
import NavBar from '../Components/Templates/NavBar/NavBar';
import Footer from '../Components/Templates/Footer/Footer';
import ProductDetailsButtons from '../Components/Modules/SwiperButtons/ProductDetailsButtons';
import Comment, { IComment } from '../Components/Templates/ProductDetails/Comment';

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

// import required modules
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProductBox } from '../Components/Modules/ProductBox/ProductBox';
import UnitPrice from '../Components/Modules/UnitPrice/UnitPrice';
import DiscountedPrice from '../Components/Modules/DiscountedPrice/DiscountedPrice';
import Tag from '../Components/Modules/Tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCollectionFromServer } from '../Redux/store/collections';
import { localStorageData } from '../Redux/store/auth';
import { AppDispatch, RootState } from '../Redux/store';
import Alert from '../Components/Modules/Alert/Alert';
import toastAlert from '../utils/toastAlert';
import ToastAlert from '../Components/Modules/ToastAlert/ToastAlert';

export interface SingleCollection {
    title: string | number
}

export default function ProductDetail() {

    const { productID } = useParams()

    const [productDetails, setProductDetails] = useState<IProductBox>()
    const [allComments, setAllComments] = useState([])
    const [isOpenToastAlert, setIsOpenToastAlert] = useState(false)
    const [isOkToastAlert, setIsOkToastAlert] = useState(false)
    const [toastAlertText, setToastAlertText] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const singleCollection = useSelector((state: RootState) => state.collections.singleCollection as unknown) as SingleCollection | undefined

    const [counter, setCounter] = useState<number>(1)

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const incrementHandler = () => {
        setCounter(prevCount => prevCount + 1)
    }

    const decrementHandler = () => {
        if (counter > 1) {
            setCounter(prevCount => prevCount - 1)
        } else {
            return false
        }
    }

    useEffect(() => {

        window.scrollTo(0, 0)

        fetch(`https://myecommerceapi.pythonanywhere.com/store/products/${productID}`)
            .then(res => res.json())
            .then(productData => {
                setProductDetails(productData)
            })

        if (productDetails) {
            dispatch(getSingleCollectionFromServer(productDetails.collection))
        }

        const getComments = async () => {
            const res = await fetch(`https://myecommerceapi.pythonanywhere.com/store/products/${productID}/reviews/`)
            if (res.status === 200) {
                const data = await res.json()
                setAllComments(data)
            }
        }
        getComments()
    }, [])

    const addProductToCart = () => {
        const cartData = localStorage.getItem("cart");
        const cart = cartData ? JSON.parse(cartData) : [];

        if (cart.length) {
            const isInCart = cart.some((item: { id: string }) => item.id === productID);

            if (isInCart) {
                cart.forEach((item) => {
                    if (item.id === productID) {
                        item.counter = item.counter + counter;
                    }
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                toastAlert.fire({
                    text: "Product added to cart successfully.",
                    icon: "success"
                })
            } else {
                const cartItem = {
                    id: productID,
                    name: productDetails?.title,
                    price: productDetails?.unit_price,
                    images: productDetails?.images,
                    counter,
                };

                cart.push(cartItem);

                localStorage.setItem("cart", JSON.stringify(cart));
                toastAlert.fire({
                    text: "Product added to cart successfully.",
                    icon: "success"
                })
            }
        } else {
            const cartItem = {
                id: productID,
                name: productDetails?.title,
                price: productDetails?.unit_price,
                images: productDetails?.images,
                counter,
            };

            cart.push(cartItem);

            localStorage.setItem("cart", JSON.stringify(cart));
            toastAlert.fire({
                text: "Product added to cart successfully.",
                icon: "success"
            })
        }
    };

    const addComment = async () => {
        const comment = {
            name,
            description,
        }

        const res = await fetch(`https://myecommerceapi.pythonanywhere.com/store/products/${productID}/reviews/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorageData}`
            },
            body: JSON.stringify(comment)
        })
        console.log(res);

        if (res.status === 201) {
            setIsOpenToastAlert(true)
            setIsOkToastAlert(true)
            setToastAlertText("Your comment has been registered successfully.")
            setTimeout(() => {
                setIsOpenToastAlert(false)
            }, 3000);
        } else if (res.status === 401) {
            setIsOpenToastAlert(true)
            setIsOkToastAlert(false)
            setToastAlertText("Please login first")
            setTimeout(() => {
                setIsOpenToastAlert(false)
            }, 3000);
        }
    }

    return (
        <>
            <NavBar />
            <div className=" container mx-auto px-5">
                <div className="flex justify-start items-start mt-5">
                    <BreadCrumb path='product details' />
                </div>
                <div className="relative flex justify-center items-center my-5">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },

                        }}
                        spaceBetween={20}
                        speed={1000}
                        autoplay={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            productDetails &&
                            productDetails?.images?.length > 1 &&
                            <ProductDetailsButtons />
                        }
                        {
                            productDetails &&
                                productDetails?.images?.length > 1 ? (
                                productDetails?.images.map((imageData: { image: string }) => (
                                    <SwiperSlide>
                                        <div className=" h-[25rem] md:h-[30rem]">
                                            <img src={imageData.image} alt="" className='rounded-2xl' />
                                        </div>
                                    </SwiperSlide>
                                ))

                            ) : (
                                productDetails?.images.slice(0, 1).map((imageData: { image: string }) => (
                                    <SwiperSlide>
                                        <div className=" h-[25rem] md:h-[30rem]">
                                            <img src={imageData.image} alt="" className='h-[25rem] md:h-[30rem]  rounded-2xl' />
                                        </div>
                                    </SwiperSlide>
                                ))
                            )
                        }
                    </Swiper>
                    <div className="absolute -right-48 flex gap-10 rotate-90 z-30">
                        <ProductSocial text='Instagram' />
                        <ProductSocial text='Facebook' />
                        <ProductSocial text='TWITTER' />
                    </div>
                </div>
                <div className="container mx-auto flex flex-col gap-4 my-16">
                    <div className=" flex justify-between items-center flex-wrap gap-5">
                        <div className=" flex justify-center items-start flex-col gap-2">
                            <span className=' bg-black text-white px-4 py-2 text-xs rounded-md uppercase'>SALE 20% OFF</span>
                            <span className=' capitalize text-black text-4xl'>{productDetails?.title}</span>
                        </div>
                        <div className="flex justify-center items-center gap-10">
                            <ProductTransportation title='FREE' text='Shipping' icon={<LuShip className=' text-5xl' />} />
                            <ProductTransportation title='Easy Returns' text='30 Days' icon={<TbTruckDelivery className=' text-5xl' />} />
                        </div>
                    </div>
                    <div className="">
                        <span className=' text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className="flex justify-start items-center gap-10 flex-wrap">
                        <div className="flex justify-center items-start flex-col gap-3">
                            <span className=' text-sm'>Price</span>
                            <div className="">
                                <UnitPrice price={productDetails?.unit_price} />
                                <DiscountedPrice price={productDetails?.price_with_tax} />
                            </div>
                        </div>
                        <div className="flex justify-center items-start flex-col gap-3">
                            <span className=' text-sm select-none'>Quantity</span>
                            <div className="flex justify-center items-center gap-3 text-[2.5rem]">
                                <BsFillPlusCircleFill className=' cursor-pointer' onClick={incrementHandler} />
                                <input
                                    type='number'
                                    min={1}
                                    value={counter}
                                    placeholder='0'
                                    className='placeholder:text-black rounded-full w-10  h-10 text-sm text-center outline-none border-1 border-black  bg-primary '
                                    onChange={(e) => setCounter(+e.target.value)}
                                />
                                <FaCircleMinus className=' cursor-pointer' onClick={decrementHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center" onClick={addProductToCart}>
                        <Button text='add to card' padding='px-5 py-2' bgColor='black' />
                    </div>
                    <div className=" flex justify-between items-center border-t-1 border-zinc-300 pt-5 mt-5">
                        <Tag keyTag='Category' valueTag={singleCollection?.title} />
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
                            <span className='  text-center text-lg  relative after:absolute after:w-full after:rounded-xl after:h-[2px] after:left-0 after:-bottom-[0.3rem] after:bg-black'>Reviews ({allComments.length})</span>
                        </div>
                        <div className=" flex justify-start items-start flex-col gap-3 w-full mt-5">
                            <span className=' font-bold text-start text-lg'>Comments</span>
                            <span className=' text-sm text-zinc-500'>There are many variations of passages of Lorem Ipsum available.</span>
                        </div>
                        {
                            allComments.length > 0 ? (
                                allComments.map((comment: IComment) => (
                                    <Comment key={comment.id} {...comment} />
                                ))
                            ) : (
                                <Alert text={"No comments were found for this product"} />
                            )
                        }
                    </div>
                    <div className=" mt-5">
                        <div className=" flex justify-start items-start flex-col gap-3 w-full mb-5">
                            <span className=' text-start text-lg'>Good Comments</span>
                            <span className=' text-sm text-zinc-500'>There are many variations of passages of Lorem Ipsum available.</span>
                        </div>
                        <div className=" flex flex-col gap-5 w-full">
                            <div className=" flex justify-center items-center flex-wrap md:flex-nowrap gap-5">
                                <FormInput placeholder='Author' type='text' onChange={(e) => setName(e.target.value)} />
                                <FormInput placeholder='Email' type='email' />
                            </div>
                            <FormInput placeholder='Type Comment Here' type='textarea' onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className=" flex justify-start items-center my-4" onClick={addComment}>
                            <Button text='Submit Now' padding='px-6 py-3' bgColor='black' />
                        </div>
                    </div>
                    <div className="mt-20">
                        <RelatedProducts />
                    </div>
                </div>
            </div>
            <Footer />
            <ToastAlert isOk={isOkToastAlert} isOpen={isOpenToastAlert} text={toastAlertText} />
        </>
    )
}
