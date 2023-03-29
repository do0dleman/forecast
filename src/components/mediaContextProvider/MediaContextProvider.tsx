import { useEffect, useState } from 'react'
import mediaContext from '../../contexts/MediaContexts'

interface MediaContextProviderProps {
    children: React.ReactNode
}
export default function MediaContextProvider(props: MediaContextProviderProps) {

    const { children } = props

    const [media, setMedia] = useState('')
    window.addEventListener('resize', HandleResize)

    function HandleResize() {
        const style = getComputedStyle(document.body)
        // console.log(style.getPropertyValue('--screen').slice(0))
        setMedia(style.getPropertyValue('--screen').slice(0))
    }
    useEffect(HandleResize, [])

    return (
        <mediaContext.Provider value={{ media, setMedia }}>
            {children}
        </mediaContext.Provider>
    )
}