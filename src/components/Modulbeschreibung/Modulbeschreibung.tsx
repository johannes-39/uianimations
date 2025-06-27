import React from 'react'
import {FwpfProp} from "@/features/Fwpfs/types";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import {useTypewriter} from "@/hooks/useTypewriter";

type ModulbeschreiblungProps = {
    expanded: boolean
} & FwpfProp

const Modulbeschreibung = ({expanded, prof, zusammenfassung, vorkenntnisse}: ModulbeschreiblungProps) => {


    const text = `Prof: ${prof}\n-\n${zusammenfassung}\n- \nVorkenntnisse: ${vorkenntnisse}`;
    // Texte per Typewriter animieren, nur wenn expanded=true
    //const typedText = useTypewriter(text, 3, expanded);
    return (
        <Box sx={{width: "100%"}}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider sx={{marginY: 1}}/>
                <Box sx={{p: 1}}>
                    <Typography sx={{
                        marginBottom: 2,
                        whiteSpace: 'pre-wrap',
                        textAlign: 'left',
                        lineHeight: 1.6
                    }}>{text}</Typography>
                </Box>

            </Collapse>
        </Box>
    )
}
export default Modulbeschreibung
