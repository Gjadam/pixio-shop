import React from 'react'
import NavBar from '../Components/Templates/NavBar/NavBar'

import Footer from '../Components/Templates/Footer/Footer'
import Registration from '../Components/Templates/Registration/Registration'

export default function Login() {
    return (
        <>
            <NavBar />
            <Registration type={'login'} />
            <Footer />
        </>
    )
}
