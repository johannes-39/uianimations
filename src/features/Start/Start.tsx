import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {Stack} from "@mui/material";
import Massgaben from "@/components/Massgaben/Massgaben";
import {massgaben} from "@/features/Fwpfs/content";

const Start = () => {
    return (
        <Stack spacing={1} alignItems="flex-start">
            <ObjectHeader>
                <Massgaben {...massgaben} />
            </ObjectHeader>
        </Stack>
    )
}
export default Start
