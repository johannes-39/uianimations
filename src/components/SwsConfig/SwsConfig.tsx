import React, {useState} from 'react'
import {AbsolviertProp, FwpfProp, SwsProp} from "@/features/Fwpfs/types";
import {Box, Stack, Typography} from '@mui/material';
import CustomSlider from "@/components/Slider/CustomSlider";
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import Modulbeschreibung from "@/components/Modulbeschreibung/Modulbeschreibung";
import theme from "@/styles/theme";
import {ConfigProps} from "@/features/Config/Config";


export type MyMenuItems = {
    value: number;
}

type SwsConfigProps = { defaultValue: number } & SwsProp & {
    fwpf: FwpfProp[];
} & Partial<AbsolviertProp>;

const SwsConfig = ({fwpf, ...props}: SwsConfigProps & ConfigProps & { fwpf: (FwpfProp & AbsolviertProp)[] }) => {


    const [expandedIndex, setExpandedIndex] = useState(-1)
    return (
        <Box sx={{mx: 'auto'}}>


            <Typography variant="body1" color={theme.palette.primary.main} paragraph>
                {props.sws}
            </Typography>
            {/*<Typography variant="body1" paragraph>*/}
            {/*    {props.info}*/}
            {/*</Typography>*/}
            <CustomSlider {...props} defaultValue={props.defaultValue}/>
            <Typography variant="body1" color={theme.palette.primary.main} sx={{marginTop: 3}} paragraph>
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
                                          expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} type={"list"}>
                                <Modulbeschreibung expanded={index === expandedIndex} {...value}/>
                            </ObjectHeader>)
                    }
                )}</Stack>


        </Box>
    )
}
export default SwsConfig
