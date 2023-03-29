import './Button.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    className?: string

}
export default function Button(props: ButtonProps) {

    const { className, children, ...rest } = props

    return (
        <button className={`${className} --button`} {...rest}>
            {children}
        </button>
    )
}