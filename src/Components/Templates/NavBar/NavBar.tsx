import React from 'react'
import NavBarLink from '../../Modules/NavBarLink/NavBarLink'
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiHeart2Line } from "react-icons/ri";
export default function NavBar() {
  return (
    <div className='  py-4  border-b-1'>
      <div className=" container m-auto flex justify-between items-center">

      <div className=" flex justify-center items-center gap-28">
        <div className="">
          <a href="">
            <img src="/images/svg/logo.svg" className=' w-36 ' alt="logo" />
          </a>
        </div>
        <div className=" flex gap-14">
          <NavBarLink text={'Home'} />
          <NavBarLink text={'Shop'} />
          <NavBarLink text={'Blog'} />
          <NavBarLink text={'Portfolio'} />
          <NavBarLink text={'Pages'} />
        </div>
      </div>
      <div className=" flex justify-center items-center gap-12">
        <div className="rounded-full bg-amber-400 py-2  text-white ">
          <a href="" className='py-2 px-2.5'>
            <span>Login</span>
          </a>
          <a href="" className=' bg-rose-600 w-full p-2.5 rounded-full'>
            <span>Register</span>
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 text-xl">
        <FiSearch className=' cursor-pointer' />
        <RiHeart2Line className=' cursor-pointer' />
        <div className=" relative cursor-pointer">
        <MdOutlineShoppingCart className=' ' />
        <span className=' absolute -right-4 bottom-3 text-white bg-rose-600 rounded-full px-1.5 py-0.5 text-xs'>5</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
