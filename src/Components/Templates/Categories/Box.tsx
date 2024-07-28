import SpinnerIcon from "../../Modules/SpinnerIcon/SpinnerIcon";

export default function Box({title}) {
    return (
        <div className=" relative flex justify-center  items-center h-44 w-44 bg-white hover:bg-primary rounded-full overflow-hidden transition-colors ">
            <span className=' font-bold hover:text-purple-600 transition-colors cursor-pointer capitalize'>{title}</span>
            <div className=" absolute -top-20">
                <SpinnerIcon color="text-rose-100"/>
            </div>
        </div>
    )
}
