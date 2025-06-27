import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@/components/Button/Button";
import {toast, ToastContainer} from 'react-toastify';

const BewerbungsFeld = () => {

    const [expanded, setExpanded] = useState(true);
    const [value, setValue] = useState("")

    const handleClick = () => {
        setExpanded(false)
        toast.success('Expose wurde angefügt', {
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
        <Box sx={{
            width: '100%',
            marginTop: 2,
            bgcolor: "white",
            p: 1,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: 1
        }}>
            {expanded ? <Box sx={{width: '100%'}}>
                <TextField
                    fullWidth
                    value={value}
                    id="filled-multiline-static"
                    label="Bewerbung verfassen"
                    multiline
                    rows={4}
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value);
                    }}
                />
                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: 1}}>
                    <Button onClick={handleClick}>
                        Absenden
                    </Button>
                </Box>
            </Box> : <Box onClick={() => setExpanded(!expanded)}>{value}</Box>}
            <ToastContainer/>
        </Box>

    )
}
export default BewerbungsFeld
