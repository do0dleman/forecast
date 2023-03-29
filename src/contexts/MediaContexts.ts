import { createContext } from "react";

interface IMediaContext {
    media: string
    setMedia: React.Dispatch<string>
}
const mediaContext = createContext<IMediaContext>({
    media: '',
    setMedia: () => { }
})

export default mediaContext