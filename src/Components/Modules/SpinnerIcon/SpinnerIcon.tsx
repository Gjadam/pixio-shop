import { IoIosFlower } from 'react-icons/io'

interface ISpinnerIcon {
    color: string
}

export default function SpinnerIcon({color}: ISpinnerIcon) {
    return (
        <>
            <IoIosFlower className={` ${color} text-9xl animate-spin-slow`} />
        </>
    )
}
