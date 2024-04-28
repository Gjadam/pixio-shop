import { Link } from "react-router-dom"

interface INavBarLink {
    text: string
    path: string
}

export default function NavBarLink({text, path}: INavBarLink) {
    return (
        <>
            <Link to={path}>
                <span className=' flex justify-center items-center tracking-wider hover:text-purple-600 font-semibold transition-colors duration-300 ease-in-out relative after:absolute after:-right-4 after:w-3 after:h-3 after:bg-[url("/images/svg/star.svg")] after:bg-no-repeat'>{text}</span>
            </Link>
        </>
    )
}
