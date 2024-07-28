
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AOSInit() {

    useEffect(() => {
        Aos.init({
            duration: 900,
            delay: 400
        })
        Aos.refresh()
    })

    return null
}
