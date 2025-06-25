import React from 'react'
import {Box, IconButton} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';

type PriorityProps = {
    index: number;
    moveItem: (index: number, direction: "up" | "down") => void;
}


const CustomIconButton = styled(IconButton)(({theme}) => ({
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    ...theme.typography.body1,
    textAlign: 'center',
}));
const Priority = ({...props}: PriorityProps) => {

    return (
        <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
            <CustomIconButton size={"small"} onClick={() => props.moveItem(props.index, "down")}>
                <ExpandMoreIcon/>
            </CustomIconButton>
            <CustomIconButton size={"small"} onClick={() => props.moveItem(props.index, "up")}>
                <ExpandMoreIcon sx={{transform: 'rotate(180deg)'}}/>
            </CustomIconButton>
        </Box>
    )
}
export default Priority
