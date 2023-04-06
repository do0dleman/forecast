import { useContext } from "react"
import mediaContext from "../../../../contexts/MediaContexts"
import BgCircle from "../../../../ui/bgCircle/BgCircle"

export default function Circles() {

    const { media } = useContext(mediaContext)
    const circleStyles = [
        {
            width: '5em',
            height: '5em',
            top: '-1em',
            left: '-1em',
        },
        {
            width: '3em',
            height: '3em',
            bottom: '22%',
            left: '17%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            height: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            top: '-6%',
            right: '5%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '6em' : '0',
            height: media === 'lg' || media === 'md'
                ? '6em' : '0',
            top: '12%',
            left: '40%',
        },
        {
            width: '5.3em',
            height: '5.3em',
            bottom: '38%',
            right: '20%',
        },
        {
            width: '4em',
            height: '4em',
            bottom: '-8%',
            right: media === 'lg' || media === 'md'
                ? '30%' : '10%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '3.6em' : '0',
            height: media === 'lg' || media === 'md'
                ? '3.6em' : '0',
            bottom: '-4%',
            left: '20%',
        }
    ]

    return (
        <>
            {circleStyles.map((style, i) =>
                <BgCircle
                    custom={i}
                    key={JSON.stringify(style)}
                    style={style} />)}
        </>
    )
}