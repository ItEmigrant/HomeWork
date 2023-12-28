import React from 'react'
import {FaArrowDown, FaArrowUp, FaRegQuestionCircle} from "react-icons/fa";

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else {
        return '';
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? <FaArrowDown/> : sort === up
            ? <FaArrowUp/>
            : <FaRegQuestionCircle />

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
        {sort === down
            ? <FaArrowDown />
            : sort === up
                ? <FaArrowUp />
                : <FaRegQuestionCircle />
        }
    </span>
    )
}

export default SuperSort