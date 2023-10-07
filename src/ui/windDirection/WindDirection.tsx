interface WindDirectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string
    degree: number
}
export default function WindDirection(props: WindDirectionProps) {

    let { className, degree, ...rest } = props

    if (degree < 0) degree += 360
    return (
        <i className={`${className} 
        wi wi-wind wi from-${degree}-deg`}
            {...rest} />
    )
}