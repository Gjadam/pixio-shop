import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import BreadCrumb from '../../Modules/BreadCrumb/BreadCrumb'
import FormInput from '../../Modules/FormInput/FormInput'
import Button from '../../Modules/Button/Button'
import { Link } from 'react-router-dom'

interface IRegistration {
    type: string
}

export default function Registration({ type }: IRegistration) {
    return (
        <div className=" flex justify-between items-center  overflow-hidden h-screen ">
            <div className="flex justify-start items-start flex-col gap-3 bg-secondary pt-28 pl-20 w-1/2">
                <SectionHeader text='My Account' />
                <BreadCrumb />
                <div className=" w-full relative after:absolute after:-z-10 after:w-96 after:h-[35rem] after:rounded-t-full  after:bg-white after:left-0 after:bottom-0 z-0">
                    <div className=" flex justify-center items-center w-full z-10">
                        <img src="/images/png/login.png" alt="login" className=' z-20 ' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-1/2">
                <div className="flex justify-center items-center flex-col gap-8 border-1 border-black p-24 text-center rounded-3xl w-[34rem] ">
                    <div className=" flex justify-center items-center flex-col gap-3">
                        <span className=' font-bold text-3xl'>{type === 'login' ? 'Welcome Back' : 'Registration Now'}</span>
                        <span className=' text-zinc-600'>welcome please {type === 'login' ? 'login' : 'registration'} to your account</span>
                    </div>
                    <div className=" w-full flex justify-center items-center flex-col gap-5">
                        {
                            type === 'SignUp' &&
                            <FormInput label='Username' type='text' placeholder='Username' />
                        }
                        <FormInput label='Email Address' type='email' placeholder='Enter Email' />
                        <FormInput label='Password' type='password' placeholder='Password' />
                    </div>
                    <div className="flex justify-evenly items-center w-full">
                        <Button padding='px-8 py-3' text={type === 'login' ? 'login' : 'Register'} bgColor='black' />
                        <Link to={type === 'login' ? '/sign-up' : '/login'}>
                            <Button padding='px-8 py-3' text={type === 'login' ? 'Register' : 'login'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
