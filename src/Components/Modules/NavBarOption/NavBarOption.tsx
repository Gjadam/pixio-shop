import React, { ReactNode } from 'react'

interface INavBarOption {
    icon: ReactNode
    title: string
    onClickHandler?: () => void
}

export default function NavBarOption({title, icon, onClickHandler}: INavBarOption) {
    return (
        <div className={`flex justify-start items-center gap-2 border-b-1 px-6 py-2 ${title === 'Logout' && 'hover:bg-rose-600 border-b-0' } hover:bg-purple-600 hover:text-white  transition-colors duration-300 cursor-pointer group/setting`} onClick={onClickHandler}>
            {icon}
            <div className="flex justify-center items-start flex-col">
                <span className=' text-sm font-bold'>{title}</span>
            </div>
        </div>
    )
}
