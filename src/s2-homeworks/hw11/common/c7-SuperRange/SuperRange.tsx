import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{

        display: 'flax',
                width: "160px",
                marginLeft: "12px",
                marginRight: '12px',
                color: 'green'


                // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
