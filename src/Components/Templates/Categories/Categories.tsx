
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import SpinnerIcon from '../../Modules/SpinnerIcon/SpinnerIcon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollectionsFromServer } from '../../../Redux/store/collections';
import { AppDispatch, RootState } from '../../../Redux/store';
import { ICollections } from '../AdminPanel/AdminCollections';
import Box from './Box';

export default function Categories() {
    const dispatch = useDispatch<AppDispatch>()
    const allCollections = useSelector((state: RootState) => state.collections.allCollections as unknown) as ICollections[]

    useEffect(() => {
        dispatch(getAllCollectionsFromServer())
    }, [])


    return (
        <div data-aos='fade-up' className=' flex justify-center items-center md:flex-row flex-col w-full md:h-80 my-28'>
            <div className=" relative bg-rose-100 md:w-3/5 w-full   h-full py-20 md:p-20   after:absolute after:bg-[url('/images/svg/category.svg')] after:bg-no-repeat after:top-0 after:w-full after:h-full ">
                <Swiper
                    effect={'coverflow'}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={true}
                    speed={1000}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        allCollections?.map((collection: ICollections) => (
                            <SwiperSlide key={collection.id}>
                                <Box title={collection.title} />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
            <div className=" flex justify-between items-center gap-3 bg-companies-bg md:w-2/5 w-full h-full p-16 ">
                <div className=" text-white">
                    <p className='text-4xl max-w-96 font-semibold leading-snug'>Featured Categories</p>
                    <p className='max-w-64 leading-loose'>Discover the most trending products in Pixio.</p>
                </div>
                <div className=" hidden md:block ">
                    <SpinnerIcon color='text-white' />
                </div>
            </div>
        </div>
    )
}
