
interface WaveSVGProps extends React.SVGProps<SVGSVGElement> {

}
export default function WaveSVG(props: WaveSVGProps) {

    const { ...rest } = props

    return (
        <svg {...rest}
            xmlns='http://www.w3.org/2000/svg'
            viewBox="0 0 800 880">
            <path
                d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z"
            />
            <path
                d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z"
            />
            <rect x='0' y='80' width='100%' height='100%' />
        </svg>
    )
}