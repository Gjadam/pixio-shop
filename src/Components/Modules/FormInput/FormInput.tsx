import React, { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
interface IFormInput {
    label?: string
    type: string
    placeholder: string
}

export default function FormInput({ label, type, placeholder }: IFormInput) {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        type === 'password' ? (
            <label htmlFor="password" className='relative flex justify-center items-start flex-col gap-1 w-full'>
                <span>{label}</span>
                <input type={isShowPassword ? 'text' : 'password'} id='password' placeholder={placeholder} className=' w-full p-3 rounded-xl border-1 border-black outline-none  placeholder:text-zinc-600 focus:bg-primary transition-colors duration-500 ' />
                <div className=" absolute right-3 bottom-[0.8rem]">
                    {
                        isShowPassword ? (
                            <div className="" onClick={() => setIsShowPassword(!isShowPassword)}>
                                <IoIosEyeOff className=' text-2xl bg-primary cursor-pointer' />
                            </div>
                        ) : (
                            <div className="" onClick={() => setIsShowPassword(!isShowPassword)}>
                                <IoIosEye className=' text-2xl bg-primary cursor-pointer' />
                            </div>
                        )
                    }
                </div>
            </label>
        ) : type === 'textarea' ? (
            <label>
                <textarea className='w-full h-48 outline-none p-3 border-1 border-black placeholder:text-zinc-600 rounded-xl focus:bg-primary transition-colors duration-500' placeholder={placeholder} ></textarea>
            </label>
        ) : (
            <label htmlFor="email" className='flex justify-center items-start flex-col gap-1 w-full'>
                <span>{label}</span>
                <input type={type} id='email' placeholder={placeholder} className=' w-full p-3 rounded-xl border-1 border-black outline-none  placeholder:text-zinc-600 focus:bg-primary transition-colors duration-500 ' />
            </label>
        )
    )
}
