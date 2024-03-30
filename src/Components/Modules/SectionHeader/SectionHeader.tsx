
interface ISectionHeader {
    text: string
}

export default function SectionHeader({text}: ISectionHeader) {
    return (
        <>
            <h1 className=' text-4xl font-bold'>{text}</h1>
        </>
    )
}
