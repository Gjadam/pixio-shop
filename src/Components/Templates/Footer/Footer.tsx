import FormInput from '../../Modules/FormInput/FormInput'
import FooterLinks from '../../Modules/FooterLinks/FooterLinks'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Footer() {
  return (
    <div className=' border-t-1 border-black w-full mt-28 pt-20 px-20'>
      <div className="container mx-auto flex md:justify-around justify-start items-start gap-14 flex-wrap">
        <div className=" flex justify-center items-start flex-col gap-5">
          <img src="/images/svg/logo.svg" alt="logo" />
          <div className=" flex justify-start items-start flex-col gap-2">
            <span>Address: 451 Wall Street, UK, London</span>
            <span>E-mail: example@info.com</span>
            <span>Phone :  (064) 332-1233</span>
          </div>
          <div className=" flex justify-center items-start flex-col gap-2 w-full">
            <span>Subscribe To Our Newsletter</span>
            <div className="relative w-full">
              <FormInput placeholder='Enter your Email Address' type='email' />
              <div className="absolute right-4 bottom-[0.6rem] bg-primary cursor-pointer hover:animate-toLeftFromRight">
                <IoIosArrowRoundForward className='text-3xl' />
              </div>
            </div>
          </div>
        </div>
        <FooterLinks title='Our Stores' >
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>New York</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>London SF</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Edinburgh</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Los Angeles</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Chicago</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Las Vegas</span>
            </a>
          </li>
        </FooterLinks>
        <FooterLinks title='Useful Links' >
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Privacy Policy</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Returns</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Terms & Conditions</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Latest News</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Our Sitemap</span>
            </a>
          </li>
        </FooterLinks>
        <FooterLinks title='Footer Menu' >
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Instagram Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>New Collection</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Woman Dress</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className=' text-zinc-600 capitalize hover:text-purple-600 transition-colors duration-300'>Latest News</span>
            </a>
          </li>
        </FooterLinks>
      </div>
      <div className=" flex justify-between items-center gap-3 font-bold flex-wrap mt-16 py-5 border-t-1 border-zinc-300">
        <span className=" text-sm ">© 2024 Pixio shop | Created By<a href="https://github.com/Gjadam" className=" mx-1 hover:text-purple-500 transition-colors">TheGjad</a>&amp;<a href="https://github.com/alirahmnicode" className=" mx-1 hover:text-purple-500 transition-colors">AliRahmani.py</a>| All Rights Reserved.</span>
        <span className=' flex justify-center items-center flex-wrap gap-3 cursor-pointer'>We Accepted: <img src="/images/png/footer-img.png" className='w-44' alt="footer" /> </span>
      </div>
    </div>
  )
}
