import React, {useState} from 'react'
import {AbsolviertProp, FwpfProp, SwsProp} from "@/features/Fwpfs/types";
import {Box, Divider, Grid, Stack, Typography} from '@mui/material';
import SelectField from "@/components/SelectField/SelectField";
import {styled} from '@mui/material/styles';
import CustomSlider from "@/components/Slider/CustomSlider";
import {fwpfs} from "@/features/Fwpfs/content";
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import Modulbeschreibung from "@/components/Modulbeschreibung/Modulbeschreibung";
import theme from "@/styles/theme";

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

type SwsConfigProps = SwsProp & {
    fwpf: FwpfProp[];
} & Partial<AbsolviertProp>;

const SwsConfig = ({fwpf, ...props}: SwsConfigProps  & { fwpf: (FwpfProp & AbsolviertProp)[] }) => {


    const [expandedIndex, setExpandedIndex] = useState(-1)
    return (
        <Box sx={{mx: 'auto', p: 2}}>


            <Typography variant="body1" paragraph>
                {props.sws}
            </Typography>
            {/*<Typography variant="body1" paragraph>*/}
            {/*    {props.info}*/}
            {/*</Typography>*/}
                <CustomSlider {...props} belegt={fwpf.length}/>
            <Typography variant="body1" paragraph>
                Bereits belegt:
            </Typography>
                {/*<Grid container sx={{alignItems: "center",}}>*/}

                {/*    <GridItem size={5}>*/}
                {/*        Anzahl*/}
                {/*    </GridItem>*/}
                {/*    <GridItem size={4}>*/}
                {/*        schon belegt*/}
                {/*    </GridItem>*/}
                {/*    <GridItem size={3}>*/}
                {/*        Gesamt*/}
                {/*    </GridItem>*/}

                {/*</Grid>*/}
                {/*<Divider sx={{marginY: 1}}/>*/}
                {/*<Grid container sx={{alignItems: "center", justifyContent: "center"}}>*/}

                {/*    <GridItem size={5}>*/}
                {/*        <SelectField label={"Module"} items={items}/>*/}
                {/*    </GridItem>*/}
                {/*    <GridItem size={4}>*/}
                {/*        {props.belegt}*/}
                {/*    </GridItem>*/}
                {/*    <GridItem size={3}>*/}
                {/*        {props.min}*/}
                {/*    </GridItem>*/}

                {/*</Grid>*/}
            <Stack spacing={1} alignItems="flex-start" sx={{transition: "0.5s linear"}}>
            {fwpf.map((value: FwpfProp & AbsolviertProp, index) => {
                    return (
                        <ObjectHeader sx={{
                            bgcolor: '#ffffff',
                        }} key={value.label} {...value} index={index}
                                      expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} type={"list"} >
                            <Modulbeschreibung expanded={index === expandedIndex} {...value}/>
                        </ObjectHeader>)
                }
            )}</Stack>




        </Box>
    )
}
export default SwsConfig
