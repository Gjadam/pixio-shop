import React, { ReactNode } from 'react'
interface IProductTransportation {
    icon: ReactNode
    title: string
    text: string
}

export default function ProductTransportation({ icon, title, text }: IProductTransportation) {
    return (
        <div className="flex justify-center items-center gap-2 text-zinc-600">
            {icon}
            <div className="flex justify-center items-start flex-col ">
                <span className=''>{title}</span>
                <span className=' text-black'>{text}</span>
            </div>
        </div>
    )
}
