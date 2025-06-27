import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {SwsProp} from "@/features/Fwpfs/types";


const marks = [
    {
        value: 0,
        label: '0 SWS',
    },
    {
        value: 4,
        label: '4 SWS',
    },
    {
        value: 8,
        label: '8 SWS',
    },
    {
        value: 12,
        label: '12 SWS',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

type CustomSliderProps = {
    belegt: number;
}
const CustomSlider = ({...props}: SwsProp & CustomSliderProps) => {
    const [value, setValue] = React.useState<number>(props.belegt * 4);

    const handleChange = (event: Event, newValue: number) => {
        if (newValue >= props.belegt * 4) {
            setValue(newValue);
        }
    };
    return (
        <Box sx={{width: "100%", paddingX: 4}}>
            <Slider
                aria-label="Temperature"
                defaultValue={props.belegt * 4}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={2}
                marks={marks}
                min={0}
                max={props.min}
                value={value}
                onChange={handleChange}
            />
        </Box>
    )
}
export default CustomSlider
