import Button from '../../Modules/Button/Button'

export default function SecondAdvertise() {
    return (
        <div className=' mx-6 relative flex justify-center items-center flex-col gap-9 text-center  h-[75vh] bg-[url("/images/png/secondAd-bg.png")] bg-cover bg-no-repeat bg-center'>
            <div className="animate-moveImg hidden 2xl:block">
                <img src="/images/png/ad.png" alt="image" className=' rounded-tr-[3rem]' />
            </div>
            <span className=' text-4xl md:text-6xl font-bold max-w-[60rem] leading-tight'>Upgrade Your Style With Our Top-Notch Collection.</span>
            <Button text='All Collections' padding='px-6 py-3' bgColor='black' />
            <div className="hidden 2xl:block">
                <div className=" absolute top-16 left-20 animate-moveImg">
                    <img src="/images/png/product1.png" alt="image" className=' h-52 rounded-tl-[6rem]' />
                </div>
                <div className=" absolute bottom-16 left-80 animate-moveImg">
                    <img src="/images/png/product2.png" alt="image" className=' h-52 rounded-tl-[6rem] rounded-tr-[6rem]' />
                </div>
                <div className=" absolute top-16 right-20 animate-moveImg">
                    <img src="/images/png/product3.png" alt="image" className=' h-52 rounded-br-[6rem]' />
                </div>
                <div className=" absolute bottom-16 right-80 animate-moveImg">
                    <img src="/images/png/product1.png" alt="image" className=' h-52 rounded-bl-[6rem] rounded-br-[6rem]' />
                </div>
            </div>
        </div>
    )
}
