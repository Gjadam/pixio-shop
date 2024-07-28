
interface Alert {
    text: string
}

export default function Alert({text}: Alert) {
  return (
    <div className=" flex justify-center items-center text-center w-full p-5 my-5 bg-red-500">
        <span className=" text-white text-xl">{text}</span>
    </div>
  )
}
