import './BgCircle.scss'

interface BgCircleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
}
export default function BgCircle(props: BgCircleProps) {

    const { className, ...rest } = props

    return (
        <div
            className={`${className} --bgCircle`}
            {...rest} />

    )
}