import React, {ReactNode} from 'react'
import {Box, Divider, Typography} from "@mui/material";


type ObjectHeaderProps = {
    label?: string;
    children?: ReactNode;
}
const ObjectHeader = ({...props} : ObjectHeaderProps) => {
    return (
        <Box sx={{width: '100%', bgcolor: "white", p: 2}}>
            <Typography variant={'body1'}>{props.label?.toUpperCase()}</Typography>
            <Divider sx={{my: 1}}></Divider>
            <Box sx={{display: "flex", justifyContent: 'center'}}>
                {props.children}
            </Box>

        </Box>
    )
}
export default ObjectHeader
