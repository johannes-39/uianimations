import React from 'react'
import {FwpfProp} from "@/features/Fwpfs/types";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

type ModulbeschreiblungProps = {
    expanded: boolean
} & FwpfProp

const Modulbeschreibung = ({...props}: ModulbeschreiblungProps) => {
    return (
        <Box>
            <Collapse in={props.expanded} timeout="auto" unmountOnExit>
                <Divider sx={{marginY: 1}}/>
                <Box sx={{p: 1}}>
                    <Typography sx={{marginBottom: 2}}>Prof: {props.prof}</Typography>
                    <Typography sx={{marginBottom: 2}}>
                        {props.zusammenfassung}
                    </Typography>
                    <Typography>
                        Vorkenntnisse: {props.vorkenntnisse}
                    </Typography>
                </Box>

            </Collapse>
        </Box>
    )
}
export default Modulbeschreibung
