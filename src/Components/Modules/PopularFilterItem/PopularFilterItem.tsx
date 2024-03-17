import React from 'react'

interface IPopularFilterItem {
    text: string
    isSelected?: boolean
}

export default function PopularFilterItem({ text, isSelected }: IPopularFilterItem) {
    return (
        <>
            {
                isSelected ? (
                    <span className='w-16 text-sm text-center rounded-full text-white bg-black  p-1  cursor-pointer capitalize'>{text}</span>
                ) : (
                    <span className='w-16 text-sm text-center p-1 mx-1 cursor-pointer capitalize'>{text}</span>
                )
            }
        </>
    )
}
