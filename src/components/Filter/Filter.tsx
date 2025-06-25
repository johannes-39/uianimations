import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

type FilterProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
}
const Filter = ({...props}: FilterProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchValue((event.target as HTMLInputElement).value);
    };
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={props.searchValue}
                onChange={handleChange}
            >
                <FormControlLabel value="alle" control={<Radio/>} label="Alle"/>
                <FormControlLabel value="win" control={<Radio/>} label="WIN"/>
                <FormControlLabel value="in" control={<Radio/>} label="IN"/>
                <FormControlLabel value="min" control={<Radio/>} label="MIN"/>
            </RadioGroup>
        </FormControl>
    );
}
export default Filter
