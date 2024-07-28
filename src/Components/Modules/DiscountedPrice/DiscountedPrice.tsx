
interface IDiscountedPrice {
    price: number | undefined
}
export default function DiscountedPrice({ price }: IDiscountedPrice) {
    return (
        <span className=' text-lg text-zinc-400 ml-1 line-through'>${String(price).slice(0, 5)}</span>
    )
}
