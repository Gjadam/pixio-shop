import BreadCrumb from '../BreadCrumb/BreadCrumb'

interface ICategoryHeader {
    path: string
}

export default function CategoryHeader({path}: ICategoryHeader) {
    return (
        <div className=" flex justify-center items-center w-full h-64 relative after:absolute after:bg-[url('/images/jpg/categoryHeader-bg.jpg')] after:w-full after:h-full after:z-0  after:bg-no-repeat after:bg-cover after:bg-center text-white after:brightness-50 ">
            <div className="flex justify-center items-center flex-col gap-4 z-50">
                <h1 className=' text-5xl font-bold z-50 capitalize'>{path}</h1>
                <BreadCrumb path={path} />
            </div>
        </div>
    )
}
