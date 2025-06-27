import React, {useState} from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {Stack} from "@mui/material";
import {fwpfs} from "@/features/Fwpfs/content";
import Modulbeschreibung from "@/components/Modulbeschreibung/Modulbeschreibung";
import Filter from "@/components/Filter/Filter";
import {FwpfProp} from "@/features/Fwpfs/types";
import Box from "@mui/material/Box";


const Fwpfs = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);
    const [searchValue, setSearchValue] = useState("alle");
    const [list, setList] = useState<FwpfProp[]>(fwpfs);


    const moveItem = (index: number, direction: "up" | "down") => {
        const newList = [...list];
        const targetIndex = direction === "up" ? index - 1 : index + 1;

        // außerhalb der Liste -> nichts tun
        if (targetIndex < 0 || targetIndex >= newList.length) return;

        // tauschen
        [newList[index], newList[targetIndex]] = [
            newList[targetIndex],
            newList[index],
        ];
        setList(newList);
    };


    return (
        <Stack spacing={1} sx={{transition: "0.5s linear"}}>
            <Filter searchValue={searchValue} setSearchValue={setSearchValue}></Filter>

            {list.map((value, index) => {
                    const isFaded = searchValue !== "alle" && value.fachbereich !== searchValue;
                    return (
                        <ObjectHeader sx={{
                            bgcolor: index < 5 ? `rgba(0, 180, 0, ${(10 - index * 2) / 20})` : index > 14 ? `rgba(255, 100, 100, ${(10 - (index - 19) * -2) / 20})` : '#ffffff',
                            opacity: isFaded ? "0.08" : '1'  // Grün mit dynamischer Transparenz
                        }} key={value.label} label={value.label} index={index}
                                      expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} type={"list"}
                                      moveItem={moveItem}>
                            <Modulbeschreibung expanded={index === expandedIndex} {...value}/>
                        </ObjectHeader>)
                }
            )}


        </Stack>
    )
}
export default Fwpfs
