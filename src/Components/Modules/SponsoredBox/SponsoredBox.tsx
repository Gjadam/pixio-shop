import React from 'react'

export default function SponsoredBox() {
    return (
        <>
            <div className=" m-5 relative overflow-hidden w-80 rounded-2xl group">
                <img src="/images/jpg/bg-sponsored1.jpg" alt="bg-sponsored" className=' w-full  brightness-75 group-hover:scale-125 transition-transform duration-700' />
                <div className=" absolute left-[5rem] bottom-[4rem]">
                    <img src="/images/png/sponsored1.png" alt="sponsored" className=' w-32' />
                </div>
            </div>
        </>
    )
}
