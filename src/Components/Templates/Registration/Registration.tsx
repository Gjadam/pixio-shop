import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import BreadCrumb from '../../Modules/BreadCrumb/BreadCrumb'
import FormInput from '../../Modules/FormInput/FormInput'
import Button from '../../Modules/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { useEffect, useState } from 'react'
import ToastAlert from '../../Modules/ToastAlert/ToastAlert'

interface IRegistration {
    type: string
}

export default function Registration({ type }: IRegistration) {

    const navigate = useNavigate()
    const [openToastAlert, setOpenToastAlert] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [toastAlertText, setToastAlertText] = useState<string>('')
    const [isToastAlertOK, setIsToastAlertOK] = useState<boolean>(false)

    const firstNameOnChange = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameOnChange = (e) => {
        setLastName(e.target.value)
    }
    const userNameOnChange = (e) => {
        setUsername(e.target.value)
    }
    const emailOnChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = () => {
        if (username.trim() && password.trim()) {

            const newUserInfoForGetToken = {
                username,
                password,
            }

            fetch(`https://webstorepr.pythonanywhere.com/auth/jwt/create/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUserInfoForGetToken),
            })
                .then(res => {
                    if (res.ok) {
                        setToastAlertText(`You have signed in successfully`)
                        setIsToastAlertOK(true)
                        setOpenToastAlert(!openToastAlert)
                        setTimeout(() => {
                            navigate('/')
                        }, 1500);
                        return res.json()
                    } else if (res.status === 401) {
                        setToastAlertText('Invalid username or password !')
                        setIsToastAlertOK(false)
                        setOpenToastAlert(!openToastAlert)
                        setTimeout(() => {
                            setOpenToastAlert(false)
                        }, 3000);
                    }
                })
                .then(data => {
                    localStorage.setItem('user', JSON.stringify(data.access))
                })
        } else {
            setToastAlertText('Please fill up all fields !')
            setIsToastAlertOK(false)
            setOpenToastAlert(!openToastAlert)
            setTimeout(() => {
                setOpenToastAlert(false)
            }, 3000);
        }

    }


    const registerNewUser = () => {
        if (username.trim() && password.trim() && email.trim() && firstName.trim() && lastName.trim()) {
            const newUserInfo = {
                username,
                password,
                email,
                first_name: firstName,
                last_name: lastName,
            }

            fetch(`https://webstorepr.pythonanywhere.com/auth/users/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUserInfo),

            })
                .then(res => {
                    if (res.ok) {
                        fetch(`https://webstorepr.pythonanywhere.com/auth/jwt/create/`, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username,
                                password
                            }),
                        })
                            .then(res => {
                                if (res.ok) {
                                    setToastAlertText(`You have signed in successfully`)
                                    setIsToastAlertOK(true)
                                    setOpenToastAlert(!openToastAlert)
                                    setTimeout(() => {
                                        navigate('/')
                                    }, 1500);
                                    return res.json()
                                } else if (res.status === 401) {
                                    setToastAlertText('Invalid username or password !')
                                    setIsToastAlertOK(false)
                                    setOpenToastAlert(!openToastAlert)
                                    setTimeout(() => {
                                        setOpenToastAlert(false)
                                    }, 3000);
                                }
                            })
                            .then(data => {
                                localStorage.setItem('user', JSON.stringify(data.access))
                            })
                    } else {
                        setToastAlertText('This username has already been registered.')
                        setIsToastAlertOK(false)
                        setOpenToastAlert(!openToastAlert)
                        setTimeout(() => {
                            setOpenToastAlert(false)
                        }, 3000);

                    }
                })
        } else {
            setToastAlertText('Please fill up all fields !')
            setIsToastAlertOK(false)
            setOpenToastAlert(!openToastAlert)
            setTimeout(() => {
                setOpenToastAlert(false)
            }, 3000);
        }


    }

    return (
        <>
            <NavBar />
            <div className=" flex justify-between items-center  ">
                <div className=" hidden lg:flex justify-start items-start flex-col gap-3 bg-secondary pt-5 pl-20 w-1/2">
                    <SectionHeader text='My Account' />
                    <BreadCrumb path={type} />
                    <div className=" w-full relative after:absolute after:-z-10 after:w-96 after:h-[35rem] after:rounded-t-full  after:bg-white after:left-0 after:bottom-0 z-0">
                        <div className=" flex justify-center items-center w-full z-10">
                            <img src="/images/png/login.png" alt="login" className=' z-20 ' />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center px-5 lg:w-1/2 w-full ">
                    <div className="flex justify-center items-center flex-col gap-8 border-1 border-black py-10 lg:px-24 px-10 text-center rounded-3xl w-[34rem] ">
                        <div className=" flex justify-center items-center flex-col  gap-3">
                            <span className=' font-bold text-3xl'>{type === 'login' ? 'Welcome Back' : 'Registration Now'}</span>
                            <span className=' text-zinc-600'>welcome please {type === 'login' ? 'login' : 'registration'} to your account</span>
                        </div>
                        <div className=" w-full flex justify-center items-center flex-col gap-5">
                            {
                                type === 'SignUp' &&
                                <>
                                    <FormInput label='First name' type='text' placeholder='First name' onChange={firstNameOnChange} />
                                    <FormInput label='Last name' type='text' placeholder='Last name' onChange={lastNameOnChange} />
                                    <FormInput label='Email Address' type='email' placeholder='Enter Email' onChange={emailOnChange} />
                                </>
                            }
                            <FormInput label='Username' type='text' placeholder='Username' onChange={userNameOnChange} />
                            <FormInput label='Password' type='password' placeholder='Password' onChange={passwordOnChange} />
                        </div>
                        <div className="flex justify-evenly items-center flex-wrap gap-3 w-full">
                            {
                                type === 'SignUp' ? (
                                    <div onClick={registerNewUser}>
                                        <Button padding='px-8 py-3' text='Register' bgColor='black' />
                                    </div>
                                ) : (
                                    <div onClick={loginHandler}>
                                        <Button padding='px-8 py-3' text='Login' bgColor='black' />
                                    </div>
                                )
                            }
                            <Link to={type === 'login' ? '/sign-up' : '/login'}>
                                <Button padding='px-8 py-3' text={type === 'login' ? 'Register' : 'login'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastAlert text={toastAlertText} isOk={isToastAlertOK} isOpen={openToastAlert} />
            <Footer />
        </>
    )
}
