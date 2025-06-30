import React, {Dispatch, ReactNode, SetStateAction} from 'react'
import {Box, Grid, SxProps, Typography} from "@mui/material";
import Loading from "@/components/Loading/Loading";
import Priority from "@/components/Priority/Priority";
import {AbsolviertProp} from "@/features/Fwpfs/types";
import CustomToolTip from "@/components/CustomToolTip/CustomToolTip";
import InfoIcon from '@mui/icons-material/Info';


type ObjectHeaderProps = {
    label?: string;
    value?: number;
    children?: ReactNode;
    bodyText?: string;
    index?: number;
    expandedIndex?: number;
    setExpandedIndex?: Dispatch<SetStateAction<number>>;
    sx?: SxProps;
    type?: string;
    moveItem?: (index: number, direction: "up" | "down") => void;
} & Partial<AbsolviertProp>;


const ObjectHeader = ({...props}: ObjectHeaderProps) => {
    const {setExpandedIndex, index} = props;
    const handleClick = () => {
        if (setExpandedIndex !== undefined && index !== undefined && index !== props.expandedIndex) {
            setExpandedIndex(index);
        } else if (setExpandedIndex !== undefined && index !== undefined && index === props.expandedIndex) {
            setExpandedIndex(-1)
        }

    }
    return (

        <Box sx={{...{width: '100%', bgcolor: "#ffffff", boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}, ...props.sx}}>
            {props.value &&
                <Loading value={props.value}/>}<Box sx={{p: 1.5}}>
            <Grid container>
                <Grid size={9} onClick={handleClick}
                      sx={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                        <Typography variant={'body1'}>{props.label?.toUpperCase()}</Typography>
                    </Box>
                </Grid>
                {props.type === "list" && props.moveItem ? <Grid size={3}>
                    <Priority index={props.index || 0} moveItem={props.moveItem}/>
                </Grid> : null}
                {props.semester &&
                    <Grid size={12} onClick={handleClick}>
                        <Typography>{props.semester}</Typography>
                    </Grid>

                }
                {props.note &&
                    <Grid size={12} onClick={handleClick}>
                        <Typography>Note: {props.note}</Typography>
                    </Grid>
                }
                {props.value && props.value >= 95 &&
                    <Grid size={3} sx={{display: "flex", justifyContent: "flex-end"}}>

                        <CustomToolTip title="Aufgrund hoher Auslastung kann hier eine Bewerbung hinzugefügt werden"
                                       placement="top"><InfoIcon/></CustomToolTip>
                    </Grid>
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: 'center'}}>
                {props.children}
            </Box>
            {props.bodyText !== undefined &&
                <Typography variant={'body2'} sx={{marginTop: 1, textAlign: "center"}}>
                    {props.bodyText?.toUpperCase()}
                </Typography>}

        </Box>
        </Box>

    )
}
export default ObjectHeader
