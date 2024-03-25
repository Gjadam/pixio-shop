import React, { ReactNode } from 'react'

interface TFooterLinks {
    title: string
    children: ReactNode
}

export default function FooterLinks({ title, children }: TFooterLinks) {


    return (
        <ul className=' flex justify-center items-start flex-col gap-3'>
            <span className=' font-bold text-xl'>{title}</span>
            {children}
        </ul>
    )
}
