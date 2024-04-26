import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Templates/NavBar/NavBar'
import FormInput from '../Components/Modules/FormInput/FormInput'
import Button from '../Components/Modules/Button/Button'

interface IContactUs {
    name: string
    address: string
}

export default function () {

    const [selectCountry, setSelectCountry] = useState('usa')
    const [branchInfo, setBranchInfo] = useState<[IContactUs]>()



    useEffect(() => {
        switch (selectCountry) {
            case 'usa': {
                return setBranchInfo([{
                    name: 'United States',
                    address: '3553 Brandywine Street Northwest, Washington AR 20008'
                }])
                break
            }
            case 'rus': {
                return setBranchInfo([{
                    name: 'Russia',
                    address: 'Ryabikova B-R, bld. 20/А, appt. 151'
                }])
                break
            }
            case 'afr': {
                return setBranchInfo([{
                    name: 'South Africa',
                    address: '552 Church St'
                }])
                break
            }
        }
    }, [selectCountry])



    return (
        <>
            <NavBar />
            <div className="flex justify-between items-start flex-col-reverse xl:flex-row  container mx-auto w-full xl:px-20 py-16">
                <div className="flex justify-center items-center xl:items-start flex-col  px-8 w-full">
                    <div className="flex flex-col gap-10 mb-10">
                        {
                            branchInfo?.map(info => (
                                <div>
                                    <h1 className=' mb-3 text-5xl font-bold'>{info.name}</h1>
                                    <span className=' text-2xl'>Address: {info.address}</span>
                                </div>
                            ))
                        }
                        <div className="flex justify-between w-96 items-start">
                            <div className=" flex flex-col">
                                <span className='text-2xl  font-bold'>Call Us</span>
                                <span>+01-123-456-7890</span>
                                <span>+01-123-456-7890</span>
                            </div>
                            <div className="  flex flex-col">
                                <span className='text-2xl font-bold'>Email Us</span>
                                <span>help@Pixio.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 bg-zinc-900 text-white p-12 w-[30rem] rounded-3xl">
                        <FormInput placeholder='' type='text' label='Your Name' />
                        <FormInput placeholder='' type='email' label='Email Address' />
                        <FormInput placeholder='' type='number' label='Phone Number' />
                        <FormInput placeholder='' type='textarea' label='Message' />
                        <Button padding=' p-3 w-full text-center' text='Submit' bgColor='white' />
                    </div>
                </div>
                <div className=" relative w-full">
                    <img src="/images/png/map.png" alt="map" className=' xl:scale-150 xl:translate-x-36  xl:mt-16 select-none z-50' />
                    <label htmlFor="usa" className={`p-1 rounded-full ${selectCountry === 'usa' && 'animate-ping bg-red-600 p-1.5'} bg-black  absolute left-14 top-14 md:left-20 md:top-24 lg:left-20 lg:top-24 cursor-pointer`}>
                        <input type="radio" value='usa' id='usa' className=' hidden ' onClick={(e) => setSelectCountry(e.target.value)} />
                    </label>
                    <label htmlFor="rus" className={`p-1 rounded-full ${selectCountry === 'rus' && 'animate-ping bg-red-600 p-1.5'}  bg-black absolute right-44 top-10 xl:right-0 cursor-pointer`}>
                        <input type="radio" value='rus' id='rus' className=' hidden ' onClick={(e) => setSelectCountry(e.target.value)} />
                    </label>
                    <label htmlFor="africa" className={`p-1 rounded-full ${selectCountry === 'afr' && 'animate-ping bg-red-600 p-1.5'}  bg-black absolute right-72 bottom-32 md:right-96 md:bottom-48 lg:right-[35rem] lg:bottom-64 xl:right-36 xl:bottom-32 cursor-pointer`}>
                        <input type="radio" value='afr' id='africa' className=' hidden ' onClick={(e) => setSelectCountry(e.target.value)} />
                    </label>
                </div>
                <div className="hidden md:block text-center absolute xl:-right-40 right-5 -bottom-32 -z-10 ">
                    <span className=' text-[12rem] text-white drop-shadow-lg font-bold '>Contact US</span>
                </div>
            </div>
        </>
    )
}
