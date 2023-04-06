import WaveSVG from './WaveSVG'

interface WavesProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    top: number
}
export default function Waves(props: WavesProps) {

    const { className, children, top, ...rest } = props

    return (
        <div className='--wave-block' {...rest}>
            <WaveSVG style={{ top: `${top}%` }} />
            <WaveSVG style={{ top: `${top}%` }} />
        </div>
    )
}