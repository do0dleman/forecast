import './Header.scss'

interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {

}
export default function Header(props: HeaderProps) {

    const { className, children, ...rest } = props

    return (
        <header className='header' {...rest}>
            {children}

        </header>
    )
}