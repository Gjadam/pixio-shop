import { PiUserCircleFill } from "react-icons/pi";

import { MdDelete } from "react-icons/md";
import { IoBan } from "react-icons/io5";
import SpinnerIcon from '../SpinnerIcon/SpinnerIcon';
import { IAdminUsers } from "../../Templates/AdminPanel/AdminUsers";


export default function UsersBox({ id, username, email }: IAdminUsers) {


    return (
        <>
            <div className=" flex justify-between flex-col relative overflow-hidden w-80 h-72 shadow-lg hover:shadow-gray-600 border-1 border-primary text-white rounded-3xl p-5 transition-all duration-200">
                <div className=" flex justify-between border-b-1 border-primary pb-3  font-bold items-center  ">
                    <PiUserCircleFill className='text-5xl text-primary' />
                    <span>{username.length > 20 ? (`${username.slice(0, 20)}...`) : (username)}</span>
                </div>
                <div className="flex flex-col gap-5 my-3">
                    <div className="flex justify-between items-center text-sm">
                        <span>Id:</span>
                        <span>{id}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span>Email:</span>
                        <span>{email.length > 20 ? (`${email.slice(0, 20)}...`) : (email)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span>Role:</span>
                        <span>{username === 'admin' ? 'ADMIN' : 'USER'}</span>
                    </div>
                </div>
                <div className="border-t-1 border-primary pt-5">
                    <div className=" flex justify-start items-center gap-5 text-xl">
                        <div className="">
                            <MdDelete className=' cursor-pointer text-red-600' />
                        </div>
                        <IoBan className=' cursor-pointer text-zinc-600' />
                    </div>
                    <div className="absolute -right-16 -bottom-16">
                        <SpinnerIcon color='text-primary' />
                    </div>
                </div>
            </div>
        </>
    )
}
