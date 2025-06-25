'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Tabs = ({...props}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', maxWidth: '700px' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" variant={"fullWidth"}>
                        <Tab label="Home" value="1" />
                        <Tab label="Shop" value="2" />
                        <Tab label="About" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">{props.children}</TabPanel>
                <TabPanel value="2">{props.children}</TabPanel>
                <TabPanel value="3">{props.children}</TabPanel>
            </TabContext>
        </Box>
    );
}
export default Tabs
