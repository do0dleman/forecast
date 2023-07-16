import { useState } from 'react'
import './ShowAllButton.scss'

interface ShowAllButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    isShowAll: boolean
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ShowAllButton(props: ShowAllButtonProps) {

    const { isShowAll, setShowAll, ...rest } = props

    return (
        <div className='weather-table__check-box' {...rest}>
            <input
                type="checkbox"
                name="ShowAll"
                id=""
                // checked={checked}
                // onChange={() => { isChecked(!checked) }} 
                checked={isShowAll}
                onChange={() => { setShowAll(!isShowAll) }}
            />
            <label htmlFor="ShowAll">Show all</label>

        </div>
    )
}