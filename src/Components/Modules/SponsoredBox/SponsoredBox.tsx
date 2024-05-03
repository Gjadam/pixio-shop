

interface ISponsoredBox {
    bgUrl: string;
    logoUrl: string;
    title: string;
}

export default function SponsoredBox({bgUrl, logoUrl, title}: ISponsoredBox) {
    return (
        <div className=" flex flex-col">
            <div className=" relative overflow-hidden w-80 rounded-3xl group">
                <img src={bgUrl} alt="bg-sponsored" className=' w-full  brightness-50 group-hover:scale-125 transition-transform duration-700' />
                <div className=" absolute left-[5rem] bottom-[4rem]">
                    <img src={logoUrl} alt="sponsored" className=' w-32' />
                </div>
            </div>
            <div className=" flex justify-between items-center">
            <span className=" font-bold text-lg p-2">{title}</span>
            <span className=" text-sm">Min. 30% Off</span>
            </div>
        </div>
    )
}
