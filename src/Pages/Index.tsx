import Header from '../Components/Templates/Header/Header'
import Categories from '../Components/Templates/Categories/Categories'
import Advertise from '../Components/Templates/Advertise/Advertise'
import InfiniteLogos from '../Components/Templates/InfiniteLogos/InfiniteLogos'
import Popular from '../Components/Templates/Popular/Popular'
import BannerAdvertise from '../Components/Templates/BannerAdvertise/BannerAdvertise'
import UsersViewed from '../Components/Templates/UsersViewed/UsersViewed'
import FeaturedOffer from '../Components/Templates/FeaturedOffer/FeaturedOffer'
import Sponsored from '../Components/Templates/Sponsored/Sponsored'
import SecondAdvertise from '../Components/Templates/SecondAdvertise/SecondAdvertise'
import NavBar from '../Components/Templates/NavBar/NavBar'
import TopUp from '../Components/Modules/TopUp/TopUp'
import Footer from '../Components/Templates/Footer/Footer'
import Companies from '../Components/Modules/Companies/Companies'

export default function Index(){
  return (
    <>
    <NavBar/>
    <TopUp/>
    <Header />
    <Categories />
    <Advertise />
    <InfiniteLogos />
    <Companies />
    <Popular />
    <BannerAdvertise />
    <UsersViewed />
    <FeaturedOffer />
    <Sponsored />
    <SecondAdvertise />
    <Footer />
    </>
  )
}
