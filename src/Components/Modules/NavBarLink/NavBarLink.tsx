import { Link } from "react-router-dom"
import { MdKeyboardArrowDown } from "react-icons/md";

interface INavBarLink {
    text: string
    path: string
    dropDownDatas?: [] | null
}

export default function NavBarLink({ text, path, dropDownDatas }: INavBarLink) {

    return (
        <div className="relative group">
            <Link to={path}>
                <span className={`flex justify-center items-center tracking-wider hover:text-purple-600 font-semibold transition-colors duration-300 ease-in-out  ${!dropDownDatas && 'relative after:absolute after:-right-4 after:w-3 after:h-3 after:bg-[url("/images/svg/star.svg")] after:bg-no-repeat'} `}>
                    {text}
                    {
                        dropDownDatas &&
                        <MdKeyboardArrowDown className=" ml-0.5 text-xl text-zinc-500 -rotate-180 group-hover:rotate-0 transition-all" />
                    }
                </span>
            </Link>
            {
                dropDownDatas &&
                <div className={`absolute left-0 top-full invisible  group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden z-50 pt-7 w-60`}>
                    <div className='overflow-hidden p-5 flex justify-start items-start flex-col gap-3  rounded-b-lg  border-b-1 border-purple-600  bg-white'>
                        {
                            dropDownDatas.map((data: { id: number, title: string }) => (
                                <div className="border-b-1 w-full pb-3 last:border-b-0">
                                    <span className=" hover:text-purple-600 transition-colors cursor-pointer" key={data.id} >{data.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}
