import React, { useState } from 'react'
import Button from '../Button/Button'
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon'

interface IModal {
    confirmModal: () => void
    closeModal: () => void
    isOpen: boolean
    text: string
}

export default function Modal({ isOpen, closeModal, text, confirmModal }: IModal) {


    return (
        <div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-zinc-950 bg-opacity-75 z-50 transition-all duration-300`}>
            <div className=" relative overflow-hidden flex justify-evenly items-center flex-col gap-5 bg-white w-[30rem] min-h-56 p-10 rounded-xl text-center shadow-2xl shadow-black">
                <h1 className=' text-2xl font-bold capitalize'>{text}</h1>
                <div className=" flex justify-center items-center flex-wrap gap-5 w-full">
                    <div className=" " onClick={confirmModal}>
                        <Button padding='  px-8 py-2' text='Yes' bgColor='black' />
                    </div>
                    <div className=" " onClick={closeModal}>
                        <Button padding=' px-8 py-2' text='No' bgColor='white' />
                    </div>
                </div>
                <div className=" absolute -left-16 -top-16">
                    <SpinnerIcon color='text-black' />
                </div>
                <div className=" absolute -right-16 -bottom-16">
                    <SpinnerIcon color='text-black' />
                </div>
            </div>
        </div>
    )
}
