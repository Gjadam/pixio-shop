import { Link } from "react-router-dom"

interface INavBarLinkMobile {
    text: string
    path: string
}

export default function NavBarLinkMobile({ text, path }: INavBarLinkMobile) {
    return (
        <Link to={path}>
            <div className="border-b-1 p-3 hover:bg-zinc-900 hover:text-primary transition-colors duration-300 cursor-pointer overflow-hidden  ">
                <span className=' font-bold '>{text}</span>
            </div>
        </Link>
    )
}
