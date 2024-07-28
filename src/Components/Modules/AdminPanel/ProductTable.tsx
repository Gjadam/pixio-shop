import { IProductBox } from "../ProductBox/ProductBox"
import { MdDelete } from "react-icons/md";
import Loader from "../Loader/Loader";

export interface IProductTable extends IProductBox {
    openDeleteProductModal: (productId: number) => void
}


export default function ProductTable({ id, title, unit_price, images, price_with_tax, openDeleteProductModal }: IProductTable) {

    return (
        <tr className=" border-b border-primary odd:hover:bg-primary even:hover:bg-secondary hover:text-black transition-colors duration-200">
            <td className="px-6 py-4 flex justify-center">
                {
                    images ? (
                        images?.map((imageData: {image: string}) => (
                            <div className=" min-w-24 max-w-28 h-32 overflow-hidden mx-1">
                                <img src={`${imageData.image}`} alt="product" className=' rounded-3xl h-full w-full' />
                            </div>
                        ))
                    ) : (
                        <Loader fullWithLoader={false}/>
                    )
                }
            </td>
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                {title}
            </th>
            <td className="px-6 py-4">
                ${String(unit_price).slice(0, 5)}
            </td>
            <td className="px-6 py-4">
                ${String(price_with_tax).slice(0, 5)}
            </td>
            <td className="pl-12 py-4 " onClick={() => openDeleteProductModal(id)}>
                <MdDelete className=" text-2xl hover:text-rose-600 transition-colors cursor-pointer" />
            </td>
        </tr>
    )
}
