
interface IUnitPrice {
    price: number | undefined
}

export default function UnitPrice({ price }: IUnitPrice) {
    return (
        <span className=' text-2xl'>${String(price).slice(0, 5)}</span>
    )
}
