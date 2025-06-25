import React from 'react'
import {MassgabenProp} from "@/features/Fwpfs/types";
import {Box, Typography} from '@mui/material';

const Massgaben = ({...props}: MassgabenProp) => {
    return (
        <Box sx={{maxWidth: 600, mx: 'auto', p: 2}}>
            <Typography variant="h5" gutterBottom>
                Studiengang: {props.studiengang}
            </Typography>

            <Typography variant="body1" paragraph>
                {props.voraussetzung}
            </Typography>
            <Typography variant="body1" paragraph>
                {props.infos}
            </Typography>
            <Typography variant="body1" paragraph>
                {props.zusatzinfo}
            </Typography>


            {/*<Typography variant="body1" paragraph>*/}
            {/*    {props.hinweis}*/}
            {/*</Typography>*/}

            {/*<Typography variant="body2" color="text.secondary" paragraph>*/}
            {/*    {props.stundenplaninfo}*/}
            {/*</Typography>*/}

        </Box>
    )
}
export default Massgaben
