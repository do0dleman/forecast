import './ActiveItem.scss'

interface ActiveItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    item: string
}
export default function ActiveItem(props: ActiveItemProps) {

    const { className, item, ...rest } = props

    return (
        <div
            className={`${className} active-item`}
            {...rest}>
            <div>{item}</div>
        </div>
    )
}