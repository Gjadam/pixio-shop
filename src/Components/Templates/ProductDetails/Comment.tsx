
export interface IComment {
    id: number,
    name: string,
    description: string
}
export default function Comment({name, description}: IComment) {
    return (
        <div  className=" flex justify-start items-start gap-3 w-full my-5 border-b-1 border-zinc-300 py-4">
            <img src="/images/jpg/user.jpg" alt="image" className='w-24 rounded-full' />
            <div className="">
                <span className=' text-lg'>{name}</span>
                <p className=' text-sm text-zinc-500 leading-7'>{description}</p>
            </div>
        </div>
    )
}
