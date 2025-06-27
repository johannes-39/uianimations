'use client'
import React, {useState} from 'react'
import CustomButton from "@/components/Button/Button";
import {Box, Stack} from "@mui/material";
import Loading from "@/components/Loading/Loading";
import SpeedDial from "@/components/SpeedDial/SpeedDial"
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {toast, ToastContainer} from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';


const Animation = () => {
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleClickCounter = () => {
        setCounter(counter + 1)
    }

    const handleClickToaster = () => {
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
    return (
        <Stack spacing={1} alignItems="flex-start">
            <ObjectHeader label={"button"} bodyText={`Counter: ${counter}`}>
                <CustomButton
                    sx={{
                        '&:hover': {
                            transform: 'scale(1.2)',
                        },
                    }}
                    onClick={handleClickCounter}
                >Test Button</CustomButton>

            </ObjectHeader>
            <ObjectHeader label={"Ladebalken"}>
                {!loading ? <CustomButton
                        onClick={() => setLoading(true)}
                    >Test Button</CustomButton> :
                    <Loading></Loading>}
            </ObjectHeader>

            <ObjectHeader label={"Absenden"}>
                <CustomButton
                    onClick={handleClickToaster}
                >Absenden</CustomButton>
            </ObjectHeader>
            <ObjectHeader label={"Ladebutton"}>
                <CustomButton
                    endIcon={<SendIcon/>}
                    variant={"contained"}
                    onClick={handleClickCounter}
                    loading={true}
                >Absenden</CustomButton>
            </ObjectHeader><Box sx={{width: '100%'}}>
            <SpeedDial/>
        </Box>
            <ToastContainer/>
        </Stack>
    )
}
export default Animation