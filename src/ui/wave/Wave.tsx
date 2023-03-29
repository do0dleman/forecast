import './Wave.scss'
import WaveSVG from './WaveSVG'

interface WaveProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    precipitation: number
}
export default function Wave(props: WaveProps) {

    const { className, children, precipitation, ...rest } = props
    const top = `${Math.min(100 - precipitation / 5 * 100, 100)}%`
    return (
        <div className={`${className} --wave`} {...rest}>
            {precipitation}
            <WaveSVG
                style={{
                    top: top
                }} />
            <WaveSVG
                style={{
                    top: top
                }} />
        </div>
    )
}