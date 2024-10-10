import { TbLoader3 } from "react-icons/tb";

interface ILoader {
  fullWithLoader: boolean
}

export default function Loader({ fullWithLoader }: ILoader) {
  return (
    fullWithLoader ? (
      <div className=' flex justify-center items-center flex-col fixed left-0 top-0 right-0 bottom-0 bg-zinc-50 bg-opacity-80 z-[999]'>
         <img src="/images/gif/loading.gif" alt="loading"/>
        <span className=' animate-pulse text-white text-xl'>Please wait</span>
      </div>
    ) : (
      <TbLoader3 className=' text-4xl text-purple-500 animate-spin' />
    )
  )
}
