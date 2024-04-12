
interface IProductTable {
    name: string
    price: number
    inventory: number
    collection: string
}


export default function ProductTable({name, price, inventory, collection}: IProductTable) {
  return (
    <tr className=" border-b border-primary odd:hover:bg-primary even:hover:bg-secondary hover:text-black transition-colors duration-200">
    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
        {name}
    </th>
    <td className="px-6 py-4">
        {price}
    </td>
    <td className="px-6 py-4 ">
        {inventory}
    </td>
    <td className="px-6 py-4 ">
        {collection}
    </td>
</tr>
  )
}
