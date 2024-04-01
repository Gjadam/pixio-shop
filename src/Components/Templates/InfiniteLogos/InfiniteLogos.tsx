import Slider from 'react-infinite-logo-slider'

export default function InfiniteLogos() {
    return (
        <div className=" my-48  -rotate-2 border-t-2 border-b-2 border-black py-5 relative before:absolute before:w-10 before:h-full before:z-50 before:left-0 before:bg-infinite-logos-gradient-left before:-translate-y-5 after:absolute after:w-10 after:h-full after:z-50 after:right-0 after:bg-infinite-logos-gradient-right after:-translate-y-20  ">
            <Slider
                width="400px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>BLAZER</span>
                        </div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>JACKET</span>
                        </div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>JEANS</span>
                        </div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>SHIRTS</span>
                        </div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>SHORTS</span>
                        </div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className=" flex justify-center items-center">
                        <div className=" relative">
                        <img src="/images/svg/star.svg" alt=""  className=' w-12 absolute bottom-2 -left-28' />
                        <span className=' text-6xl uppercase'>T-SHIRT</span>
                        </div>
                    </div>
                </Slider.Slide>


            </Slider>
        </div>
    )
}
