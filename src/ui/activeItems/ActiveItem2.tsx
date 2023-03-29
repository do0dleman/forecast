import './ActiveItem.scss'

interface ActiveItem2Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    item: string
    item2: string
}
export default function ActiveItem2(props: ActiveItem2Props) {

    const { className, item, item2, ...rest } = props

    return (
        <div
            className={`${className} active-item active-item2`}
            {...rest}>
            <div>{item}</div>
            <div>{item2}</div>
        </div>
    )
}