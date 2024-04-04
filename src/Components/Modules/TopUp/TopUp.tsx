import { useEffect, useState } from "react";
import { TiArrowUp } from "react-icons/ti";

export default function TopUp() {

    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;
            const scrollPercentage = (scrollTop / maxScroll) * 100;

            setScrollWidth(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    const scrollToUpHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='flex justify-center items-center fixed -right-16 md:-right-5 bottom-1/2 z-50 rotate-90 group cursor-pointer' onClick={scrollToUpHandler}>
            <TiArrowUp className=" text-xl -rotate-90 mt-0.5 translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className=" font-bold text-xs mr-4 transition-all duration-300">Scroll to up</span>
            <div className="bg-zinc-300 h-[1px]  w-24 rounded-full   ">
                <div style={{ width: `${scrollWidth}%` }} className="h-full  relative after:absolute bg-black after:bg-black after:right-0 after:-top-[4px] after:p-[0.30rem] after:rounded-full"></div>
            </div>
        </div>
    )
}
