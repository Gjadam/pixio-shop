import Button from '../../Modules/Button/Button'
import AdvertiseBox from '../../Modules/AdvertiseBox/AdvertiseBox'


export default function Advertise() {
    return (
        <div className=' container mx-auto flex justify-center lg:justify-evenly items-center lg:flex-row flex-col lg:h-[33rem] my-24'>
            <div className=" relative h-full  ">
                <img src="/images/png/women.png" alt="media" className=' z-10 md:mask  h-full' />
                <div className=" absolute left-16  bottom-10">
                    <Button text={'Women collection'} padding='px-5 py-3' bgColor={'white'} />
                </div>
            </div>
            <div className=" flex justify-center lg:items-center items-start flex-col gap-6 lg:p-0 p-5  ">
                <div className=" flex justify-center items-start flex-col gap-3 pt-5">
                    <span className=' font-bold text-3xl max-w-[30rem]'>Set Your Wardrobe With Our Amazing Selection!</span>
                    <span className=' max-w-[35rem] text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</span>
                </div>
                <div className=" flex justify-center items-center lg:flex-row  flex-col gap-8 w-full">
                    <AdvertiseBox text='child fashion' image='/images/png/ad-image1.png' />
                    <AdvertiseBox text='max collection' image='/images/png/ad-image2.png' isDiscount={true} />
                </div>
            </div>
        </div>
    )
}
