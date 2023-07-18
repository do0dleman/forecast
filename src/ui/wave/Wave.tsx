import './Wave.scss'
import Waves from './components/Waves'

interface WaveProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    precipitation: number
}
export default function Wave(props: WaveProps) {

    const { className, children, precipitation, ...rest } = props
    const top = Math.min((1 - Math.log10(precipitation + 1)) * 100, 100)
    return (
        <div className={`${className} --wave`} {...rest}>
            {precipitation}
            <Waves top={top + 4} />
            <Waves top={top + 2} />
            <Waves top={top} />
        </div>
    )
}