import NavBar from '../Components/Templates/NavBar/NavBar'
import Registration from '../Components/Templates/Registration/Registration'
import Footer from '../Components/Templates/Footer/Footer'

export default function SignUp() {
    return (
        <>
            <NavBar />
            <Registration type={'SignUp'} />
            <Footer />
        </>
    )
}
