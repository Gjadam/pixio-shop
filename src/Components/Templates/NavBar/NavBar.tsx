import { useEffect, useState } from 'react'
import NavBarLink from '../../Modules/NavBarLink/NavBarLink'
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiHeart2Line } from "react-icons/ri";
import { LiaTimesCircle } from "react-icons/lia";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiUserCircleThin } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import NavBarLinkMobile from '../../Modules/NavBarLinkMobile/NavBarLinkMobile';
export default function NavBar() {

  const [openStickyNavbar, setOpenStickyNavbar] = useState<boolean>(false)
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setOpenStickyNavbar(true)
      } else {
        setOpenStickyNavbar(false)
      }
    })
  }, [])


  return (
    <>
      <div className={` py-4  z-[40] border-b-1 transition-all duration-300 ${openStickyNavbar && 'bg-white sticky top-0'} `}>
        <div className=" px-5 flex justify-between items-center">
          <div className=" flex justify-center items-center gap-28">
            <div className="">
              <a href="">
                <img src="/images/svg/logo.svg" className=' lg:w-36 w-24 ' alt="logo" />
              </a>
            </div>
            <div className=" hidden lg:flex gap-14">
              <NavBarLink text={'Home'} />
              <NavBarLink text={'Shop'} />
              <NavBarLink text={'Blog'} />
              <NavBarLink text={'Portfolio'} />
              <NavBarLink text={'Pages'} />
            </div>
          </div>
          <div className=" flex justify-center items-center gap-12">
            {/* <div className=" ">
            <a href="" className=''>
            <span>Login/Register</span>
            </a>
          </div> */}
            <div className=" hidden lg:flex justify-center items-center gap-5 text-xl">
              <FiSearch className=' cursor-pointer' />
              <RiHeart2Line className=' cursor-pointer' />
              <div className=" relative cursor-pointer">
                <MdOutlineShoppingCart className=' ' />
                <span className=' absolute -right-4 bottom-3 text-white bg-purple-600 rounded-full px-1.5 py-0.5 text-xs'>5</span>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-5 ">
              <div className="relative group/dropdown">
                <PiUserCircleThin className=' text-4xl cursor-pointer' />
                <div className={`  absolute right-0 top-16 opacity-0 group-hover/dropdown:top-9 group-hover/dropdown:opacity-100 transition-all duration-500 z-50 overflow-hidden text-zinc-800 ${openStickyNavbar && 'bg-white'} bg-primary border-1 rounded-xl shadow-lg`}>
                  <div className="flex justify-start items-center gap-2 border-b-1 px-5 py-3 hover:bg-zinc-200 transition-colors duration-300 ">
                    <BiSolidUserCircle className=' text-3xl ' />
                    <div className="flex justify-center items-start flex-col">
                      <span className='text-sm font-bold'>username</span>
                      <span className='text-xs'>example@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 border-b-1 px-6 py-2  hover:bg-zinc-200  transition-colors duration-300 cursor-pointer group/setting">
                    <IoIosSettings className=' text-2xl group-hover/setting:animate-spin' />
                    <div className="flex justify-center items-start flex-col">
                      <span className=' text-sm font-bold'>User Panel</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:hidden">
                <HiBars3BottomRight className=' text-3xl cursor-pointer' onClick={() => setIsOpenSideBar(!isOpenSideBar)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={` lg:hidden fixed top-0 right-0 ${isOpenSideBar ? 'left-0' : 'left-[100rem]'}  bottom-0 z-[60] ${openStickyNavbar ? 'bg-white' : 'bg-primary'} transition-all duration-500`}>
        <div className="p-3   ">
          <div className=" flex justify-between items-center pb-5">
            <a href="">
              <img src="/images/svg/logo.svg" className='min-w-36 ' alt="logo" />
            </a>
            <LiaTimesCircle className=' hover:text-red-600 transition-colors duration-200 text-4xl cursor-pointer' onClick={() => setIsOpenSideBar(!isOpenSideBar)} />
          </div>
          <div className="">
            <NavBarLinkMobile text='Test' />
            <NavBarLinkMobile text='Test' />
            <NavBarLinkMobile text='Test' />
            <NavBarLinkMobile text='Test' />
            <NavBarLinkMobile text='Test' />
          </div>
        </div>
      </div>
    </>
  )
}
