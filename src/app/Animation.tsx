'use client'
import React, {useState} from 'react'
import CustomButton from "@/components/Button/Button";
import {Box, Stack} from "@mui/material";
import Loading from "@/components/Loading/Loading";
import SpeedDial from "@/components/SpeedDial/SpeedDial";
import Tabs from '@/components/Tabs/Tabs';
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import { ToastContainer, toast } from 'react-toastify';

const Animation = () => {
    const [counter, setCounter] = useState(0)
    const handleClickCounter = () => {
        setCounter(counter + 1)
    }

    const handleClickToaster = () => {
        toast.success('🦄 Wow so easy!', {
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
    return (

            <Tabs>
                <Stack spacing={2} alignItems="flex-start">
                <ObjectHeader label={"button"}>
                    <CustomButton
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                                transform: 'scale(1.05)',
                            },
                        }}
                        onClick={handleClickCounter}
                    >Test Button</CustomButton>
                </ObjectHeader>
                <ObjectHeader label={"laden"}>
                    <Loading></Loading>
                </ObjectHeader>

                    <ObjectHeader label={"Absenden"}>
                        <CustomButton
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                px: 3,
                                py: 1.5,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={handleClickToaster}
                        >Absenden</CustomButton>
                    </ObjectHeader><Box sx={{width: '100%'}}>
                    <SpeedDial/>
                </Box>
                    <ToastContainer />
                </Stack>
            </Tabs>


    )
}
export default Animation
