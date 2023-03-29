interface WindDirectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string
    degree: number
}
export default function WindDirection(props: WindDirectionProps) {

    const { className, degree, ...rest } = props

    return (
        <i className={`${className} 
        wi wi-wind wi from-${degree}-deg`}
            {...rest} />
    )
}