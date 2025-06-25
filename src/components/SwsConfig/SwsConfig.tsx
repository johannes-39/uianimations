import React from 'react'
import {SwsProp} from "@/features/Fwpfs/types";
import {Box, Divider, Grid, Typography} from '@mui/material';
import SelectField from "@/components/SelectField/SelectField";
import {styled} from '@mui/material/styles';

const GridItem = styled(Grid)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
}));


export type MyMenuItems = {
    value: number;
}
const items: MyMenuItems[] = [{
    value: 1
},
    {
        value: 2
    }]

const SwsConfig = ({...props}: SwsProp) => {
    return (
        <Box sx={{maxWidth: 600, mx: 'auto', p: 2}}>


            <Typography variant="body1" paragraph>
                {props.sws}
            </Typography>
            {/*<Typography variant="body1" paragraph>*/}
            {/*    {props.info}*/}
            {/*</Typography>*/}
            <Box sx={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', padding: 2}}>
                <Grid container sx={{alignItems: "center",}}>

                    <GridItem size={5}>
                        Anzahl
                    </GridItem>
                    <GridItem size={4}>
                        schon belegt
                    </GridItem>
                    <GridItem size={3}>
                        Gesamt
                    </GridItem>

                </Grid>
                <Divider sx={{marginY: 1}}/>
                <Grid container sx={{alignItems: "center", justifyContent: "center"}}>

                    <GridItem size={5}>
                        <SelectField label={"Module"} items={items}/>
                    </GridItem>
                    <GridItem size={4}>
                        {props.belegt}
                    </GridItem>
                    <GridItem size={3}>
                        {props.min}
                    </GridItem>

                </Grid>
            </Box>


        </Box>
    )
}
export default SwsConfig
