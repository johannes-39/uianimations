'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Fwpfs from "@/features/Fwpfs/Fwpfs";
import Button from '@mui/material/Button';
import Config from "@/features/Config/Config";
import Summary from "@/features/Summary/Summary";
import {toast, ToastContainer} from "react-toastify";

const Page = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleClick = () => {
        setValue(value === '1' ? '2' : '3')
        if (value === "3"){
            toast.success('Erfolgreich abgesendet', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    return (
        <Box sx={{width: '100%', typography: 'body1', maxWidth: "700px", }}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" variant={"fullWidth"}>
                        {/*<Tab label="Fwpfs" value="1"/>*/}
                        <Tab label="Config" value="1"/>
                        <Tab label="Module" value="2"/>
                        <Tab label="Summary" value="3"/>
                    </TabList>
                </Box>
                {/*<TabPanel value="1"><Start/></TabPanel>*/}
                <TabPanel value="1"><Config/></TabPanel>
                <TabPanel value="2"><Fwpfs/></TabPanel>
                <TabPanel value="3"><Summary/></TabPanel>
            </TabContext>
            <Box sx={{width: `100%`, display: "flex", marginBottom: 3, justifyContent: "flex-end", alignItems: "center"}}>
                <Button sx={{mr: 3, transition: "0.3s linear" ,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                    }}  onClick={handleClick}>
                    {value === "3" ? "Verbindlich Speichern": "weiter"}
                </Button>
            </Box>
            <ToastContainer />

        </Box>
    );
}
export default Page