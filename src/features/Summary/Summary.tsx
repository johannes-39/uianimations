import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {Stack} from "@mui/material";
import {fwpfs} from "@/features/Fwpfs/content";
import Exposefield from "@/components/Exposefield/Exposefield";


const Summary = () => {

    return (
        <Stack spacing={1} alignItems="flex-start" sx={{transition: "0.5s linear"}}>
                Hier sehen sie ihre Belegung und die Akutelle Auslastung
            {fwpfs.map((value, index) => {
                    return (
                        <ObjectHeader sx={{
                            bgcolor: index < 5 ? `rgba(0, 180, 0, ${(10 - index * 2) / 20})` : index > 14 ? `rgba(255, 100, 100, ${(10 - (index - 19) * -2) / 20})` : '#ffffff'
                        }} key={value.label} label={value.label} value={value.auslastung} index={index}>
                            {value.auslastung >= 95 && <Exposefield/>}
                        </ObjectHeader>)
                }
            )}


        </Stack>
    )
}
export default Summary
