import React from 'react'
import {absolviert, fwpfs, swsConfig} from "@/features/Fwpfs/content";
import SwsConfig from "@/components/SwsConfig/SwsConfig";
import {AbsolviertProp, FwpfProp} from "@/features/Fwpfs/types";

const Config = () => {

    const filteredFwpfs = absolviert.map(entry => {
        const fwpf = fwpfs.find(f => f.id === entry.fwpfId);
        return fwpf ? {...fwpf, note: entry.note, semester: entry.semester} : null;
    }).filter(Boolean) as (FwpfProp & AbsolviertProp)[];
    const content = {...swsConfig, fwpf: filteredFwpfs}
    return (
        <SwsConfig {...content}/>
    )
}
export default Config
