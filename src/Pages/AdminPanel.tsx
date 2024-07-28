import { CgLogOff } from "react-icons/cg";
import { RiHomeSmile2Line, RiUserSmileLine } from "react-icons/ri";
import { PiUsersDuotone } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { LiaTimesCircle } from "react-icons/lia";
import PAdminLink from '../Components/Modules/PAdminLink/PAdminLink';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfosFromServer, logOutUserAction } from "../Redux/store/auth";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Modal from "../Components/Modules/Modal/Modal";
import ToastAlert from "../Components/Modules/ToastAlert/ToastAlert";
import { AppDispatch, RootState } from "../Redux/store";

export interface IUser {
    username: string
    email: string
}

export default function AdminPanel() {

    const dispatch = useDispatch<AppDispatch>()
    const userDatas = useSelector((state: RootState) => state.auth.userInfos as unknown)! as IUser | undefined;
    const [isOpenSideBar, setIsOpenSideBar] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [toastAlertText, setToastAlertText] = useState<string>('')
    const [openToastAlert, setOpenToastAlert] = useState<boolean>(false)
    const navigate = useNavigate()


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
            navigate('/', { replace: true })
        }, 1000);
    }


    useEffect(() => {
        const userLocalStorageData = localStorage.getItem("user")
        if (userLocalStorageData) {
            dispatch(getUserInfosFromServer())
        }
        if (userDatas) {
            if (userDatas?.username !== 'admin') {
                navigate("/login")
            }
        } else {
            navigate("/login")
        }
    
    }, [])


    return (
        <>
            <div className=' bg-black w-full  h-screen overflow-hidden '>
                <div className=" flex justify-center items-center h-full">
                    <div className={`fixed  ${isOpenSideBar ? 'left-0 visible' : '-left-32 md:left-0'}  top-0 bottom-0 md:relative  flex justify-between items-center flex-col gap-5 w-28 h-full p-5 z-50 bg-black transition-all duration-200 `}>
                        <div className=" flex flex-col justify-center items-center gap-5">
                        <div className="md:hidden cursor-pointer" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                            <LiaTimesCircle className=" text-2xl  text-white hover:text-red-600 transition-colors duration-200 " />
                        </div>
                        <Link to={'/'}>
                            <span className=' text-white font-bold text-3xl'>Pixio</span>
                        </Link>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-8" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                            <PAdminLink pathName='' icon={<RiHomeSmile2Line className=' text-3xl' />} text='dashboard' />
                            <PAdminLink pathName='users' icon={<PiUsersDuotone className=' text-3xl' />} text='users' />
                            <PAdminLink pathName='products' icon={<FiShoppingBag className=' text-3xl' />} text='products' />
                            <PAdminLink pathName='collections' icon={<BiCategoryAlt className=' text-3xl' />} text='collections' />
                        </div>
                        <div className=" text-white hover:text-red-600 transition-colors duration-300 cursor-pointer" onClick={openLogOutModal}>
                            <CgLogOff className=' text-3xl ' />
                        </div>
                    </div>
                    <div className=" w-full h-full ">
                        <div className="flex justify-between items-center md:px-20 px-5 w-full h-20 ">
                            <div className="md:hidden" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
                                <HiBars3BottomLeft className="  text-3xl text-white cursor-pointer" />
                            </div>
                            <div className="flex justify-center items-center text-white">
                                <FiSearch className=' text-2xl' />
                                <input type="text" placeholder='SEARCH FOR A SECTION' className=' bg-black ml-3 p-1 text-xs outline-none placeholder:text-zinc-400 placeholder:text-xs ' />
                            </div>
                            <div className=" hidden md:flex justify-center items-center gap-1 text-zinc-300">
                                <RiUserSmileLine className=' text-4xl' />
                                <div className="flex flex-col">
                                    <span className='text-sm'>{userDatas?.username}</span>
                                    <span className=' text-xs text-zinc-300'>{userDatas?.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-full md:rounded-[2.5rem] bg-zinc-900 overflow-scroll">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Modal closeModal={closeModal} confirmModal={confirmModal} isOpen={isOpenModal} text="Are you sure you want to log out?" />
            <ToastAlert isOk={true} isOpen={openToastAlert} text={toastAlertText} />
        </>
    )
}
