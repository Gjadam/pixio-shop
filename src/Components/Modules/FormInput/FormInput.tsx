import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosCloudUpload } from "react-icons/io";
interface IFormInput {
    label?: string
    type: string
    placeholder: string
    onChange?: (e) => void;
}

export default function FormInput({ label, type, placeholder, onChange }: IFormInput) {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        type === 'password' ? (
            <label htmlFor="password" className='relative flex justify-center items-start flex-col gap-1 w-full'>
                <span>{label}</span>
                <input type={isShowPassword ? 'text' : 'password'} id='password' onChange={onChange} placeholder={placeholder} className=' w-full p-3 rounded-xl placeholder:text-sm  border-1 border-black text-black outline-none  placeholder:text-zinc-600 focus:bg-primary transition-colors duration-500 ' />
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
                <span>{label}</span>
                <textarea className='w-full h-48 outline-none p-3 border-1 border-black placeholder:text-zinc-600 rounded-xl placeholder:text-sm  text-black focus:bg-primary transition-colors duration-500' placeholder={placeholder} onChange={(e) => onChange && onChange(e)}></textarea>
            </label>
        ) : type === 'file' ? (            
            <label htmlFor="file" className='flex justify-center items-start flex-col gap-1 w-full'>
                <span>{label}</span>
                <span className='flex justify-center items-center gap-3 w-full p-3 bg-white hover:bg-primary transition-colors duration-500 rounded-xl font-bold text-zinc-600 hover:text-black text-center cursor-pointer'><IoIosCloudUpload className=' text-xl'/>Upload image</span>
                <input type={type} id='file' min={0} placeholder={placeholder} className='hidden' onChange={onChange} multiple />
            </label>         
        ) : (
            <label htmlFor="email" className='flex justify-center items-start flex-col gap-1 w-full'>
                <span>{label}</span>
                <input type={type} id='email' min={0} placeholder={placeholder} onChange={onChange} className=' w-full p-3 rounded-xl border-1 border-black text-black outline-none placeholder:text-sm  placeholder:text-zinc-600 focus:bg-primary transition-colors duration-500 ' />
            </label>
        )
    )
}
