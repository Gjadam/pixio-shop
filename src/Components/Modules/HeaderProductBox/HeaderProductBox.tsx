import Button from '../Button/Button'
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'
import SwiperButton from '../SwiperButtons/SwiperButton'
import { IProductBox } from '../ProductBox/ProductBox'
import { Link } from 'react-router-dom'

export default function HeaderProductBox({ id, title, images, unit_price }: IProductBox) {

    return (
        <div className=" flex justify-between items-center lg:flex-row flex-col-reverse gap-10 w-full px-36 bg-primary ">
            <div className=" relative flex justify-center items-center lg:items-start flex-col gap-5 mb-28">
                <span className=' capitalize font-extrabold text-center lg:text-start text-4xl lg:text-6xl  leading-none max-w-[48rem]' data-swiper-parallax="-300">{title}</span>
                <div className=" flex justify-center items-start flex-col" data-swiper-parallax="-200">
                    <span>Price</span>
                    <span className=' text-2xl lg:text-4xl font-bold'>{unit_price}$</span>
                </div>
                <div className="" data-swiper-parallax="-400">
                    <Link to={`/shop/${id}`}>
                        <Button text='view detail' padding='px-8 py-4' bgColor='black' />
                    </Link>
                </div>
            </div>
            <div className=" z-50 ">
                <div className=" w-80 h-96  lg:w-[32rem] lg:h-[43rem]  relative after:absolute after:bg-[url('/images/png/next-btn.png')] after:bg-no-repeat after:w-10 after:h-44 after:right-0 after:bottom-5 ">
                    <img src={images && images[0]?.image} className='rounded-[2.5rem]' alt="product" />
                    <div className=" absolute -left-24 bottom-28 lg:-left-52 lg:bottom-48  -rotate-90">
                        <span className=' text-white text-4xl lg:text-6xl font-outline-1 drop-shadow-lg uppercase'>Collection</span>
                    </div>
                    <div className=" z-50 absolute -left-14 -top-14" data-swiper-parallax="-400">
                        <SpinnerIcon color='text-primary' />
                    </div>
                    <SwiperButton />
                </div>
            </div>
        </div>
    )
}
