import SpinnerIcon from '../SpinnerIcon/SpinnerIcon';

interface IToastAlert {
    text: string
    isOpen: boolean
    isOk: boolean
}

export default function ToastAlert({ text, isOpen, isOk }: IToastAlert) {

    return (
        <div className={`fixed ${isOpen ? 'right-8' : '-right-[40rem]'} bottom-8 transition-all duration-200`}>
            <div className="relative overflow-hidden flex justify-center items-center flex-row-reverse bg-white py-4 px-10 rounded-2xl shadow-xl font-bold ">
                <span className='ml-2 text-black'>{text}</span>
                <div className=" absolute -left-20 z-10">
                    <SpinnerIcon color={isOk ? `text-green-700` : 'text-red-700'} />
                </div>
            </div>
        </div>
    )
}
