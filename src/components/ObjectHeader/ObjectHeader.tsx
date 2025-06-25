import React, {ReactNode} from 'react'
import {Box, Divider, Typography} from "@mui/material";


type ObjectHeaderProps = {
    label?: string;
    children?: ReactNode;
    bodyText?: string;
}
const ObjectHeader = ({...props} : ObjectHeaderProps) => {
    return (
        <Box sx={{width: '100%', bgcolor: "white", p: 2}}>
            <Typography variant={'body1'}>{props.label?.toUpperCase()}</Typography>
            <Divider sx={{my: 1}}></Divider>
            <Box sx={{display: "flex", justifyContent: 'center'}}>
                {props.children}
            </Box>
            <Typography variant={'body2'} sx={{marginTop: 1, textAlign: "center"}}>{props.bodyText?.toUpperCase()}</Typography>
        </Box>
    )
}
export default ObjectHeader
