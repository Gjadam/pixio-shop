import Button from '../Button/Button'

interface IFeaturedOfferBox {
    imgUrl: string
}

export default function FeaturedOfferBox({imgUrl}:IFeaturedOfferBox ) {

    return (
        <div className={` relative overflow-hidden rounded-3xl  w-[38rem] h-[25rem]`}>
            <img src={imgUrl} alt="" />
            <div className=" absolute right-5 top-20 flex justify-center items-start flex-col gap-2 font-bold">
                <span className=' bg-white py-1 px-4 uppercase'>50% off</span>
                <span className=' text-3xl tracking-widest uppercase'>Summber</span>
                <span className=' text-8xl  uppercase'>Sale</span>
                <Button text='collect now' padding='px-5 py-3'  />
            </div>
        </div>
    )
}
