import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MyMenuItems} from "@/components/SwsConfig/SwsConfig";

type SelectFieldProp = {
    items: MyMenuItems[];
    label: string;
}

const SelectField = ({...props}: SelectFieldProp) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 60}}>
            <FormControl variant={"standard"} fullWidth>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={props.label}
                    onChange={handleChange}
                >
                    {
                        props.items.map((value) =>
                            <MenuItem key={value.value} value={value.value}>{value.value}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
export default SelectField
