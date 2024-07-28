import { LiaTimesCircle } from 'react-icons/lia'
import { ICart } from '../../../Pages/Cart'

export default function Box({name, price, counter, images}: ICart) {
    
  return (
 
        <tbody>
            <tr className=" border-y-1 border-stone-300 hover:shadow-lg shadow-secondary transition-shadow duration-500 ">
                <th scope="row" className="flex justify-start items-center gap-3 text-start px-6 py-4">
                    <div className=" overflow-hidden min-w-24 max-w-24 min-h-24 max-h-24 rounded-3xl">
                        {
                            images.slice(0,1).map((imageUrl) => (
                                <img src={imageUrl.image} alt="product" className=' w-full' />
                            ))
                        }
                    </div>
                    {name}
                </th>
                <td className=" px-6 py-4 text-center font-bold text-zinc-600">
                    ${price}
                </td>
                <td className="  py-4 text-center">
                    {counter}
                </td>
                <td className=" px-6   cursor-pointer">
                    <div className=" flex justify-center items-center rounded-full text-black hover:text-rose-600 transition-colors duration-300">
                        <LiaTimesCircle className=' text-4xl ' />
                    </div>
                </td>
            </tr>
        </tbody>

  )
}
