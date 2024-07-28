import Button from '../../Modules/Button/Button'

export default function BannerAdvertise() {
  return (
    <div  className=' flex justify-center items-center md:flex-row flex-col w-full md:h-[30rem] h-[50rem] my-28'>
        <div className="relative overflow-hidden bg-[url('/images/png/banner1.png')] bg-center  bg-cover h-full w-full md:w-1/2">
            <div className=" absolute  top-36 right-0 lg:right-28">
                <div className=" flex justify-center items-center flex-col z-10 font-bold relative after:absolute after:bg-[url('/images/svg/shape.svg')] after:bg-no-repeat after:-left-18 after:w-[25rem] after:h-[25rem] after:-z-10">
                <span className=' text-sm uppercase'>sale up to 50% off</span>
                <span className=' text-4xl uppercase tracking-widest'>Summer</span>
                <span className=' text-8xl uppercase'>2024</span>
                <Button text='shop now' padding='px-8 py-3'/>
                </div>
            </div>
        </div>
        <div className=" relative overflow-hidden bg-[url('/images/png/banner2.png')] bg-center bg-cover h-full w-full md:w-1/2">
            <div className=" flex justify-center items-start flex-col gap-4 font-bold px-14 absolute top-24 left-0">
                <span className=' text-sm uppercase'>SALE UP TO 50% OFF</span>
                <span className=' text-3xl lg:text-6xl max-w-96 uppercase'>NEW SUMMER COLLECTION</span>
                <Button text='shop now' padding='px-8 py-3'/>
            </div>
        </div>
    </div>
  )
}
