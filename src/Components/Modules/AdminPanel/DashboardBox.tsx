import { ReactNode } from 'react'
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'

interface IDashboardBox {
    bgColor: string
    count: string
    text: string
    icon: ReactNode
}

export default function DashboardBox({ icon, text, count, bgColor }: IDashboardBox) {
    return (
        <div className={`relative overflow-hidden flex justify-between items-start flex-col shadow-xl shadow-gray-700 w-96 h-60 p-7 rounded-3xl text-black ${bgColor}`}>
            <div className="flex justify-between items-center w-full">
                <div className="rounded-full p-5 bg-[rgba(255,255,255,0.2)]">
                    {icon}
                </div>
                <span className=' font-bold text-2xl'>{text}</span>
            </div>
            <span className='text-6xl mt-4 font-bold'>{count}</span>
            <div className=" absolute -right-16 -bottom-16">
                <SpinnerIcon color='text-white'/>
            </div>
        </div>
    )
}
