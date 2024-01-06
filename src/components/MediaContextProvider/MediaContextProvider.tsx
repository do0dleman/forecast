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
        setMedia(style.getPropertyValue('--screen').slice(0).replace(/\s/g, ''))
    }
    useEffect(HandleResize, [])

    return (
        <mediaContext.Provider value={{ media, setMedia }}>
            {children}
        </mediaContext.Provider>
    )
}