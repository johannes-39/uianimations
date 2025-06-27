'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Fwpfs from "@/features/Fwpfs/Fwpfs";
import Config from "@/features/Config/Config";
import Summary from "@/features/Summary/Summary";
import {toast, ToastContainer} from "react-toastify";
import Footer from '@/components/Footer/Footer';

const Page = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleClick = () => {
        setValue(value === '1' ? '2' : '3')
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (value === "3") {
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

    const handleClickPrev = () => {
        setValue(value === '3' ? '2' : '1')
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <Box sx={{width: '100%', typography: 'body1', maxWidth: "700px",}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" variant={"fullWidth"}>
                        {/*<Tab label="Fwpfs" value="1"/>*/}
                        <Tab label="Start" value="1"/>
                        <Tab label="Fächerwahl" value="2"/>
                        <Tab label="Überblick" value="3"/>
                    </TabList>
                </Box>
                {/*<TabPanel value="1"><Start/></TabPanel>*/}
                <TabPanel sx={{marginBottom: 10}} value="1"><Config/></TabPanel>
                <TabPanel sx={{marginBottom: 5}} value="2"><Fwpfs/></TabPanel>
                <TabPanel sx={{marginBottom: 5}} value="3"><Summary/></TabPanel>
            </TabContext>
            <Footer prevClick={handleClickPrev} nextClick={handleClick} activeStep={value}></Footer>
            <ToastContainer/>

        </Box>
    );
}
export default Page