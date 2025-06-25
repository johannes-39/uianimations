import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {swsConfig} from "@/features/Fwpfs/content";
import SwsConfig from "@/components/SwsConfig/SwsConfig";
import {Stack} from "@mui/material";

const Config = () => {
    return (
        <Stack spacing={1} alignItems="flex-start">
            <ObjectHeader>
                <SwsConfig {...swsConfig}/>
            </ObjectHeader>
        </Stack>
    )
}
export default Config
