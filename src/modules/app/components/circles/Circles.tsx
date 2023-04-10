import { useContext } from "react"
import mediaContext from "../../../../contexts/MediaContexts"
import BgCircle from "../../../../ui/bgCircle/BgCircle"

export default function Circles() {

    const { media } = useContext(mediaContext)
    const circleStyles = [
        {
            width: '5em',
            height: '5em',
            top: '12%',
            left: '-5%',
        },
        {
            width: '3em',
            height: '3em',
            bottom: '22%',
            left: '12%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            height: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            top: '6%',
            right: '5%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '6em' : '0',
            height: media === 'lg' || media === 'md'
                ? '6em' : '0',
            top: '24%',
            left: '40%',
            display: media === 'lg' || media === 'md' ?
                'block' : 'none'
        },
        {
            width: '5.3em',
            height: '5.3em',
            bottom: '34%',
            right: '20%',
            display: media === 'xs' ? 'none' : 'block'
        },
        {
            width: '4em',
            height: '4em',
            bottom: '-8%',
            right: media === 'lg' || media === 'md'
                ? '30%' : '10%',
        },
        {
            width: '3.6em',
            height: '3.6em',
            bottom: '-4%',
            left: '20%',
            display: media === 'lg' || media === 'md' ?
                'block' : 'none'
        },
        {
            top: '-6%',
            left: '32%',
            display: media === 'xs' ? 'none' : 'block'
        }
    ]

    return (
        <>
            {circleStyles.map((style, i) =>
                <BgCircle
                    custom={i}
                    key={i}
                    style={style} />)}
        </>
    )
}