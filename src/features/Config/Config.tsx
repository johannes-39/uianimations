import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {absolviert, fwpfs, swsConfig} from "@/features/Fwpfs/content";
import SwsConfig from "@/components/SwsConfig/SwsConfig";
import {AbsolviertProp, FwpfProp} from "@/features/Fwpfs/types";

export type ConfigProps = {
    selectedValue: number;
    setSelectedValue: Dispatch<SetStateAction<number>>;
}
const Config = ({...props}: ConfigProps) => {

    const [defaultValue, setDefaultValue] = useState(0)
    const filteredFwpfs = absolviert.map(entry => {
        const fwpf = fwpfs.find(f => f.id === entry.fwpfId);


        return fwpf ? {...fwpf, note: entry.note, semester: entry.semester} : null;
    }).filter(Boolean) as (FwpfProp & AbsolviertProp)[];

    useEffect(() => {
        const totalSws = filteredFwpfs.reduce((sum, fwpf) => sum + fwpf.sws, 0);
        setDefaultValue(totalSws);
    }, [defaultValue, filteredFwpfs]);
    const content = {...swsConfig, fwpf: filteredFwpfs, defaultValue}
    return (
        <SwsConfig {...props} {...content}/>
    )
}
export default Config
