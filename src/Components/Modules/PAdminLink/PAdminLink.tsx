import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom';

interface IPAdminLink {
    icon: ReactNode
    text: string
    pathName: string
}

export default function PAdminLink({ icon, text, pathName }: IPAdminLink) {
    return (
        <NavLink to={pathName} className={(link) => link.isActive ? 'text-primary' : ' text-zinc-300'} >
            <div className="flex justify-center items-center flex-col gap-1  text-center group cursor-pointer ">
                <div className="  group-hover:text-secondary transition-colors duration-300 ">
                    {icon}
                </div>
                <span className=' text-xs font-bold uppercase'>{text}</span>
            </div>
        </NavLink>
    )
}
