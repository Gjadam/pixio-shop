import React from 'react'

interface IButton {
    text: string
    padding: string
    bgColor?: boolean
}

export default function Button({text, padding, bgColor}: IButton) {
    return (
        <div className={` overflow-hidden uppercase font-bold ${bgColor && 'bg-white'} rounded-xl border-1  border-black text-black hover:bg-black hover:text-white  ${padding} cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:bg-[rgba(255,255,255,0.1)] after:border-0  after:hover:border-r-1 after:border-white  z-0 after:-z-10 after:w-0 after:h-full after:hover:w-[101%]  after:transition-all after:ease-in-out after:duration-500 transition-all duration-300`}>
            <span>{text}</span>
        </div>
    )
}
