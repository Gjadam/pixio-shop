
interface IProductSocial {
    text: string
}

export default function ProductSocial({text}: IProductSocial) {
    return (
        <a href="">
            <span className='uppercase font-bold text-md hover:text-purple-600 transition-colors duration-200 inline-block'>{text}</span>
        </a>
    )
}
