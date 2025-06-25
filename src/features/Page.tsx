'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Fwpfs from "@/features/Fwpfs/Fwpfs";
import Button from '@mui/material/Button';
import Start from "@/features/Start/Start";
import Config from "@/features/Config/Config";
import Summary from "@/features/Summary/Summary";

const Page = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', typography: 'body1', maxWidth: '700px'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" variant={"fullWidth"}>
                        <Tab label="Fwpfs" value="1"/>
                        <Tab label="Config" value="2"/>
                        <Tab label="Module" value="3"/>
                        <Tab label="Summary" value="4"/>
                    </TabList>
                </Box>
                <TabPanel value="1"><Start/></TabPanel>
                <TabPanel value="2"><Config/></TabPanel>
                <TabPanel value="3"><Fwpfs/></TabPanel>
                <TabPanel value="4"><Summary/></TabPanel>
            </TabContext>
            <Box sx={{width: `100%`, display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                <Button sx={{mr: 3}} variant={"outlined"} onClick={() => setValue(value === '1' ? '2' : '3')}>
                    Weiter
                </Button>
            </Box>

        </Box>
    );
}
export default Page