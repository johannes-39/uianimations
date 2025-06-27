import React from 'react'
import Radio, {RadioProps} from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {styled} from "@mui/material/styles";

type FilterProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const BpIcon = styled('span')(() => ({
    borderRadius: 0, // eckig statt rund
    width: 18,
    height: 18,
    boxShadow: 'inset 0 0 0 2px #555, inset 0 -2px 0 #333', // retro Rahmen mit Schatten
    backgroundColor: '#ffffff',
    '.Mui-focusVisible &': {
        outline: '2px solid #ff9800',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: '#ffffff',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: '#ffffff',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#ffffff',
    backgroundImage: 'none',
    boxShadow: 'inset 0 0 0 2px #000',
    '&::before': {
        display: 'block',
        width: 12,
        height: 12,
        backgroundColor: '#000000',
        content: '""',
        margin: '3px auto',
    },
    'input:hover ~ &': {
        backgroundColor: '#ffffff',
    },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

const Filter = ({...props}: FilterProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchValue((event.target as HTMLInputElement).value);
    };
    return (
        <FormControl fullWidth>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={props.searchValue}
                onChange={handleChange}
            >
                <FormControlLabel value="alle" control={<BpRadio/>} label="Alle"/>
                <FormControlLabel value="win" control={<BpRadio/>} label="WIN"/>
                <FormControlLabel value="in" control={<BpRadio/>} label="IN"/>
                <FormControlLabel value="min" control={<BpRadio/>} label="MIN"/>
            </RadioGroup>
        </FormControl>
    );
}
export default Filter
