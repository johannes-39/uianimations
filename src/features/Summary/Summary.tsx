import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {Stack, Typography} from "@mui/material";
import {fwpfs} from "@/features/Fwpfs/content";
import BewerbungsFeld from "@/components/BewerbungsFeld/BewerbungsFeld";
import theme from "@/styles/theme";


const Summary = () => {

    return (
        <Stack spacing={1} alignItems="flex-start" sx={{transition: "0.5s linear"}}>
            <Typography variant="body1" color={theme.palette.primary.main} paragraph>
                Hier sehen Sie ihre Prioritätenverteilung und die Aktuelle Auslastung
            </Typography>
            {fwpfs.map((value, index) => {
                    return (
                        <ObjectHeader sx={{
                            bgcolor: index < 5 ? `rgba(0, 180, 0, ${(10 - index * 2) / 20})` : index > 14 ? `rgba(255, 100, 100, ${(10 - (index - 19) * -2) / 20})` : '#ffffff'
                        }} key={value.label} label={value.label} value={value.auslastung} index={index}>
                            {value.auslastung >= 95 && <BewerbungsFeld/>}
                        </ObjectHeader>)
                }
            )}


        </Stack>
    )
}
export default Summary
