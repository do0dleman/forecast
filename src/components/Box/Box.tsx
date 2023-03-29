import './Box.scss'

interface BoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
}
export default function Box(props: BoxProps) {

    const { className, children, ...rest } = props

    return (
        <div className={`${className} --box`} {...rest}>
            {children}
        </div>
    )
}