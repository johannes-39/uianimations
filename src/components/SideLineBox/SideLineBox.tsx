import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type SideLineBoxProps = {
    sws: number;
    fachbereich: string;
    pruefung: string;
}
const SideLineBox = ({...props}: SideLineBoxProps) => {
    return (
        <Box
            sx={{bgcolor: "white", padding: 1}}
        >
            <Typography variant="caption" gutterBottom sx={{display: 'block'}}> SWS: {props.sws}</Typography>
            <Divider sx={{marginY: 1}}/>
            <Typography variant="caption" gutterBottom
                        sx={{display: 'block'}}> Schwerpunkt: {props.fachbereich.toUpperCase()}</Typography>
            <Divider sx={{marginY: 1}}/>
            <Typography variant="caption" gutterBottom
                        sx={{display: 'block'}}> Prüfung: {props.pruefung}</Typography></Box>
    )
}
export default SideLineBox
