import { CgLogOff } from "react-icons/cg";
import { RiHomeSmile2Line, RiUserSmileLine } from "react-icons/ri";
import { PiUsersDuotone } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BsMenuButtonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { LiaComments } from "react-icons/lia";
import PAdminLink from '../Components/Modules/PAdminLink/PAdminLink';
import { Link, Outlet } from 'react-router-dom';


export default function AdminPanel() {
    return (
        <div className=' bg-black w-full  h-screen overflow-hidden '>
            <div className=" flex justify-center items-center h-full">
                <div className="hidden md:flex justify-between items-center flex-col w-28 h-full p-5   ">
                    <Link to={'/'}>
                        <span className=' text-white font-bold text-3xl'>Pixio</span>
                    </Link>
                    <div className="flex justify-center items-center flex-col gap-8">
                        <PAdminLink pathName='' icon={<RiHomeSmile2Line className=' text-3xl' />} text='dashboard' />
                        <PAdminLink pathName='users'  icon={<PiUsersDuotone className=' text-3xl' />} text='users' />
                        <PAdminLink pathName='products' icon={<FiShoppingBag className=' text-3xl' />} text='products' />
                        <PAdminLink pathName='comments' icon={<LiaComments className=' text-3xl' />} text='comments' />
                        <PAdminLink pathName='categories' icon={<BiCategoryAlt className=' text-3xl' />} text='categories' />
                        <PAdminLink pathName='menus' icon={<BsMenuButtonFill className=' text-3xl' />} text='menus' />
                        <PAdminLink pathName='contacts' icon={<MdConnectWithoutContact className=' text-3xl' />} text='contact us' />
                    </div>
                    <div className=" text-white hover:text-red-600 transition-colors duration-300 cursor-pointer">
                        <CgLogOff className=' text-3xl ' />
                    </div>
                </div>
                <div className=" w-full h-full ">
                    <div className="flex justify-between items-center px-20 w-full h-20 ">
                        <div className="flex justify-center items-center text-white">
                            <FiSearch className=' text-2xl' />
                            <input type="text" placeholder='SEARCH FOR A SECTION' className=' bg-black ml-3 p-1 text-xs outline-none placeholder:text-zinc-400 placeholder:text-xs ' />
                        </div>
                        <div className="flex justify-center items-center gap-1 text-zinc-300">
                            <RiUserSmileLine className=' text-4xl' />
                            <div className="flex flex-col">
                                <span className='text-sm'>username</span>
                                <span className=' text-xs text-zinc-300'>example@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-full rounded-[2.5rem] bg-zinc-900 overflow-scroll">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
