import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FaCircleMinus } from 'react-icons/fa6'

export default function QuantityCounter() {

    const [counter, setCounter] = useState<number>(1)

    const incrementHandler = () => {
        setCounter(prevCount => prevCount + 1)
    }

    const decrementHandler = () => {
        if (counter > 1) { 
            setCounter(prevCount => prevCount - 1)
        } else {
            return false
        }
    }
    

    return (
        <div className="flex justify-center items-center gap-3 text-[2.5rem]">
            <BsFillPlusCircleFill className=' cursor-pointer' onClick={incrementHandler} />
            <input
                type='number'
                min={1}
                value={counter}
                placeholder='0'
                className='placeholder:text-black rounded-full w-10 pl-[14.3px] h-10 text-sm outline-none border-1 border-black  bg-primary ' 
                onChange={(e) => setCounter(+e.target.value)}
                />
            <FaCircleMinus className=' cursor-pointer' onClick={decrementHandler} />
        </div>
    )
}
