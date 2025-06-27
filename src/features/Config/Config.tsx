import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {absolviert, swsConfig, fwpfs} from "@/features/Fwpfs/content";
import SwsConfig from "@/components/SwsConfig/SwsConfig";
import {Stack} from "@mui/material";
import {AbsolviertProp, FwpfProp} from "@/features/Fwpfs/types";

const Config = () => {

    const filteredFwpfs= absolviert.map(entry => {
        const fwpf = fwpfs.find(f => f.id === entry.fwpfId);
        return fwpf ? { ...fwpf, note: entry.note, semester: entry.semester } : null;
    }).filter(Boolean) as (FwpfProp & AbsolviertProp)[];
    const content = {...swsConfig,fwpf: filteredFwpfs}
    console.log(filteredFwpfs)
    return (
                <SwsConfig {...content}/>
    )
}
export default Config
