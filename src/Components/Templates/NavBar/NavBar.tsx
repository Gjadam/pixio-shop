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
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";
import NavBarLinkMobile from '../../Modules/NavBarLinkMobile/NavBarLinkMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfosFromServer, logOutUserAction } from '../../../Redux/store/auth';
import { Link, useNavigate } from 'react-router-dom';
import NavBarOption from '../../Modules/NavBarOption/NavBarOption';
import { CgLogOff } from 'react-icons/cg';
import Modal from '../../Modules/Modal/Modal';
import ToastAlert from '../../Modules/ToastAlert/ToastAlert';
import { getAllCollectionsFromServer } from '../../../Redux/store/collections';
import { AppDispatch, RootState } from '../../../Redux/store';


export interface IUser {
  id: number
  username: string
  email: string
}

export default function NavBar() {

  const dispatch = useDispatch<AppDispatch>()
  const userDatas = useSelector((state: RootState) => state.auth.userInfos as unknown) as IUser | undefined
  const allCollections = useSelector((state: RootState) => state.collections.allCollections)
  const navigate = useNavigate()
  const [openStickyNavbar, setOpenStickyNavbar] = useState<boolean>(false)
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [toastAlertText, setToastAlertText] = useState<string>('')
  const [openToastAlert, setOpenToastAlert] = useState<boolean>(false)



  useEffect(() => {
    const userLocalStorageData = localStorage.getItem("user")
    if (userLocalStorageData) {
      dispatch(getUserInfosFromServer())
    }
  }, [])

  useEffect(() => {
    dispatch(getAllCollectionsFromServer())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setOpenStickyNavbar(true)
      } else {
        setOpenStickyNavbar(false)
      }
    })
  }, [])

  const openLogOutModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const confirmModal = () => {
    dispatch(logOutUserAction())
    setIsOpenModal(false);
    setToastAlertText('Logout successfully')
    setOpenToastAlert(!openToastAlert)
    setTimeout(() => {
      setOpenToastAlert(false)
    }, 3000);
    navigate('/', { replace: true })
  }

  return (
    <>
      <div className={` py-4  z-[40] border-b-1 transition-all duration-300 ${openStickyNavbar && 'bg-white sticky top-0'} `}>
        <div className=" px-5 flex justify-between items-center">
          <div className=" flex justify-center items-center gap-28">
            <div className="">
              <Link to="/">
                <img src="/images/svg/logo.svg" className=' lg:w-36 w-24 ' alt="logo" />
              </Link>
            </div>
            <div className=" hidden lg:flex gap-14">
              <NavBarLink text={'Shop'} path='/shop' />
              <NavBarLink text={'Contact Us'} path='/contact-us' />
              <NavBarLink text={'Collections'} path='' dropDownDatas={allCollections} />
            </div>
          </div>
          <div className=" flex justify-center items-center gap-12">
            <div className=" hidden lg:flex justify-center items-center gap-5 text-xl">
              <FiSearch className=' cursor-pointer' />
              <RiHeart2Line className=' cursor-pointer' />
              <Link to='/cart'>
                <div className=" relative cursor-pointer">
                  <MdOutlineShoppingCart className=' ' />
                  <span className=' absolute -right-4 bottom-3 text-white bg-purple-600 rounded-full px-1.5 py-0.5 text-xs'>5</span>
                </div>
              </Link>
            </div>
            <div className=" flex justify-center items-center gap-5 ">
              {
                userDatas?.id ? (
                  <div className="relative group">
                    <PiUserCircleThin className=' text-4xl cursor-pointer ' />
                    <div className={` z-10  absolute top-full mt-4 right-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible   ${openStickyNavbar && 'bg-white'} transition-all duration-300 z-50 overflow-hidden text-zinc-800 bg-primary border-b border-b-purple-600 rounded-b-lg shadow-lg`}>
                      <div className="flex justify-start items-center gap-2 border-b-1 px-5 py-3">
                        <BiSolidUserCircle className=' text-3xl ' />
                        <div className="flex justify-center items-start flex-col">
                          <span className='text-sm font-bold'>{userDatas?.username}</span>
                          <span className='text-xs'>{userDatas?.email}</span>
                        </div>
                      </div>
                      {
                        userDatas?.username === 'admin' ? (
                          <Link to='/p-admin'>
                            <NavBarOption title='Admin panel' icon={<LuLayoutPanelLeft className='text-2xl' />} />
                          </Link>
                        ) : (
                          <NavBarOption title='User panel' icon={<LuLayoutPanelLeft className='text-2x' />} />
                        )
                      }
                      <NavBarOption title='Setting' icon={<IoIosSettings className=' text-2xl group-hover/setting:animate-spin' />} />
                      <NavBarOption title='Logout' icon={<CgLogOff className='text-2xl' />} onClickHandler={openLogOutModal} />
                    </div>
                  </div>
                ) : (
                  <div className=" ">
                    <Link to="/login" className=' hover:text-purple-600 transition-colors hover:font-bold'>
                      <span>Login</span>
                    </Link>
                    <span>/</span>
                    <Link to="/sign-up" className=' hover:text-purple-600 transition-colors hover:font-bold'>
                      <span>Register</span>
                    </Link>
                  </div>
                )
              }
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
            <Link to="/">
              <img src="/images/svg/logo.svg" className='min-w-36 ' alt="logo" />
            </Link>
            <LiaTimesCircle className=' hover:text-red-600 transition-colors duration-200 text-4xl cursor-pointer' onClick={() => setIsOpenSideBar(!isOpenSideBar)} />
          </div>
          <div className="">
            <NavBarLinkMobile text='Cart' path='/cart' />
            <NavBarLinkMobile text='Shop' path='/shop' />
            <NavBarLinkMobile text='Contact Us' path='/contact-us' />
            <NavBarLinkMobile text='Collections' path='' />
            <div className=" flex justify-start items-start gap-3 py-5 pl-3 text-2xl">
              <FaInstagram className=' cursor-pointer hover:text-pink-700 transition-colors duration-200' />
              <FaXTwitter className=' cursor-pointer hover:text-zinc-700 transition-colors duration-200' />
              <FaTelegram className=' cursor-pointer hover:text-blue-700 transition-colors duration-200' />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenModal} confirmModal={confirmModal} closeModal={closeModal} text='Are you sure you want to log out?' />
      <ToastAlert text={toastAlertText} isOk={true} isOpen={openToastAlert} />
    </>
  )
}
