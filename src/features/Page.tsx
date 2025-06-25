'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Animation from "@/features/Animation/Animation";
import ShitAnimation from "@/features/ShitAnimation/ShitAnimation";
import NoAnimation from "@/features/NoAnimation/NoAnimation";

const Page = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', maxWidth: '700px' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" variant={"fullWidth"}>
                        <Tab label="GUT" value="1" />
                        <Tab label="SCHLECHT" value="2" />
                        <Tab label="Keine Animation" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Animation/></TabPanel>
                <TabPanel value="2"><ShitAnimation/></TabPanel>
                <TabPanel value="3"><NoAnimation/></TabPanel>
            </TabContext>
        </Box>
    );
}
export default Page